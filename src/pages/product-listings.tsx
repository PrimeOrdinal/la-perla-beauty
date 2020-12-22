import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type BigCommerceCategoryEdgeProps = {
  node: {
    name: string
    id: string
  }
}

type BigCommerceProductEdgeProps = {
  node: {
    name: string
    price: number
    id: string
    sku: string
  }
}

type ContentstackProductEdgeProps = {
  node: {
    title: string
    description: number
    id: string
    url: string
    banner: {
      filename: string
      localAsset: {
        base: string
        absolutePath: string
        publicURL: string
        url: string
        childImageSharp: {}
      }
    }
    created_at: string
  }
}

type DataProps = {
  allBigCommerceCategories: {
    edges: BigCommerceCategoryEdgeProps[]
  }
  allBigCommerceProducts: {
    edges: BigCommerceProductEdgeProps[]
  }
  allContentstackProducts: {
    edges: ContentstackProductEdgeProps[]
  }
}

export const ProductListings: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <h1>BigCommerce Product Listings for {path}</h1>
    <p>
      {data.allBigCommerceCategories.edges.map(({node}, index) => (
        <article key={index}>
          <h1>{node.name}</h1>
        </article>
      ))}
    </p>
    <p>
      {data.allBigCommerceProducts.edges.map(({node}, index) => (
        <article key={index}>
          <h1>{node.name}</h1>
        </article>
      ))}
    </p>
    <p>
      {data.allContentstackProducts.edges.map(({node}, index) => (
        <article key={index}>
          <h1>{node.title}</h1>
        </article>
      ))}
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProductListings

export const query = graphql`
  {
    allBigCommerceCategories {
      edges {
        node {
          name
          id
        }
      }
    }
    allBigCommerceProducts {
      edges {
        node {
          name
          price
          id
          sku
        }
      }
    }
    allContentstackProducts {
      edges {
        node {
          id
          title
          url
          rich_text_editor
          product_id
          created_at
        }
      }
    }
  }
`
