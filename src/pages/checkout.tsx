import React from "react"
import IframeResizer from 'iframe-resizer-react'

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const CheckoutPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Checkout" />
      <main>
        <IframeResizer
          heightCalculationMethod="lowestElement"
          inPageLinks
          log
          scrolling={false}
          src="https://www.global-e.com/"
          style={{ border: "0px #ffffff none", minHeight: "1000px", minWidth: "100%", width: "1px"}}
        />
      </main>
    </Layout>
  )
}

export default CheckoutPage
