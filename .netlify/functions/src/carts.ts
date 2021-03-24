import type { APIGatewayEvent, Handler } from "aws-lambda"

import * as cookie from "cookie"
import fetch from "node-fetch"

// https://github.com/DavidWells/netlify-functions-workshop/blob/master/lessons-code-complete/use-cases/1-rest-api/functions/api.js

export const handler: Handler = async (event: APIGatewayEvent) => {
  const {
    BIGCOMMERCE_ACCESS_TOKEN,
    BIGCOMMERCE_CLIENT_ID,
    BIGCOMMERCE_CLIENT_SECRET,
    BIGCOMMERCE_STORE_HASH,
    GATSBY_SITE_URL,
  } = process.env

  if (
    !BIGCOMMERCE_STORE_HASH ||
    !BIGCOMMERCE_CLIENT_ID ||
    !BIGCOMMERCE_ACCESS_TOKEN ||
    !BIGCOMMERCE_CLIENT_SECRET ||
    !GATSBY_SITE_URL
  ) {
    return {
      body: "Environment variable missing",
      statusCode: 400,
    }
  }

  const apiURL = `https://api.bigcommerce.com/stores/${BIGCOMMERCE_STORE_HASH}/v3/`

  const headers = {
    "X-Auth-Client": BIGCOMMERCE_CLIENT_ID,
    "X-Auth-Token": BIGCOMMERCE_ACCESS_TOKEN,
    "X-Client-Name": "gatsby-bigcommerce-netlify-cms-starter",
    "X-Client-Type": "Gatsby",
    "X-Plugin-Version": "1.0.0",
    Accept: "application/json",
  }

  const options = {
    credentials: "include",
    headers,
    method: event.httpMethod
  }

  const createCart = async (event) => {
    console.info("createCart")

    const path = "carts"

    const url = new URL(path, `${apiURL}`)

    url.searchParams.append("include", "redirect_urls")

    const data = {
      line_items: [
        {
          quantity: 1,
          product_id: 145,
        },
      ],
    }

    const response = await fetch(url, {...options, body: JSON.stringify(data), method: "POST"})

    if (response.ok) {
      const { data } = await response.json()
      console.log("data", data)

      const { id } = data

      const cookieHeader = cookie.serialize("cartId", id, {
        maxAge: 60 * 60 * 24 * 28, // 4 weeks
      })

      return {
        body: JSON.stringify(data),
        cookieHeader,
        statusCode: response.status,
      }
    }

    return {
      statusCode: 500,
    }
  }

  const getCart = async (event) => {
    console.info("getCart")

    const cartId = event.queryStringParameters?.cartId

    const path = `carts/${cartId}`

    const url = new URL(path, `${apiURL}`)

    url.searchParams.append("include", "redirect_urls")

    const response = await fetch(url, options)

    if (response.ok) {
      const body = await response.text()

      const { id } = await response.json()

      const cookieHeader = cookie.serialize("cartId", id, {
        maxAge: 60 * 60 * 24 * 28, // 4 weeks
      })

      return {
        body,
        cookieHeader,
        statusCode: response.status,
      }
    }

    return {
      statusCode: 500,
    }
  }

  const updateCart = async (event) => {
    console.info("updateCart")

    const cartId = event.queryStringParameters?.cartId

    const path = `carts/${cartId}`

    const url = new URL(path, `${apiURL}`)

    url.searchParams.append("include", "redirect_urls")

    const data = {
      line_items: [
        {
          quantity: 1,
          product_id: 104,
        },
      ],
    }

    const response = await fetch(url, {...options, body: JSON.stringify(data), method: "POST"})

    if (response.ok) {
      const body = await response.text()

      const { id } = await response.json()

      const cookieHeader = cookie.serialize("cartId", id, {
        maxAge: 60 * 60 * 24 * 28, // 4 weeks
      })

      return {
        body,
        cookieHeader,
        statusCode: response.status,
      }
    }

    return {
      statusCode: 500,
    }
  }

  try {
    // console.log(event)

    if (event.httpMethod === "GET" && event.queryStringParameters?.cartId) {
      return await getCart(event)
    }

    if (event.httpMethod === "POST") {
      if (event.queryStringParameters?.cartId) {
        return await updateCart(event)
      } else {
        return await createCart(event)
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
