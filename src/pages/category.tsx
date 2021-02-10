import type {
  BigCommerceCategories,
  BigCommerceProducts,
  CategoryPageQuery,
} from "../../graphql-types"

import clsx from "clsx"
import { PageProps, graphql, Link } from "gatsby"
import React from "react"

import { Breadcrumb } from "../components/Breadcrumb"
import { CategoryHeader } from "../components/CategoryHeader"
import { Filters } from "../components/Filters"
import { Layout } from "../components/Layout"
import { Listing } from "../components/Listing"
import { SEO } from "../components/SEO"
import { Tabs } from "../components/Tabs"

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
    page,
  } = pageContext

  return (
    <Layout>
      <SEO title={page?.title} />

      <div className={clsx("container")} category-id={category?.bigcommerce_id}>
        <Breadcrumb crumbs={crumbs} />

        <CategoryHeader>
          <h1>{category?.name}</h1>
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
        {data.allBigCommerceCategories?.edges?.map(({ node: category }) => (
          <Link
            key={category?.id}
            id={category?.id}
            to={category?.custom_url?.url as string}
            title={category?.name as string}
          >
            {category?.name as string}
          </Link>
        ))}
      </Tabs>

      <Filters productCount={data.allBigCommerceProducts.edges.length} />

      <section className={clsx("container", "BigCommerce")}>
        <Listing
          products={data.allBigCommerceProducts.edges.map(({ node }) => ({
            node: standardiseBigCommerceProduct(
              (node as unknown) as BigCommerceProducts
            ),
          }))}
          promotionalBanners={
            data.allContentstackCategories?.edges?.[0]?.node
              ?.promotional_banners
          }
        />
      </section>

      {/* <section className={clsx("container", "Contentstack")}>
        {data.allContentstackProducts && (
          <Listing
            products={data.allContentstackProducts.edges.map(({ node }) => ({
              node: standardiseContentstackProduct(node),
            }))}
            promotionalBanners={
              data.allContentstackCategories?.edges?.[0]?.node
                ?.promotional_banners
            }
          />
        )}
      </section> */}
    </Layout>
  )
}

export default CategoryPage

export const query = graphql`
  query CategoryPage($id: Int) {
    allBigCommerceCategories {
      edges {
        node {
          bigcommerce_id
          custom_url {
            url
          }
          description
          id
          is_visible
          name
          page_title
        }
      }
    }
    allBigCommerceProducts {
      edges {
        node {
          ...BigCommerceProductsFragment
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
