import { PageProps } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const Product: React.FC<PageProps<DataProps>> = ({ pageContext }) => {
  const { product } = pageContext
  console.log(product)
  return (
    <Layout>
      <SEO title="Using TypeScript" />
      <div>
        Name: {product.name}
        Price: {product.price}
        Description: {product.description}
      </div>
      <form>
          <button data-id={product.id}>Add to bag</button>
          <button data-id={product.id}>Add to wishlist</button>
      </form>
    </Layout>
  )
}

export default Product
