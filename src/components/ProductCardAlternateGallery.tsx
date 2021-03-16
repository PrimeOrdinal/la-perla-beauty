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

import { ReactComponent as Arrow } from "../../static/icons/Arrow.svg"

import { mediaQueries } from "../theme"

import { ProductCardAlternate } from "./ProductCardAlternate"

const ProductCardAlternateGalleryStyled = styled.section`
  --button-height: 24px;

  background-color: ${props => props.colour ? themeGet(`colors.${props.colour}`) : themeGet("colors.lightgreen")};
  display: grid;
  gap: 1rem;
  grid-auto-flow: row;
  margin-block-end: 1rem;
  padding-block: 1rem;
  place-items: center;

  .wrapper {
    position: relative;
    
    ${mediaQueries.sm} {
      max-width: 550px;
    }

    ${mediaQueries.md} {
      max-width: 1078px;
    }
  }

  .items {
    display: grid;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    ${mediaQueries.sm} {
      gap: 1.5rem;
      grid-auto-flow: column;
    }

    ${mediaQueries.md} {
      gap: 1.5rem;
    }

    & > * {
      scroll-snap-align: start;
    }
  }

  .ui-button {
    height: var(--button-height, 24px);
    position: absolute;
    top: calc(50% - (var(--button-height, 24px) * 0.5));
  }

  .image-gallery-left-nav {
    left: -60px;
  }

  .image-gallery-right-nav {
    right: -60px;
  }

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

export const ProductCardAlternateGallery: React.FC<ProductCardAlternateGalleryProps> = (props) => (
  <ProductCardAlternateGalleryStyled {...props}>
    <div className="wrapper">
      <div className="items">
        {props.items?.map((product, index) => (
          <ProductCardAlternate
            key={index}
            product={product}
            variantType={props.variantType}
          />
        ))}
      </div>
      <button className={clsx("ui-button", "image-gallery-left-nav")}>
        <Arrow className="image-gallery-svg" />
      </button>
      <button className={clsx("ui-button", "image-gallery-right-nav")}>
        <Arrow className={clsx("image-gallery-svg", "ui", "zoom-in")} />
      </button>
    </div>
  </ProductCardAlternateGalleryStyled>
)

export default ProductCardAlternateGallery
