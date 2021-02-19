import type { Offer, Product } from "schema-dts"

import clsx from "clsx"
import getSymbolFromCurrency from "currency-symbol-map"
import { Formik, Field, Form, FormikHelpers } from "formik"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import {
  compose,
  layout,
  position,
  space,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { Button } from "./Button"

export type QuickBuyProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & { product: Product }

interface Values {
  identifier: string
}

export const QuickBuyStyled: React.FC<QuickBuyProps> = styled.div`
  ${compose(layout, position, space)}
`

export const QuickBuy: React.FC<QuickBuyProps> = ({
  product,
  ...props
}) => {
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
            <legend>Sizes</legend>
            <div className="form-fields">
              <div className="field">
                <Field
                  type="radio"
                  name="size"
                  id="size-option-1"
                  value="value-1"
                  className="fancy-product"
                />
                <label htmlFor="size-option-1" className="product-radio-label">
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
                <label htmlFor="size-option-2" className="product-radio-label">
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
                <label htmlFor="size-option-3" className="product-radio-label">
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
              | <span>{isInBag ? "Added to bag" : "Add to bag"}</span>
            </Button>
          </Form>
        </Formik>
    </QuickBuyStyled>
  )
}
