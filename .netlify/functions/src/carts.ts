import type { APIGatewayEvent, Handler } from "aws-lambda"

import * as cookie from "cookie"
import fetch from "node-fetch"

// https://github.com/DavidWells/netlify-functions-workshop/blob/master/lessons-code-complete/use-cases/1-rest-api/functions/api.js

export const handler: Handler = async (event: APIGatewayEvent) => {
  const BIGCOMMERCE_STORE_HASH = process.env.BIGCOMMERCE_STORE_HASH
  const BIGCOMMERCE_CLIENT_ID = process.env.BIGCOMMERCE_CLIENT_ID
  const BIGCOMMERCE_ACCESS_TOKEN = process.env.BIGCOMMERCE_ACCESS_TOKEN
  const BIGCOMMERCE_CLIENT_SECRET = process.env.BIGCOMMERCE_CLIENT_SECRET
  const SITE_URL = process.env.SITE_URL

  if (
    !BIGCOMMERCE_STORE_HASH ||
    !BIGCOMMERCE_CLIENT_ID ||
    !BIGCOMMERCE_ACCESS_TOKEN ||
    !BIGCOMMERCE_CLIENT_SECRET ||
    !SITE_URL
  ) {
    return {
      body: "Environment variable missing",
      statusCode: 400,
    }
  }

  // event.httpMethod === "POST"
  const path = event.path
  // const { msg } = event.queryStringParameters
  console.log(path)

  const apiURL = `https://api.bigcommerce.com/stores/${BIGCOMMERCE_STORE_HASH}/v3`

  try {
    const cookies = cookie.parse(event.headers.cookie)

    const hasCartIdCookie = cookies.hasOwnProperty("cartId")

    console.assert(hasCartIdCookie, cookies)

    const path = hasCartIdCookie
      ? `carts/${cookies.cartId.value}`
      : `carts`

    const url = new URL(`${apiURL}/${path}`)

    url.searchParams.append("include", "redirect_urls")

    const data = {
      line_items: [
        {
          quantity: 1,
          product_id: 104
        }
      ]
    }

    const response = await fetch(url, {
      body: JSON.stringify(data),
      headers: {
        "X-Auth-Client": BIGCOMMERCE_CLIENT_ID,
        "X-Auth-Token": BIGCOMMERCE_ACCESS_TOKEN,
        "X-Client-Name": "gatsby-bigcommerce-netlify-cms-starter",
        "X-Client-Type": "Gatsby",
        "X-Plugin-Version": "1.0.0",
        Accept: "application/json",
      },
      method: hasCartIdCookie ? "get" : "post"
    })

    let cookieHeader = cookie.serialize("cartId", undefined, { maxAge: -1 })

    if (response.ok) {
      const data = await response.json()
  
      const { id } = data

      cookieHeader = cookie.serialize("cartId", id, {
        maxAge: 60 * 60 * 24 * 28, // 4 weeks
      })

      return {
        body: JSON.stringify(data),
        headers: {
          "Access-Control-Allow-Headers": "Content-Type, Accept",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": SITE_URL,
          "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
          cookieHeader,
        },
        statusCode: response.status,
      }
    } else {
      const body = await response.text()

      return {
        body,
        statusCode: response.status,
      }
    }

  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}
