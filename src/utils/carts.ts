export const getCartId = async (): Promise<string | undefined> => {
    const path = `${window.location.origin}/.netlify/functions/carts`

    const url = new URL(path)

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