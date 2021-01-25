import type {
  BigCommerceCategories,
  BigCommerceProducts,
  CategoryPageQuery,
} from "../../graphql-types"

import { graphql, PageProps } from "gatsby"
import React from "react"

import { Layout } from "../components/Layout"
import { Listing } from "../components/Listing"
import { SEO } from "../components/SEO"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"
import { standardiseContentstackProduct } from "../utils/standardiseContentstackProduct"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceCategories
}

const CategoryPage: React.FC<
  PageProps<CategoryPageQuery, PageContextCategory>
> = ({ pageContext, data }) => {
  const { category } = pageContext

  return (
    <Layout>
      <SEO title={`Category page for ${category?.name}`} />
      <script type="application/json">{JSON.stringify(category)}</script>
      {category?.name && <h1>{category?.name}</h1>}
      {category?.description && <span>{category?.description}</span>}
      {data.allBigCommerceProducts && (
        <Listing
          edges={data.allBigCommerceProducts.edges.map(({ node }) => ({
            node: standardiseBigCommerceProduct(
              (node as unknown) as BigCommerceProducts
            ),
          }))}
        />
      )}
      {data.allContentstackProducts && (
        <Listing
          edges={data.allContentstackProducts.edges.map(({ node }) => ({
            node: standardiseContentstackProduct(node),
          }))}
        />
      )}
    </Layout>
  )
}

export default CategoryPage

graphql`
  query CategoryPage($id: Int) {
    allBigCommerceProducts(filter: { categories: { eq: $id } }) {
      edges {
        node {
          availability
          calculated_price
          categories
          custom_url {
            url
          }
          depth
          description
          fixed_cost_shipping_price
          gtin
          height
          id
          inventory_level
          inventory_warning_level
          is_featured
          is_free_shipping
          is_preorder_only
          is_price_hidden
          is_visible
          mpn
          name
          order_quantity_maximum
          order_quantity_minimum
          preorder_message
          price
          price_hidden_label
          sale_price
          sku
          upc
          weight
          width
        }
      }
    }
    allContentstackProducts {
      edges {
        node {
          id
          product_id
          rich_text_editor
          title
          url
          locale
        }
      }
    }
  }
`
