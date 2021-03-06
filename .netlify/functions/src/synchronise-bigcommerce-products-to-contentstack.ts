import type { APIGatewayEvent, Handler } from "aws-lambda"

import fetch from "node-fetch"

export const handler: Handler = async (event: APIGatewayEvent) => {
  const {
    BIGCOMMERCE_ACCESS_TOKEN,
    BIGCOMMERCE_CLIENT_ID,
    BIGCOMMERCE_CLIENT_SECRET,
    BIGCOMMERCE_STORE_HASH,
    CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_MANAGEMENT_TOKEN,
    GATSBY_SITE_URL,
  } = process.env

  if (
    !BIGCOMMERCE_ACCESS_TOKEN ||
    !BIGCOMMERCE_CLIENT_ID ||
    !BIGCOMMERCE_CLIENT_SECRET ||
    !BIGCOMMERCE_STORE_HASH ||
    !CONTENTSTACK_API_KEY ||
    !CONTENTSTACK_DELIVERY_TOKEN ||
    !CONTENTSTACK_MANAGEMENT_TOKEN ||
    !GATSBY_SITE_URL
  ) {
    return {
      body: "Environment variable missing",
      statusCode: 400,
    }
  }

  console.log(event)

  const urlBigCommerce = new URL(
    `/stores/${BIGCOMMERCE_STORE_HASH}/v3/catalog/products`,
    `https://api.bigcommerce.com`
  )

  const responseBigCommerce = await fetch(urlBigCommerce, {
    headers: {
      "X-Auth-Token": BIGCOMMERCE_ACCESS_TOKEN,
      Accept: "application/json",
    },
    method: "GET",
  })

  if (responseBigCommerce.ok) {
    const json = await responseBigCommerce.json()

    const { data: products } = json

    products.forEach(async product => {
      const {
        availability,
        custom_url,
        description: rich_text_editor,
        id: product_id,
        name: title,
      } = product

      const { url } = custom_url

      //   console.log(name)

      const body = {
        entry: {
          availability,
          title,
          product_id,
          rich_text_editor,
          url,
        },
      }

      const urlContentstack = new URL(
        `/v3/content_types/product/entries?locale=en-gb`,
        `https://eu-api.contentstack.com`
      )

      const responseContentstack = await fetch(urlContentstack, {
        body: JSON.stringify(body),
        headers: {
          api_key: CONTENTSTACK_API_KEY,
          authtoken: CONTENTSTACK_DELIVERY_TOKEN,
          authorization: CONTENTSTACK_MANAGEMENT_TOKEN,
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      if (responseContentstack.ok) {
        const json = await responseContentstack.json()

        console.log(json)
      }
    })

    return {
      body: JSON.stringify(products),
      statusCode: 200,
    }
  }

  return {
    body: "An unknown problem occurred",
    statusCode: 500,
  }
}
