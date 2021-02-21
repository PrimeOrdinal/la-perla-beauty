import type { SetStateAction } from "react"

import type {
  // BigCommerceCategories,
  BigCommerceProducts,
  // CategoryPageQuery,
  BigCommerceGql_Product,
  BigCommerceGql_Category,
} from "../../graphql-types"

import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React, { useState } from "react"

import { Breadcrumb } from "../components/Breadcrumb"
import { Link } from "../components/Button"
import { CategoryHeader } from "../components/CategoryHeader"
import { Layout } from "../components/Layout"
import { Listing } from "../components/Listing"
import { MenuListing } from "../components/MenuListing"
import { SEO } from "../components/SEO"
import { Tabs } from "../components/Tabs"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"
// import { standardiseContentstackProduct } from "../utils/standardiseContentstackProduct"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceGql_Category
}

const CategoryPage: React.FC<
  PageProps<CategoryPageQuery, PageContextCategory>
> = ({ data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
    category,
    page,
  } = pageContext

  const [view, setView] = useState("grid")

  const products = data?.bigCommerceGQL?.site?.products?.edges.map(
    ({ node: productFormatBigCommerce }) =>
      standardiseBigCommerceProduct({
        productFormatBigCommerce,
      })
  )
  console.log(products)

  const promotionalBanners =
    data.allContentstackCategories?.edges?.[0]?.node?.promotional_banners

  const tabs = data.bigCommerceGQL?.site?.categoryTree?.find(
    (categoryTreeItem: BigCommerceGql_Category) =>
      categoryTreeItem.entityId === category.entityId
  )?.children

  return (
    <Layout>
      <SEO title={page?.title} />

      <div className={clsx("container")} category-id={category?.entityId}>
        <Breadcrumb crumbs={crumbs} />

        <CategoryHeader>
          <h1>{category?.name}</h1>
          {category?.description && <div
            dangerouslySetInnerHTML={{
              __html: category?.description as string,
            }}
          ></div>}
        </CategoryHeader>
      </div>

      {tabs?.length && (
        <Tabs marginTop={{ _: 4, sm: 4, md: 6, lg: 8 }}>
          {tabs.map(category => (
            <Link
              id={category?.entityId}
              key={category?.entityId}
              title={category?.name}
              to={category?.path}
            >
              {category?.name}
            </Link>
          ))}
        </Tabs>
      )}

      <MenuListing
        productCount={products.length}
        setView={setView}
        view={view}
      />

      <section className={clsx("container")}>
        <Listing
          products={products}
          promotionalBanners={promotionalBanners}
          view={view}
        />
      </section>

    </Layout>
  )
}

export default CategoryPage

export const query = graphql`
  query CategoryPage($id: Int) {
    allContentstackCategories(filter: { bigcommerce_id: { eq: $id } }) {
      edges {
        node {
          ...Contentstack_categoriesFragment
        }
      }
    }
    allContentstackProducts {
      edges {
        node {
          ...Contentstack_productsFragment
        }
      }
    }
    bigCommerceGQL {
      site {
        categoryTree {
          children {
            entityId
            name
            path
            productCount
            description
          }
          description
          entityId
          name
          path
          productCount
        }
        products(first: 50) {
          edges {
            node {
              ...BigCommerceGQL_ProductFragment
            }
          }
        }
      }
    }
  }
`
