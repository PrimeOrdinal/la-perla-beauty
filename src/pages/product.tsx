import { graphql, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { createProductStructuredProductJSON } from "../utils/createStructuredJSON"

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

export const Product: React.FC<PageProps<null, PageContextProduct>> = ({
  pageContext,
}) => {
  const {
    product,
  }: {
    product: ProductCustom
  } = pageContext

  const structuredJSON = createProductStructuredProductJSON(product)

  return (
    <Layout>
      <SEO title={`Product page for ${product?.title}`} />
      <StyledProduct>
        <section id="images">
          <img alt={product?.title} src="https://via.placeholder.com/250" />
          <ul>
            <li>
              <img alt={product?.title} src="https://via.placeholder.com/250" />
            </li>
            <li>
              <img alt={product?.title} src="https://via.placeholder.com/250" />
            </li>
            <li>
              <img alt={product?.title} src="https://via.placeholder.com/250" />
            </li>
            <li>
              <img alt={product?.title} src="https://via.placeholder.com/250" />
            </li>
            <li>
              <img alt={product?.title} src="https://via.placeholder.com/250" />
            </li>
          </ul>
        </section>
        <section id="sidebar">
          <header>
            <h1>{product?.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: product?.description,
              }}
            />
          </header>
          <dl>
            <dt>ID</dt>
            <dd>{product?.id}</dd>
            <dt>Price</dt>
            <dd>{product?.price}</dd>
            <dt>Calculated Price</dt>
            <dd>{product?.calculated_price}</dd>
            <dt>Availability</dt>
            <dd>{product?.availability}</dd>
            <dt>GTIN</dt>
            <dd>{product?.gtin}</dd>
            <dt>MPN</dt>
            <dd>{product?.mpn}</dd>
            <dt>Sale Price</dt>
            <dd>{product?.sale_price}</dd>
            <dt>SKU</dt>
            <dd>{product?.sku}</dd>
            <dt>UPC</dt>
            <dd>{product?.upc}</dd>
          </dl>
          <form>
            <button data-id={product?.id}>Add to bag</button>
            <button data-id={product?.id}>Add to wishlist</button>
          </form>
        </section>
        {/* {product?.categories &&
          product?.categories.map(category => {
            console.log(category)
          })} */}
      </StyledProduct>
      <Helmet>
        <script type="application/ld+json">{structuredJSON}</script>
      </Helmet>
    </Layout>
  )
}

export default Product

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
          title: name
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
        }
      }
    }
  }
`
