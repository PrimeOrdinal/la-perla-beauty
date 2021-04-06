import type { APIGatewayEvent, Handler } from "aws-lambda"

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
    method: event.httpMethod,
  }

  const createCart = async event => {
    console.info("createCart")

    const path = "carts"

    const url = new URL(path, `${apiURL}`)

    url.searchParams.append("include", "redirect_urls")

    const payload: {
      line_items?: Array<{
        product_id: number
        quantity: number
      }>
    } = {}

    if (event.body) {
      const body = JSON.parse(event.body)

      payload.line_items = [
        {
          product_id: parseInt(body?.identifier),
          quantity: body?.quantity ? body?.quantity : 1,
        },
      ]
    }

    const response = await fetch(url, {
      ...options,
      body: JSON.stringify(payload),
      method: "POST",
    })

    if (response.ok) {
      const { data } = await response.json()

      return {
        body: JSON.stringify(data),
        statusCode: response.status,
      }
    }

    return {
      statusCode: response.status,
    }
  }

  const getCart = async event => {
    console.info("getCart")

    const cartId = event.queryStringParameters?.cartId

    const path = `carts/${cartId}`

    const url = new URL(path, `${apiURL}`)

    url.searchParams.append("include", "redirect_urls")

    const response = await fetch(url, options)

    if (response.ok) {
      const { data } = await response.json()

      return {
        body: JSON.stringify(data),
        statusCode: response.status,
      }
    }

    return {
      statusCode: response.status,
    }
  }

  const addCartLineItems = async event => {
    console.info("addCartLineItems")

    const cartId = event.queryStringParameters?.cartId

    const path = `carts/${cartId}/items`

    const url = new URL(path, `${apiURL}`)
    console.log("url", url)

    url.searchParams.append("include", "redirect_urls")

    const payload: {
      line_items?: Array<{
        product_id: number
        quantity: number
      }>
    } = {}

    if (event.body) {
      const body = JSON.parse(event.body)

      payload.line_items = [
        {
          product_id: parseInt(body?.identifier),
          quantity: body?.quantity ? body?.quantity : 1,
        },
      ]
    }

    console.log("payload", payload)

    const response = await fetch(url, {
      ...options,
      body: JSON.stringify(payload),
      method: "POST",
    })

    if (response.ok) {
      const { data } = await response.json()

      return {
        body: JSON.stringify(data),
        statusCode: response.status,
      }
    }

    return {
      statusCode: response.status,
    }
  }

  try {
    if (event.httpMethod === "GET" && event.queryStringParameters?.cartId && event.queryStringParameters?.action === "getCart") {
      return await getCart(event)
    }

    if (event.httpMethod === "POST" && event.queryStringParameters?.action === "createCart") {
      return await createCart(event)
    }

    if (event.httpMethod === "POST" && event.queryStringParameters?.cartId && event.queryStringParameters?.action === "addCartLineItems") {
      return await addCartLineItems(event)
    }
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}
