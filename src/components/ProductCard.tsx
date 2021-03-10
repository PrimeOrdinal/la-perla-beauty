import type { Offer, Product } from "schema-dts"

import { themeGet } from "@styled-system/theme-get"
import { Link } from "./Button"
import React from "react"
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

import { useToggle } from "../hooks/useToggle"

import { ReactComponent as MinusIcon } from "../../static/icons/Minus.svg"
import { ReactComponent as PlusIcon } from "../../static/icons/Plus.svg"

import { mediaQueries } from "../theme"

import {
  availabilitySchemaToHumanReadableText,
  availabilitySchemaToShortName,
} from "../utils/schema-org"

import { Button } from "./Button"
import { Price } from "./Price"
import { QuickBuy } from "./QuickBuy"
import { QuickWishlist } from "./QuickWishlist"
import { ItemAvailability } from "./ItemAvailability"

const ProductCardStyled = styled.article`
  align-content: space-between;
  background-color: none;
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

  .product-information {
    align-items: center;
    display: grid;
    gap: 0.5rem;
    grid-auto-flow: column;
    justify-content: space-between;
  }

  .product-category-wrapper {
    align-items: center;
    display: grid;
    gap: 0.5rem;
    grid-auto-flow: column;
    justify-content: end;
  }

  .product-actions {
    align-items: center;
    display: grid;
    grid-auto-flow: column;

    ${mediaQueries.sm} {
      gap: ${themeGet("space.3")}px;
    }

    button {
      padding-inline-end: ${themeGet("space.2")}px;
      padding-inline-start: ${themeGet("space.2")}px;
    }
  }

  .product-category {
    color: inherit;
    font-size: var(--font-size-small, 12px);
    letter-spacing: 1px;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;

    ${mediaQueries.sm} {
      overflow: unset;
      text-overflow: unset;
      white-space: unset;
    }
  }

  .product-name {
    align-self: flex-end;
    font-family: "Tiempos", serif;
    font-size: var(--font-size-heading-2, 18px);
    font-weight: lighter;
  }

  .product-price {
    font-family: "Tiempos", serif;
    font-size: var(--font-size-heading-2, 18px);
    font-weight: lighter;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`
export type ProductCardProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & { product: Product; }

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  ...props
}) => {
  const [quickBuyOpen, toggleQuickBuyOpen] = useToggle()

  const offer = product?.offers as Offer

  const thumbnail = product?.image?.[0]

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
      {(image && product?.url && (
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
        <ItemAvailability
          className="availability"
          availability={availabilitySchemaToShortName(offer?.availability)}
        >
          {availabilitySchemaToHumanReadableText(offer?.availability)}
        </ItemAvailability>
      )}
      <div className="product-information">
        <div className="product-category-wrapper">
          {Array.isArray(product?.category) &&
            product?.category
              .map(category => (
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
              ))
              .pop()}
        </div>
        {product?.brand?.name && (
          <span className="product-brand" itemProp="brand">
            {product?.brand?.name}
          </span>
        )}
        <div className="product-actions">
          <QuickWishlist product={product} />
          <Button
            p={0}
            onClick={() => {
              toggleQuickBuyOpen()
            }}
          >
            <span className="sr-only">Quick Buy</span>
            {quickBuyOpen ? <MinusIcon /> : <PlusIcon />}
          </Button>
        </div>
      </div>
      {product?.name && (
        <span className="product-name" itemProp="name">
          {product?.name}
        </span>
      )}
      {!quickBuyOpen && offer && (
        <Price display={{ _: "none", md: "block" }} offer={offer} />
      )}
      {quickBuyOpen && (
        <QuickBuy
          className="quick-buy"
          marginBottom={{ _: 6, md: 0 }}
          product={product}
        />
      )}
    </ProductCardStyled>
  )
}
