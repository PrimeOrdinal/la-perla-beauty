import type { Product } from "schema-dts"

import type { Colour as ColourProp } from "../../types/components"

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

import { Carousel } from "./Carousel"
import { ProductCardAlternate } from "./ProductCardAlternate"

const ProductCardAlternateGalleryStyled = styled.section`
  --button-height: 24px;

  background-color: ${props =>
    props.colour
      ? themeGet(`colors.${props.colour}`)
      : themeGet("colors.lightgreen")};
  display: grid;
  margin-block-end: 1rem;
  padding-block-end: 1rem;
  padding-block-start: 1rem;
  place-items: center;

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ProductCardAlternateGalleryProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    colour?: ColourProp
    items: Product[]
    variantType: "color" | "size"
  }

export const ProductCardAlternateGallery: React.FC<ProductCardAlternateGalleryProps> = props => {
  const itemGap = 2
  const visibleItems = 4

  return (
    <ProductCardAlternateGalleryStyled itemGap={itemGap} visibleItems={visibleItems} {...props }>
      <div className={clsx("container", "contents")}>
        <Carousel showArrows showPickers visibleItems={visibleItems}>
          {props.items?.map((product, index) => (
            <ProductCardAlternate
              className="item"
              key={index}
              product={product}
              variantType={props.variantType}
            />
          ))}
        </Carousel>
      </div>
    </ProductCardAlternateGalleryStyled>
  )
}

export default ProductCardAlternateGallery
