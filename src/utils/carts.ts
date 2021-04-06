import type { Bag } from "../../types/BigCommerce"

import { functions as functionsPath } from "../utils/paths"

export const getCartContents = async (setBagContents: (data: Bag) => void): Promise<void> => {
  // console.log("document.cookie", document.cookie)

  // const cookies = cookie.parse(document.cookie)
  // console.log("cookies", cookies)

  // const { cartId } = cookies

  const cartId = window.localStorage.getItem("cartId")
  console.log("cartId", cartId)

  if (!cartId) {
    return
  }

  const path = `${functionsPath}/carts?action=getCart&cartId=${cartId}`
  console.log("path", path)

  const url = new URL(path, `${process.env.GATSBY_SITE_URL}`)

  const response = await fetch(url.toString(), {
    // credentials: "same-origin",
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  })

  if (response.ok) {
    const data: Bag = await response.json()

    console.log("data", data)

    setBagContents(data)
  }
}

export const getCartId = async (): Promise<string | undefined> => {
    const path = `/.netlify/functions/carts`

    const url = new URL(path, `${process.env.GATSBY_SITE_URL}`)

    const response = await fetch(url.toString(), {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })

    if (response.ok) {
        const cart = await response.json()

        return cart.id
    }

    return undefined
}