import type { Offer, Product } from "schema-dts"

import clsx from "clsx"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { PageProps, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import styled from "styled-components"

import type { BigCommerceProducts } from "../../graphql-types"

import { Accordion, AccordionProps } from "../components/Accordion"
import { Button } from "../components/Button"
import { ImageGallery } from "../components/ImageGallery"
import { Layout } from "../components/Layout"
import { Price } from "../components/Price"
import { SEO } from "../components/SEO"
import { Tag } from "../components/Tag"

import { mediaQueries } from "../theme"

import {
  availabilitySchemaToHumanReadableText,
  availabilitySchemaToShortName,
} from "../utils/schema-org"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"

const ProductStyled = styled.article`
  align-items: start;
  display: grid;

  ${mediaQueries.md} {
    column-gap: 8.33vw;
    grid-template-columns: minmax(min-content, 3fr) 2fr;
  }

  .image-gallery {
  }

  header,
  main {
    display: grid;
  }

  .categories {
    display: grid;
    gap: 1rem;
    grid-auto-flow: column;
    justify-content: start;
  }

  .availability {
    justify-self: end;
  }

  .title {
    margin-block-end: 1rem;
  }

  .price {
    font-size: 2rem;
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

interface Values {
  emailAddress: string
}

type PageContextProduct = PageContextTypeBreadcrumb & {
  node: BigCommerceProducts
}

const ProductPage: React.FC<PageProps<null, PageContextProduct>> = ({
  data,
  pageContext,
}) => {
  const {
    node,
  }: {
    node: BigCommerceProducts
  } = pageContext
  const product = standardiseBigCommerceProduct(node) as Product

  const name = product?.name as string

  const offer = product?.offers as Offer

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
    showPlayButton: true,
  }

  return (
    <Layout>
      <SEO title={name} />
      <ProductStyled className={clsx("container")}>
        <ImageGallery
          className={clsx("image-gallery")}
          {...imageGalleryArguments}
        />
        <main>
          <header>
            {data?.allBigCommerceCategories?.edges && (
              <div className="categories">
                {data?.allBigCommerceCategories?.edges?.map(
                  ({ node: category }) => (
                    <Link
                      key={category?.id}
                      id={category?.id}
                      to={category?.custom_url?.url as string}
                      title={category?.name as string}
                    >
                      {category?.name as string}
                    </Link>
                  )
                )}
              </div>
            )}
            {offer?.availability && (
              <Tag
                className="availability"
                availability={availabilitySchemaToShortName(
                  offer?.availability
                )}
              >
                {availabilitySchemaToHumanReadableText(offer?.availability)}
              </Tag>
            )}
            <h1>{name}</h1>
            <Price className="price" offer={offer} />
          </header>
          <Formik
            className={clsx("container", "form-container")}
            initialValues={{
              emailAddress: "",
            }}
            onSubmit={async (
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              const path = `${window.location.origin}/.netlify/functions/add-to-bag`

              const url = new URL(path)

              const response = await fetch(url, {
                body: JSON.stringify(values),
                headers: {
                  Accept: "application/json",
                },
                method: "POST",
              })

              setSubmitting(false)

              console.log(response)
            }}
          >
            <Form className={clsx("quick-buy")}>
              <legend>Sizes</legend>
              <div className="form-fields">
                <div className="field">
                  <Field
                    type="radio"
                    name="size"
                    id="size-option-1"
                    value="value-1"
                  />
                  <label htmlFor="option-1">Value 1</label>
                </div>
                <div className="field">
                  <Field
                    type="radio"
                    name="size"
                    id="size-option-2"
                    value="value-2"
                  />
                  <label htmlFor="option-2">Value 2</label>
                </div>
                <div className="field">
                  <Field
                    type="radio"
                    name="size"
                    id="size-option-3"
                    value="value-3"
                  />
                  <label htmlFor="option-3">Value 3</label>
                </div>
              </div>
              <Button
                type="submit"
                variant="primary"
                py={{ md: 4 }}
                px={{ md: 9 }}
              >
                <span>Add to bag</span>
              </Button>
            </Form>
          </Formik>
          {/* TODO: Add form around wishlist */}
          <Button variant="secondary">Add to wishlist</Button>
          <div
            dangerouslySetInnerHTML={{
              __html: product?.description as string,
            }}
          />
          <Accordion
            items={[
              {
                heading: "About Us",
                panel: (
                  <React.Fragment>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem doloribus officia officiis qui eos iste dolorem
                      eaque, maiores quidem consequatur sequi harum sint
                      repudiandae molestias non temporibus nihil facilis
                      veritatis sit facere inventore asperiores itaque. Ut
                      dolores reprehenderit praesentium eos.
                    </p>
                  </React.Fragment>
                ),
              },
              {
                heading: "Delivery & Return",
                panel: (
                  <React.Fragment>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Hic aliquam laudantium pariatur tenetur perspiciatis eum!
                      Ullam, accusamus. Debitis animi, cumque porro, in eveniet
                      accusamus voluptas vel fugit, ex tenetur sit.
                    </p>
                    <button>Test</button>
                  </React.Fragment>
                ),
              },
            ]}
          />
          <dl>
            <dt>Identifier</dt>
            <dd>{product?.identifier}</dd>
            <dt>GTIN</dt>
            <dd>{product?.gtin}</dd>
            <dt>MPN</dt>
            <dd>{product?.mpn}</dd>
            <dt>SKU</dt>
            <dd>{product?.sku}</dd>
            <dt>UPC</dt>
            <dd>{product?.upc}</dd>
            <dt>URL</dt>
            <dd>{product?.url}</dd>
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
        </main>
      </ProductStyled>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(product)}</script>
      </Helmet>
    </Layout>
  )
}

export default ProductPage

export const query = graphql`
  query ProductPage($categoryIds: [Int]) {
    allBigCommerceCategories(filter: { bigcommerce_id: { in: $categoryIds } }) {
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
        }
      }
    }
  }
`
