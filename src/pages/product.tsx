import type { Product } from "schema-dts"

import { graphql, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const StyledProduct = styled.article`
  align-items: start;
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(min-content, 3fr) 2fr;
  padding: 1rem;

  #images {
    max-width: 40rem;

    > img {
      width: 100%;
    }
  }

  ul {
    align-items: start;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    margin: 0;
  }

  li {
    margin-block-end: 0;
  }
`

type PageContextProduct = PageContextTypeBreadcrumb & {
  product: Product
}

export const ProductPage: React.FC<PageProps<null, PageContextProduct>> = ({
  pageContext,
}) => {
  const {
    product,
  }: {
    product: Product
  } = pageContext

  const name = product?.name as string

  return (
    <Layout>
      <SEO title={`Product page for ${name}`} />
      <StyledProduct>
        <section id="images">
          <img alt={name} src="https://via.placeholder.com/250" />
          <ul>
            <li>
              <img alt={name} src="https://via.placeholder.com/250" />
            </li>
            <li>
              <img alt={name} src="https://via.placeholder.com/250" />
            </li>
            <li>
              <img alt={name} src="https://via.placeholder.com/250" />
            </li>
            <li>
              <img alt={name} src="https://via.placeholder.com/250" />
            </li>
            <li>
              <img alt={name} src="https://via.placeholder.com/250" />
            </li>
          </ul>
        </section>
        <section id="sidebar">
          <header>
            <h1>{name}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: product?.description as string,
              }}
            />
          </header>
          <dl>
            <dt>ID</dt>
            <dd>{product?.["id"]}</dd>
            <dt>SKU</dt>
            <dd>{product?.sku}</dd>
            <dt>GTIN</dt>
            <dd>{product?.gtin}</dd>
            <dt>MPN</dt>
            <dd>{product?.mpn}</dd>
            {/* <dt>Price</dt>
            <dd>{product?.price}</dd>
            <dt>Calculated Price</dt>
            <dd>{product?.calculated_price}</dd>
            <dt>Availability</dt>
            <dd>{product?.availability}</dd>
            <dt>Sale Price</dt>
            <dd>{product?.sale_price}</dd>
            <dt>UPC</dt>
            <dd>{product?.upc}</dd> */}
          </dl>
          <form>
            <button data-id={product?.["id"]}>Add to bag</button>
            <button data-id={product?.["id"]}>Add to wishlist</button>
          </form>
        </section>
        {/* {product?.categories &&
          product?.categories.map(category => {
            console.log(category)
          })} */}
      </StyledProduct>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(product)}</script>
      </Helmet>
    </Layout>
  )
}

export default ProductPage

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
          id
          price
          sku
          name
        }
      }
    }
    allContentstackProducts {
      edges {
        node {
          id: product_id
          rich_text_editor
          name: title
          url
        }
      }
    }
  }
`
