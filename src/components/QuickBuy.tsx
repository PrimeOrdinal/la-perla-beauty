import type { Offer, Product } from "schema-dts"

import clsx from "clsx"
import getSymbolFromCurrency from "currency-symbol-map"
import { Formik, Form, FormikHelpers } from "formik"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { Button } from "./Button"
import { ProductSelectorColour } from "../components/ProductSelectorColour"
import { ProductSelectorSize } from "./ProductSelectorSize"

export type QuickBuyProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & { product: Product; showPrice: boolean; showVariants: boolean; }

interface Values {
  identifier: string
}

export const QuickBuyStyled: React.FC<QuickBuyProps> = styled.div`
  ${compose(color, flexbox, grid, layout, position, space)}
`

export const QuickBuy: React.FC<QuickBuyProps> = ({ product, ...props }) => {
  const [isInBag, setIsInBag] = useState(false)

  const offer = product?.offers as Offer

  const path = `/.netlify/functions/carts`

  const url = new URL(path, `${process.env.GATSBY_SITE_URL}`)

  useEffect(() => {
    ;(async function getCarts() {
      const response = await fetch(url.toString(), {
        headers: {
          Accept: "application/json",
        },
        method: "GET",
      })

      console.log(response)

      if (response.ok) {
        const carts = await response.json()

        const present = carts.items.find(
          item => (item.id = product?.identifier)
        )

        setIsInBag(present)
      }
    })()
  }, [])

  return (
    <QuickBuyStyled {...props}>
      <Formik
        className={clsx("container", "form-container")}
        initialValues={{
          identifier: product?.identifier,
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const path = `/.netlify/functions/carts`

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
        <Form className={clsx("quick-buy")}>
          {props.showVariants &&
            (Array.isArray(product?.hasVariant) &&
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
            ))}
          <Button type="submit" variant="primary" py={{ md: 4 }} px={{ md: 9 }}>
            {props.showPrice && (
              <React.Fragment>
                <span
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span
                    className="product-price"
                    content={offer?.priceCurrency as string}
                    itemProp="priceCurrency"
                  >
                    {getSymbolFromCurrency(offer?.priceCurrency as string)}
                  </span>
                  <span
                    className="product-price"
                    content={offer?.price as number}
                    itemProp="price"
                  >
                    {offer?.price}
                  </span>
                  {offer?.availability && (
                    <link
                      href={offer?.availability as string}
                      itemProp="availability"
                    />
                  )}
                </span>{" "}
                |
              </React.Fragment>
            )}
            <span>{isInBag ? "Added to bag" : "Add to bag"}</span>
          </Button>
        </Form>
      </Formik>
    </QuickBuyStyled>
  )
}
