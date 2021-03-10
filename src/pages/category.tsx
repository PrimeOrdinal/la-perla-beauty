import type {
  BigCommerceGql_Category,
  CategoryPageQuery,
} from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

import { Breadcrumb } from "../components/Breadcrumb"
import { Link } from "../components/Button"
import { Layout } from "../components/Layout"
import { Listing } from "../components/Listing"
import { MenuListing } from "../components/MenuListing"
import { SEO } from "../components/SEO"
import { MenuSubCategory } from "../components/MenuSubCategory"

import { mediaQueries } from "../theme"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"
// import { standardiseContentstackProduct } from "../utils/standardiseContentstackProduct"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceGql_Category
}

const CategoryHeaderStyled = styled.header`
  display: grid;
  justify-items: center;
  margin-block-end: ${themeGet("space.7")}px;
  text-align: center;

  span {
    font-size: 12px;
  }

  ${mediaQueries.md} {
    text-align: center;
    span {
      font-size: revert;
    }
  }
`

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

  const promotionalBanners =
    data.allContentstackCategories?.edges?.[0]?.node?.promotional_banners

  const tabs = data.bigCommerceGQL?.site?.categoryTree?.find(
    (categoryTreeItem: BigCommerceGql_Category) =>
      categoryTreeItem?.entityId === category?.entityId
  )?.children

  return (
    <Layout>
      <SEO title={page?.title} />

      <Breadcrumb crumbs={crumbs} />

      <div className={clsx("container")} category-id={category?.entityId}>

        <CategoryHeaderStyled>
          <h1>{category?.name}</h1>
          {category?.description && <div
            dangerouslySetInnerHTML={{
              __html: category?.description as string,
            }}
          ></div>}
        </CategoryHeaderStyled>
      </div>

      {tabs?.length && (
        <MenuSubCategory marginTop={{ _: 4, sm: 4, md: 6, lg: 8 }}>
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
        </MenuSubCategory>
      )}

      <MenuListing
        productCount={products.length}
        setView={setView}
        view={view}
      />

      <main className={clsx("container")}>
        <Listing
          products={products}
          promotionalBanners={promotionalBanners}
          view={view}
        />
      </main>

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
