import React, { useEffect, useState } from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

import {
  CountProvider,
  useCountState,
  useCountDispatch,
} from "../store/count-context"

function CountDisplay() {
  const {count} = useCountState()

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const dispatch = useCountDispatch()

  return (
    <button onClick={() => dispatch({type: 'increment'})}>
      Increment count
    </button>
  )
}

const BagPage: React.FC = () => {
  const [starsCount, setStarsCount] = useState(0)
  const [cartData, setCartData] = useState(0)

  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData.stargazers_count)
      }) // set data for the number of stars

    async function getCart(): Promise<void> {
      const cartsURL = `${window.location.origin}/.netlify/functions/carts`

      const url = new URL(cartsURL)

      const response = await fetch(url.toString())

      const cartData = await response.json()

      setCartData(cartData)
    }

    getCart()
  }, [])

  return (
    <Layout>
      <SEO title="Bag" />
      <h1>Bag</h1>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
      <p>Runtime Data: Star count for the Gatsby repo {starsCount}</p>
      {/* <pre>{JSON.stringify(cartData, null, 2)}</pre> */}
    </Layout>
  )
}

export default BagPage
