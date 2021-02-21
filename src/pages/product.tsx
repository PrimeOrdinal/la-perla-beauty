import type { ImageObject, Offer, Product } from "schema-dts"

import type { BigCommerceGql_Product } from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import { Formik, Form, FormikHelpers } from "formik"
import { PageProps, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import styled from "styled-components"

import { Accordion } from "../components/Accordion"
import { Breadcrumb } from "../components/Breadcrumb"
import { Button, Link } from "../components/Button"
import { ImageGallery } from "../components/ImageGallery"
import { Layout } from "../components/Layout"
import { Price } from "../components/Price"
import { SEO } from "../components/SEO"
import { SizeSelector } from "../components/SizeSelector"
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

  .name {
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

  .description {
    margin-block-end: ${themeGet("space.9")}px;
  }

  .details {
    dl {
      display: flow-root;
      list-style: none;
    }

    dt {
      float: left;
      margin-inline-end: 0.5ch;

      &:before {
        content: "•";
        display: inline-block;
        margin-inline-end: 1ch;
      }

      &.separated {
        &:after {
          content: ":";
          display: inline-block;
        }
      }
    }

    dd,
    dt {
      margin-block-end: 1rem;
    }
  }

  .ingedients {
    dt {
      font-weight: bold;
      margin-block-end: 0.5rem;
    }

    dd {
      margin-block-end: 1rem;
    }

    dd,
    dt {
      
    }
  }
`

interface Values {
  identifier: string
}

type PageContextProduct = PageContextTypeBreadcrumb & {
  node: BigCommerceGql_Product
}

const ProductPage: React.FC<PageProps<null, PageContextProduct>> = ({
  data,
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
    // node: productFormatBigCommerce,
  } = pageContext

  const productFormatBigCommerce = data?.bigCommerceGQL?.site?.product

  const product = standardiseBigCommerceProduct({
    productFormatBigCommerce,
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
    showPlayButton: false,
  }

  return (
    <Layout>
      <SEO title={name} />

      <Breadcrumb crumbs={crumbs} />

      <ProductStyled className={clsx("container")} data-identifier={product?.identifier}>
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
                )).pop()}
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

            <h1 className={clsx("name", "title")}>{name}</h1>

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
              <SizeSelector marginBottom={{ _: 2, md: 4 }} />
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
              __html: data?.contentstackProducts?.description as string,
            }}
          />
          <section className="details">
            <h3>Details</h3>
            <dl>
              <dt className="separated">SKU</dt>
              <dd>{product?.sku}</dd>
              <dt>Manufactured in</dt>
              <dd>France</dd>
            </dl>
          </section>
          <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            items={[
              {
                heading: "Perfumer Notes",
                panel: (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.contentstackProducts
                        ?.perfumer_notes as string,
                    }}
                  />
                ),
              },
              {
                heading: "Appliction",
                panel: (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.contentstackProducts?.application as string,
                    }}
                  />
                ),
              },
              {
                heading: "Key Ingredients",
                panel: (
                  <dl className="ingedients">
                    {data?.contentstackProducts?.key_ingredients?.map(
                      key_ingredient => (
                        <React.Fragment>
                          <dt>{key_ingredient?.type}</dt>
                          {key_ingredient?.ingredient?.map((ingredient) => (
                            <dd>
                              <Link to={ingredient?.url}>{ingredient?.title}</Link>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: ingredient?.information as string,
                                }}
                              />
                            </dd>
                          ))}
                        </React.Fragment>
                      )
                    )}
                  </dl>
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
  query ProductPage($id: Int) {
    contentstackProducts(product_id: { eq: $id }) {
      ...Contentstack_productsFragment
    }
    bigCommerceGQL {
      site {
        product(entityId: $id) {
          ...BigCommerceGQL_ProductFragment
        }
      }
    }
  }
`
