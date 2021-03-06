import type { ImageObject, Offer, Product } from "schema-dts"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { PageProps, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import styled from "styled-components"

import type { BigCommerceProducts } from "../../graphql-types"

import { Accordion } from "../components/Accordion"
import { Breadcrumb } from "../components/Breadcrumb"
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
import { getCartId } from "../utils/carts"

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
    font-size: ${themeGet("fontSizes.small")}px;
    gap: 1rem;
    grid-auto-flow: column;
    justify-content: start;
  }

  .availability {
    justify-self: end;
  }

  .title {
    font-size: ${themeGet("fontSizes.7")}px;
    margin-block-end: ${themeGet("space.8")}px;
    margin-block-start: unset;
  }

  .price {
    font-size: ${themeGet("fontSizes.5")}px;
    margin-block-end: ${themeGet("space.8")}px;
  }

  .form {
    margin-block-end: ${themeGet("space.9")}px;
  }

  .variants {
    margin-block-end: ${themeGet("space.4")}px;
  }

  .description {
    margin-block-end: ${themeGet("space.9")}px;
  }
`

interface Values {
  identifier: string
}

type PageContextProduct = PageContextTypeBreadcrumb & {
  node: BigCommerceProducts
}

const ProductPage: React.FC<PageProps<null, PageContextProduct>> = ({
  data,
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
    node,
  } = pageContext

  const product = standardiseBigCommerceProduct({
    node,
    categories: data.bigCommerceGQL.site.categoryTree,
  }) as Product

  const name = product?.name as string

  const offer = product?.offers as Offer

  const imageGalleryArguments = {
    items: Array.isArray(product?.image)
      ? product?.image?.map((image: ImageObject) => ({
          original: image?.contentUrl,
          thumbnail: image?.contentUrl,
        }))
      : [
          {
            original: (product?.image as ImageObject)?.contentUrl,
            thumbnail: (product?.image as ImageObject)?.contentUrl,
          },
        ],
    showPlayButton: true,
  }

  return (
    <Layout>
      <SEO title={name} />

      <Breadcrumb crumbs={crumbs} />

      <ProductStyled className={clsx("container")}>
        {imageGalleryArguments.items?.length && (
          <ImageGallery
            className={clsx("image-gallery")}
            {...imageGalleryArguments}
          />
        )}

        <main>
          <header>
            {Array.isArray(product?.category) && (
              <div className="categories">
                {product?.category.map(category => (
                  <Link
                    className="product-category"
                    id={category?.identifier}
                    key={category?.identifier}
                    itemProp="category"
                    title={category?.name}
                    to={category?.url}
                  >
                    <span itemProp="name">{category?.name}</span>
                  </Link>
                ))}
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

            <h1 className="title">{name}</h1>

            <Price className="price" offer={offer} />
          </header>

          <Formik
            initialValues={{
              identifier: product?.identifier,
            }}
            onSubmit={async (
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              const cartId = await getCartId()

              const path = `/.netlify/functions/carts/${cartId}/items`

              const url = new URL(path, `${process.env.GATSBY_SITE_URL}`)

              const response = await fetch(url.toString(), {
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
            <Form className={clsx("form")}>
              <legend>Sizes</legend>
              <div className={clsx("form-fields", "sizes", "variants")}>
                <div className="field">
                  <Field
                    type="radio"
                    name="size"
                    id="size-option-1"
                    value="value-1"
                    className="fancy-product"
                  />
                  <label
                    htmlFor="size-option-1"
                    className="product-radio-label"
                  >
                    30 ml
                  </label>
                </div>
                <div className="field">
                  <Field
                    type="radio"
                    name="size"
                    id="size-option-2"
                    value="value-2"
                    className="fancy-product"
                  />
                  <label
                    htmlFor="size-option-2"
                    className="product-radio-label"
                  >
                    90 ml
                  </label>
                </div>
                <div className="field">
                  <Field
                    type="radio"
                    name="size"
                    id="size-option-3"
                    value="value-3"
                    className="fancy-product"
                  />
                  <label
                    htmlFor="size-option-3"
                    className="product-radio-label"
                  >
                    120 ml
                  </label>
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
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: product?.description as string,
            }}
          />
          <Accordion
            items={[
              {
                heading: "Perfumer Notes",
                panel: (
                  <React.Fragment>
                    <dl>
                      <dt>Identifier</dt>
                      <dd>{product?.identifier}</dd>
                      <dt>GTIN</dt>
                      <dd>{product?.gtin}</dd>
                      <dt>MPN</dt>
                      <dd>{product?.mpn}</dd>
                      <dt>SKU</dt>
                      <dd>{product?.sku}</dd>
                      <dt>URL</dt>
                      <dd>{product?.url}</dd>
                      {/*
                      <dt>Price</dt>
                      <dd>{product?.price}</dd>
                      <dt>Calculated Price</dt>
                      <dd>{product?.calculated_price}</dd>
                      <dt>Availability</dt>
                      <dd>{product?.availability}</dd>
                      <dt>Sale Price</dt>
                      <dd>{product?.sale_price}</dd>
                      <dt>UPC</dt>
                      <dd>{product?.upc}</dd>
                      */}
                    </dl>
                  </React.Fragment>
                ),
              },
              {
                heading: "Appliction",
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
              {
                heading: "Key Ingredient",
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
              {
                heading: "Reviews",
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
    bigCommerceGQL {
      site {
        categoryTree {
          entityId
          name
          path
        }
      }
    }
  }
`
