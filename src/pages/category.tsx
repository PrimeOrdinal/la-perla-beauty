import type {
  BigCommerceCategories,
  BigCommerceProducts,
  CategoryPageQuery,
} from "../../graphql-types"

import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React from "react"

import { Breadcrumb } from "../components/Breadcrumb"
import { CategoryHeader } from "../components/CategoryHeader"
import { Layout } from "../components/Layout"
import { Listing } from "../components/Listing"
import { SEO } from "../components/SEO"
import { Tabs } from "../components/Tabs"
import { ViewSelector } from "../components/ViewSelector"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"
import { standardiseContentstackProduct } from "../utils/standardiseContentstackProduct"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceCategories
}

const CategoryPage: React.FC<
  PageProps<CategoryPageQuery, PageContextCategory>
> = ({ data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
    category,
    id,
    page,
  } = pageContext

  return (
    <Layout>
      <SEO title={page?.title} />

      <div className={clsx("container")}>
        <Breadcrumb crumbs={crumbs} />

        <CategoryHeader>
          <h1>{category?.name}</h1>
          <p>{category?.bigcommerce_id}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: category?.description as string,
            }}
          ></div>
        </CategoryHeader>
      </div>

      <Tabs
        marginBottom={{ _: 4, sm: 4, md: 6, lg: 8 }}
        marginTop={{ _: 4, sm: 4, md: 6, lg: 8 }}
      >
        <a href="/products">All</a>
        <a href="/fragrances">Fragrances</a>
        <a href="/makeup">Makeup</a>
        <a href="/body">Body</a>
      </Tabs>

      <div className={clsx("container")}>
        <ViewSelector />
      </div>

      <section className={clsx("container", "BigCommerce")}>
        <Listing
          products={data.allBigCommerceProducts.edges.map(({ node }) => ({
            node: standardiseBigCommerceProduct(
              (node as unknown) as BigCommerceProducts
            ),
          }))}
          promotionalBanners={data.allContentstackCategories?.edges?.[0]?.node?.promotional_banners}
        />
      </section>

      <section className={clsx("container", "Contentstack")}>
        {data.allContentstackProducts && (
          <Listing
            products={data.allContentstackProducts.edges.map(({ node }) => ({
              node: standardiseContentstackProduct(node),
            }))}
            promotionalBanners={data.allContentstackCategories?.edges?.[0]?.node?.promotional_banners}
          />
        )}
      </section>
    </Layout>
  )
}

export default CategoryPage

export const query = graphql`
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
    allContentstackCategories(filter: { bigcommerce_id: { eq: $id } }) {
      edges {
        node {
          promotional_banners {
            grid_position
            promotional_banner {
              colour
              image {
                description
                title
                url
              }
              layout
              link {
                href
                title
              }
              text
              title
            }
          }
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
