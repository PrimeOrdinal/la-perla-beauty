import React from "react"

import { BagDetails } from "../components/BagDetails"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const BagPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Bag" />
      <BagDetails />
    </Layout>
  )
}

export default BagPage
