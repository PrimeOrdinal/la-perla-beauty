import type { Product } from "schema-dts"

import type { Colour as ColourProp } from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
import React, { useContext } from "react"
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

import { SiteContext } from "../components/Layout"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"

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
    variantType: "color" | "size"
  }

export const ProductCardAlternateGallery: React.FC<ProductCardAlternateGalleryProps> = props => {
  const site = useContext(SiteContext)

  const items = site?.featuredProducts?.edges?.map(({node: productFormatBigCommerce}) =>
    standardiseBigCommerceProduct({
      productFormatBigCommerce,
    })
  )

  return (
    <ProductCardAlternateGalleryStyled {...props}>
      <Carousel columns={4} showArrows showPickers>
        {items?.map((product, index) => (
          <ProductCardAlternate
            key={index}
            product={product}
            variantType={props.variantType}
          />
        ))}
      </Carousel>
    </ProductCardAlternateGalleryStyled>
  )
}

export default ProductCardAlternateGallery
