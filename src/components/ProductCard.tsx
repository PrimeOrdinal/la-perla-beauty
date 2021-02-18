import type { Offer, Product } from "schema-dts"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import getSymbolFromCurrency from "currency-symbol-map"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { compose, layout, space, LayoutProps, SpaceProps } from "styled-system"

import { useToggle } from "../hooks/useToggle"

import { ReactComponent as MinusIcon } from "../images/Minus.svg"
import { ReactComponent as PlusIcon } from "../images/Plus.svg"

import { mediaQueries } from "../theme"

import {
  availabilitySchemaToHumanReadableText,
  availabilitySchemaToShortName,
} from "../utils/schema-org"

import { Button } from "./Button"
import { Price } from "./Price"
import { Tag } from "./Tag"
import { QuickWishlist } from "./QuickWishlist"

const ProductCardStyled = styled.article`
  align-content: space-between;
  background: none;
  display: grid;
  gap: ${themeGet("space.5")}px;

  .image-container,
  img {
    background-color: ${themeGet("colors.lightgrey")};
    border-radius: ${themeGet("radii.4")}px;
    display: block;
  }

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  .product-primary {
    display: grid;
    gap: ${themeGet("space.3")}px;
    grid-template-rows: min-content 1fr;
  }

  .product-category-wrapper {
    align-items: center;
    display: grid;
    gap: 0.5rem;
    grid-auto-flow: column;
    justify-content: end;

    svg {
      cursor: pointer;
      height: 18px;
      justify-self: flex-end;
      margin-right: ${themeGet("space.2")}px;
      object-fit: contain;
    }
  }

  .product-category {
    color: inherit;
    font-size: var(--font-size-body, 13px);
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .product-name {
    align-self: flex-end;
    font-family: "Tiempos";
    font-size: ${themeGet("fontSizes.heading2Desktop")}px;
    font-weight: 300;

    ${mediaQueries.sm} {
      font-size: ${themeGet("fontSizes.5")}px;
    }
  }

  .product-price {
    font-family: "Tiempos";
    font-size: ${themeGet("fontSizes.heading2Desktop")}px;
  }

  .quick-buy {
    grid-auto-flow: row;

    h1 {
      font-family: "Quicksand";
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;

      ${mediaQueries.md} {
        font-size: 14px;
      }
    }

    .form-fields {
      display: grid;
      grid-auto-flow: column;
    }
  }

  ${compose(layout, space)}
`

interface Values {
  emailAddress: string
}

export type ProductCardProps = LayoutProps &
  SpaceProps & { product: Product; showImage: boolean }

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showImage = true,
  ...props
}) => {
  const [quickBuyVisibility, toggleQuickBuyVisibility] = useToggle()

  const offer = product?.offers as Offer

  const thumbnail = product?.images?.find(
    ({ representativeOfPage }) => representativeOfPage === true
  )

  const image = thumbnail ? (
    <img
      alt={product?.name as string}
      itemProp="image"
      src={thumbnail?.contentUrl}
    />
  ) : undefined

  return (
    <ProductCardStyled
      itemScope
      itemType="https://schema.org/Product"
      data-id={product?.["@id"]}
      {...props}
    >
      {(showImage && product?.url && (
        <Link
          className="image-container"
          to={product?.url as string}
          title={product?.title as string}
        >
          {image}
        </Link>
      )) ||
        image}
      {offer?.availability && (
        <Tag
          className="availability"
          availability={availabilitySchemaToShortName(offer?.availability)}
        >
          {availabilitySchemaToHumanReadableText(offer?.availability)}
        </Tag>
      )}
      <div className="product-category-wrapper">
        {product?.category?.url && (
          <Link
            className="product-category"
            itemProp="category"
            title={product?.category}
            to={product?.category as string}
          >
            <span itemProp="name">{product?.category}</span>
          </Link>
        )}
        {product?.brand?.name && (
          <span className="product-brand" itemProp="brand">
            {product?.brand?.name}
          </span>
        )}
        <QuickWishlist product={product} />
        <Button
          p={0}
          active
          onClick={() => {
            toggleQuickBuyVisibility()
          }}
        >
          <span className="sr-only">Quick Buy</span>
          {quickBuyVisibility ? <MinusIcon /> : <PlusIcon />}
        </Button>
      </div>
      {product?.name && (
        <span className="product-name" itemProp="name">
          {product?.name}
        </span>
      )}
      {offer && <Price offer={offer} />}
      {quickBuyVisibility && (
        <Formik
          className={clsx("container", "form-container")}
          initialValues={{
            emailAddress: "",
          }}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            const path = `${window.location.origin}/.netlify/functions/sign-up-to-our-newsletter`

            const url = new URL(path)

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
              | <span>Add to bag</span>
            </Button>
          </Form>
        </Formik>
      )}
    </ProductCardStyled>
  )
}
