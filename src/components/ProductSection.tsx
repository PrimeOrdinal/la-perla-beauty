import type { Offer, Product } from "schema-dts"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
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

import {
  availabilitySchemaToHumanReadableText,
  availabilitySchemaToShortName,
} from "../utils/schema-org"

import { Link } from "./Button"
import { ItemAvailability } from "./ItemAvailability"
import { Price } from "./Price"

const ProductSectionStyled = styled.section`
  display: grid;

  .categories {
    display: grid;
    font-size: var(--font-size-sm, 12px);
    gap: 1rem;
    grid-auto-flow: column;
    justify-content: start;
    text-transform: uppercase;
  }

  .availability {
    justify-self: end;
  }

  .name {
    font-size: ${themeGet("fontSizes.8")}px;
    margin-block-end: ${themeGet("space.8")}px;
    margin-block-start: unset;
  }

  .price {
    font-size: var(--font-size-lg, 18px);
    margin-block-end: ${themeGet("space.6")}px;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ProductSectionProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & { product: Product }

export const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  const offer = product?.offers as Offer

  return (
    <ProductSectionStyled>
      {Array.isArray(product?.category) && (
        <div className="categories">
          {product?.category
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
      )}

      {offer?.availability && (
        <ItemAvailability
          className="availability"
          availability={availabilitySchemaToShortName(offer?.availability)}
        >
          {availabilitySchemaToHumanReadableText(offer?.availability)}
        </ItemAvailability>
      )}

      <h1 className={clsx("name", "title")}>{product?.name}</h1>

      <Price className="price" offer={offer} />
    </ProductSectionStyled>
  )
}
