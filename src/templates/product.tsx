import type { ImageObject, ProductGroup } from "schema-dts"

import type {
  BigCommerceGql_Product,
  ProductPageQuery,
} from "../../graphql-types"

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
import { ProductImageGallery } from "../components/ProductImageGallery"
import { Leaf } from "../components/Leaf"
import { Layout } from "../components/Layout"
import { PageSections } from "../components/PageSections"
import { ProductSection } from "../components/ProductSection"
import { SEO } from "../components/SEO"
import { ProductSelectorColour } from "../components/ProductSelectorColour"
import { ProductSelectorSize } from "../components/ProductSelectorSize"
import { ShareOverlay } from "../components/ShareOverlay"
import { QuickWishlist } from "../components/QuickWishlist"

import { mediaQueries } from "../theme"

import { getCartId } from "../utils/carts"

import { standardiseBigCommerceProductGroup } from "../utils/standardiseBigCommerceProduct"

const EditorialStyled = styled.aside`
  margin-block-start: ${themeGet("space.12")}px;
`

const ProductStyled = styled.article`
  align-items: start;
  display: grid;

  ${mediaQueries.md} {
    column-gap: 8.33vw;
    grid-template-columns: minmax(min-content, 3fr) 2fr;
  }

  .image-gallery {
    margin-block-end: ${themeGet("space.12")}px;
  }

  main {
    display: grid;
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
    height: 0;
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
    margin-block-start: ${themeGet("space.6")}px;
  }

  .ingedients {
    dt {
      font-weight: bold;
      margin-block-end: ${themeGet("space.2")}px;
    }

    dd {
      margin-block-end: ${themeGet("space.4")}px;
    }
  }
`

interface Values {
  identifier: string
}

type PageContextProduct = PageContextTypeBreadcrumb & {
  node: BigCommerceGql_Product
}

const ProductPage: React.FC<
  PageProps<ProductPageQuery, PageContextProduct>
> = ({ data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const [readMoreOpen, setReadMoreOpen] = useState(false)

  const productFormatBigCommerce = data?.bigCommerceGQL?.site?.product

  const product = standardiseBigCommerceProductGroup({
    productFormatBigCommerce,
  }) as ProductGroup

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
  }

  const accordion = [
    {
      title: "Key Ingredients",
      panel: (
        <dl className="ingedients">
          {data?.contentstackProduct?.ingredients?.map(
            (ingredient, ingredientIndex) => (
              <React.Fragment key={ingredientIndex}>
                <dt>{ingredient?.type}</dt>
                {ingredient?.ingredient?.map(
                  (individualIngredient, individualIngredientIndex) => (
                    <dd key={individualIngredientIndex}>
                      <Link to={individualIngredient?.url}>
                        {individualIngredient?.title}
                      </Link>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: individualIngredient?.information as string,
                        }}
                      />
                    </dd>
                  )
                )}
              </React.Fragment>
            )
          )}
        </dl>
      ),
    },
  ]

  data?.contentstackProduct?.accordion?.panels &&
    accordion.push(
      ...data?.contentstackProduct?.accordion?.panels?.map(panel => ({
        title: panel?.title,
        panel: (
          <div
            dangerouslySetInnerHTML={{
              __html: panel?.panel as string,
            }}
          />
        ),
      }))
    )

  return (
    <Layout>
      <SEO title={product?.name as string} />

      <Breadcrumb crumbs={crumbs} />

      <ProductStyled
        className={clsx("container")}
        data-identifier={product?.identifier}
      >
        <div>
          {imageGalleryArguments.items?.length && (
            <ProductImageGallery
              className={clsx("image-gallery")}
              {...imageGalleryArguments}
            />
          )}
          <IconList
            display={{ _: "none", md: "grid" }}
            gridAutoFlow={{ _: "row", md: "column" }}
            items={data?.contentstackProduct?.key_features?.item?.map(item => ({
              icon: item?.icon,
              color: item?.colour,
              title: item?.title,
              body: <p>{item?.text}</p>,
            }))}
          ></IconList>
        </div>

        <main>
          <ProductSection product={product} />

          <div className="actions">
            <ShareOverlay />
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
              {Array.isArray(product?.hasVariant) &&
              product?.hasVariant?.some(
                variant => variant.variesBy === "Size"
              ) ? (
                <ProductSelectorSize
                  marginBottom={{ _: 2, md: 4 }}
                  product={product}
                />
              ) : (
                <ProductSelectorColour
                  marginBottom={{ _: 2, md: 4 }}
                  product={product}
                />
              )}
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
              __html: data?.contentstackProduct?.description as string,
            }}
          />
          <Button
            className="read-more"
            onClick={() => setReadMoreOpen(!readMoreOpen)}
          >
            {readMoreOpen ? "Read less" : "Read more"}
          </Button>
          {readMoreOpen && (
            <div
              className="description-extended"
              dangerouslySetInnerHTML={{
                __html: data?.contentstackProduct
                  ?.description_extended as string,
              }}
            />
          )}
          {readMoreOpen && (
            <section className="details">
              <h3>Details</h3>
              <dl>
                <dt className="separated">SKU</dt>
                <dd>{product?.sku}</dd>
                <dt>Manufactured in</dt>
                <dd>France</dd>
              </dl>
            </section>
          )}
          <Accordion className="accordion" items={accordion} />
          <DeliveryAndReturnsInformation className="delivery-and-returns-information" />
          {data?.contentstackProduct?.leaf && (
            <Leaf
              colour={data?.contentstackProduct?.leaf?.colour}
              layout={data?.contentstackProduct?.leaf?.layout}
              text={data?.contentstackProduct?.leaf?.text}
              title={data?.contentstackProduct?.leaf?.title}
            />
          )}
        </main>
      </ProductStyled>
      <EditorialStyled>
        <PageSections sections={data?.contentstackProduct?.sections} />
      </EditorialStyled>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(product)}</script>
      </Helmet>
    </Layout>
  )
}

export default ProductPage

export const query = graphql`
  query ProductPage($id: Int!) {
    contentstackProduct(product_id: { eq: $id }) {
      ...Contentstack_productFragment
    }
    bigCommerceGQL {
      site {
        featuredProducts {
          edges {
            node {
              ...BigCommerceGQL_ProductFragment
            }
          }
        }
        product(entityId: $id) {
          ...BigCommerceGQL_ProductFragment
        }
      }
    }
  }
`
