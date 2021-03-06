import type { Product } from "schema-dts"

import { Formik, Form, FormikHelpers } from "formik"
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

import { ReactComponent as WishlistAbsentIcon } from "../images/WishlistAbsent.svg"
import { ReactComponent as WishlistPresentIcon } from "../images/WishlistPresent.svg"

import { Button } from "./Button"

export type QuickWishlistProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & { product: Product }

interface Values {
  identifier: string
}

export const QuickWishlistStyled: React.FC<QuickWishlistProps> = styled.div`
  ${compose(layout, position, space)}
`

export const QuickWishlist: React.FC<QuickWishlistProps> = ({
  product,
  ...props
}) => {
  const [isInWishlist, setIsInWishlist] = useState(false)

  const path = `/.netlify/functions/wishlists`

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
          <Button type="submit" active>
            <span className="sr-only">Add to Wishlist</span>
            {isInWishlist ? <WishlistPresentIcon /> : <WishlistAbsentIcon />}
          </Button>
        </Form>
      </Formik>
    </QuickWishlistStyled>
  )
}
