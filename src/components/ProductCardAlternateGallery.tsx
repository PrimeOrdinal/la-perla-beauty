import type { Product } from "schema-dts"

import type { Colour as ColourProp } from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
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

import { mediaQueries } from "../theme"

import { ProductCardAlternate } from "./ProductCardAlternate"

const ProductCardAlternateGalleryStyled = styled.section`
  background-color: ${themeGet("colors.lightgreen")};
  display: grid;
  gap: 1rem;
  grid-auto-flow: row;
  margin-block-end: 1rem;
  padding-block: 1rem;
  place-items: center;

  ${mediaQueries.sm} {  
    grid-template-columns: auto auto;
  }

  ${mediaQueries.md} {
    grid-template-columns: repeat(4, auto);
    gap: 24px;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ProductCardAlternateProps = ColorProps &
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

export const ProductCardAlternateGallery: React.FC<ProductCardAlternateProps> = (props) => (
    <ProductCardAlternateGalleryStyled>
      <div className="container">
        ${props.items.map((product, index) => <ProductCardAlternate key={index} colour={props.colour} product={product} variantType={props.variantType} />)}
      </div>
    </ProductCardAlternateGalleryStyled>
  )

export default ProductCardAlternateGallery
