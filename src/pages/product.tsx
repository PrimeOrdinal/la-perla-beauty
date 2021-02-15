import type { Product } from "schema-dts"

import { graphql, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import styled from "styled-components"

import { Button } from "../components/Button"
import { ImageGallery } from "../components/ImageGallery"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

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

const ProductPage: React.FC<PageProps<null, PageContextProduct>> = ({
  pageContext,
}) => {
  const {
    product,
  }: {
    product: Product
  } = pageContext

  const name = product?.name as string

  const imageGalleryArguments = {
    items: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ],
    showPlayButton: true
  }

  return (
    <Layout>
      <SEO title={`Product page for ${name}`} />
      <StyledProduct>
        <ImageGallery {...imageGalleryArguments} />
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
            <Button data-id={product?.["id"]} variant="primary">Add to bag</Button>
            <Button data-id={product?.["id"]} variant="secondary">Add to wishlist</Button>
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
  query ProductPage {
    allBigCommerceCategories {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`
