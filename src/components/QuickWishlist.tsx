import type { Product } from "schema-dts"

import clsx from "clsx"
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

import { functions as functionsPath } from "../utils/paths"

import { ReactComponent as WishlistAbsentIcon } from "../../static/icons/WishlistAbsent.svg"
import { ReactComponent as WishlistPresentIcon } from "../../static/icons/WishlistPresent.svg"

import { Button } from "./Button"

export type QuickWishlistProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & { product: Product }

interface Values {
  identifier: string
}

export const QuickWishlistStyled: React.FC<QuickWishlistProps> = styled.div`
  ${compose(color, flexbox, grid, layout, position, space)}
`

export const QuickWishlist: React.FC<QuickWishlistProps> = ({
  product,
  ...props
}) => {
  const [isInWishlist, setIsInWishlist] = useState(false)

  const path = `${functionsPath}/wishlists`

  const url = new URL(path, `${process.env.GATSBY_SITE_URL}`)

  useEffect(() => {
    ;(async function getWishlists() {
      const response = await fetch(url.toString(), {
        headers: {
          Accept: "application/json",
        },
        method: "GET",
      })

      console.log(response)

      if (response.ok) {
        const wishlists = await response.json()

        const present = wishlists.items.find(
          item => (item.id = product?.identifier)
        )

        setIsInWishlist(present)
      }
    })()
  }, [])

  return (
    <QuickWishlistStyled {...props}>
      <Formik
        initialValues={{
          identifier: product?.identifier,
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const response = await fetch(url.toString(), {
            body: JSON.stringify(values),
            headers: {
              Accept: "application/json",
            },
            method: "POST",
          })

          console.log(response)

          if (response.ok) {
            const wishlists = await response.json()

            const present = wishlists.items.find(
              item => (item.id = product?.identifier)
            )

            setIsInWishlist(present)
          }

          setSubmitting(false)
        }}
      >
        <Form>
          <Button type="submit" variant={props.type === "text" && "primary"}>
            <span className={clsx(props.type !== "text" && "sr-only")}>Add to Wishlist</span>
            {props.type !== "text" && (isInWishlist ? <WishlistPresentIcon /> : <WishlistAbsentIcon />)}
          </Button>
        </Form>
      </Formik>
    </QuickWishlistStyled>
  )
}
