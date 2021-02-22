import type { ImageObject, Offer, ProductGroup } from "schema-dts"

import type { BigCommerceGql_Product } from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import { Formik, Form, FormikHelpers } from "formik"
import { PageProps, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import React, { useState } from "react"
import styled from "styled-components"

import { Accordion } from "../components/Accordion"
import { Breadcrumb } from "../components/Breadcrumb"
import { Button, Link } from "../components/Button"
import { DeliveryAndReturnsInformation } from "../components/DeliveryAndReturnsInformation"
import { IconList } from "../components/IconList"
import { ImageGallery } from "../components/ImageGallery"
import { Leaf } from "../components/Leaf"
import { Layout } from "../components/Layout"
import { Price } from "../components/Price"
import { SEO } from "../components/SEO"
import { ProductSelectorColour } from "../components/ProductSelectorColour"
import { ProductSelectorSize } from "../components/ProductSelectorSize"
import { QuickShare } from "../components/QuickShare"
import { QuickWishlist } from "../components/QuickWishlist"
import { Tag } from "../components/Tag"

import { mediaQueries } from "../theme"

import {
  availabilitySchemaToHumanReadableText,
  availabilitySchemaToShortName,
} from "../utils/schema-org"
import { getCartId } from "../utils/carts"

import { standardiseBigCommerceProductGroup } from "../utils/standardiseBigCommerceProduct"

const ProductStyled = styled.article`
  align-items: start;
  display: grid;

  ${mediaQueries.md} {
    column-gap: 8.33vw;
    grid-template-columns: minmax(min-content, 3fr) 2fr;
  }

  .image-gallery {
    margin-block-end: ${themeGet("space.8")}px;
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
    margin-block-end: ${themeGet("space.4")}px;
  }

  .description_extended {
    margin-block-end: ${themeGet("space.9")}px;
  }

  .read-more {
    font-weight: bold;
    justify-content: start;
    margin-block-end: ${themeGet("space.4")}px;
    padding: unset;
  }

  .actions {
    display: grid;
    gap: ${themeGet("space.4")}px;
    grid-auto-flow: column;
    justify-content: end;
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
      margin-block-end: ${themeGet("space.4")}px;
    }
  }

  .delivery-and-returns-information {
    margin-block-end: ${themeGet("space.9")}px;
  }

  .accordion {
    margin-block-end: ${themeGet("space.6")}px;
  }

  .ingedients {
    dt {
      font-weight: bold;
      margin-block-end: ${themeGet("space.2")}px;
    }

    dd {
      margin-block-end: ${themeGet("space.4")}px;
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
  } = pageContext

  const [toggleReadMore, setToggleReadMore] = useState(false)

  const productFormatBigCommerce = data?.bigCommerceGQL?.site?.product

  const product = standardiseBigCommerceProductGroup({
    productFormatBigCommerce,
  }) as ProductGroup

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
        <div>
          {imageGalleryArguments.items?.length && (
            <ImageGallery
              className={clsx("image-gallery")}
              {...imageGalleryArguments}
            />
          )}
          <IconList display={{ _: "none", md: "grid" }} items={[{icon: "diamond", color: "red", heading: "Test 1", body: (<p>Lorem ipsum</p>)}, {icon: "diamond", color: "green", heading: "Test 2", body: (<p>Lorem ipsum</p>)}, {icon: "diamond", color: "blue", heading: "Test 3", body: (<p>Lorem ipsum</p>)}, {icon: "diamond", color: "red", heading: "Test 4", body: (<p>Lorem ipsum</p>)}]} orientation="horizontal"></IconList>
        </div>

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

          <div className="actions">
            <QuickShare />
            <QuickWishlist />
          </div>

          <Formik
            initialValues={{
              identifier: product?.identifier as string,
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

              console.log(response)

              if (response.ok) {
                console.log(response.ok)
              }

              setSubmitting(false)
            }}
          >
            <Form className={clsx("form")}>
              {Array.isArray(product?.hasVariant) && product?.hasVariant?.some((variant) => variant.variesBy === "Size") ? <ProductSelectorSize marginBottom={{ _: 2, md: 4 }} product={product} /> : <ProductSelectorColour marginBottom={{ _: 2, md: 4 }} product={product} />}
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
          <Button className="read-more" onClick={() => setToggleReadMore(!toggleReadMore)}>{toggleReadMore ? "Read less" : "Read more"}</Button>
          {toggleReadMore && (<div
            className="description-extended"
            dangerouslySetInnerHTML={{
              __html: data?.contentstackProducts?.description_extended as string,
            }}
          />)}
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
            className="accordion"
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
          <DeliveryAndReturnsInformation className="delivery-and-returns-information" />
          <Leaf variant="secondary">
            <h2>Risk-free purchase</h2>
            <p>Phasellus hendrerit nisl justo, non visto sollicitudin justo in. Quisque eu tincidunt arcu. Aenean ullamcorper augue vel ex iaculis.</p>
          </Leaf>
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
