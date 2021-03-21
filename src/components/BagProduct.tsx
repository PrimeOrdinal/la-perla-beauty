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

import { ReactComponent as CloseIcon } from "../../static/icons/Close.svg"
import { ReactComponent as MinusIcon } from "../../static/icons/Minus.svg"
import { ReactComponent as PlusIcon } from "../../static/icons/Plus.svg"

import { mediaQueries } from "../theme"

import { Price } from "./Price"

const BagProductStyled = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: ${props =>
    props.layout === "compact" ? "auto 1fr" : "1fr 2fr"};

  .image {
    border-radius: ${themeGet("radii.3")}px;
    height: 160px;

    ${mediaQueries.md} {
      height: ${props => (props.layout === "compact" ? "100px" : "200px")};
    }
  }

  .variants {
    display: grid;
    grid-auto-flow: column;
  }

  .details {
    align-content: space-between;
    display: grid;

    .variant {
      text-align: left;
    }

    .title-wrapper {
      align-content: center;
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      margin-block-end: 8px;
      padding-block-start: 1rem;

      h1 {
        font-size: ${themeGet("fontSizes.4")}px;
        font-weight: lighter;
        margin: 0;
      }
      .close-icon {
        height: 18px;
        padding: 0;
        width: 18px;
      }
    }

    .quantity-wrapper {
      align-items: center;
      bottom: 0px;
      display: flex;
      justify-content: space-between;
      width: 100%;

      ${mediaQueries.md} {
        bottom: 30%;
      }

      .button-wrapper {
        align-items: center;
        display: grid;
        gap: 0.25rem;
        grid-auto-flow: column;

        .quantity-icon {
          border-style: solid;
          border-color: ${themeGet("colors.black")};
          height: 30px;
          padding: 0px;
          width: 30px;

          svg {
            margin: unset;
          }
        }

        .total {
          border: none;
          padding: unset;
          text-align: right;
          width: 2rem;
        }
      }

      .price {
        font-family: "Tiempos", serif;
        font-size: ${themeGet("fontSizes.3")}px;
        text-align: end;
      }
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type BagProductProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    layout: "compact" | "full"
    product: Product
  }

export const BagProduct: React.FC<BagProductProps> = ({
  product,
  ...props
}) => {
  const offers = product?.offers as Offer

  const primaryOffer = Array.isArray(offers) ? offers?.[0] : offers

  const thumbnail = product?.image?.[0]

  const image = thumbnail ? (
    <img
      alt={product?.name}
      className="image"
      itemProp="image"
      src={thumbnail?.contentUrl}
    />
  ) : undefined

  return (
    <BagProductStyled {...props}>
      {image}
      <aside className="details">
        <div>
          <div className="title-wrapper">
            <h1>{product?.name}</h1>
            <button className="close-icon icon">
              <CloseIcon />
            </button>
          </div>
          <div className="variants">
            {"color" in product && (
              <div className={clsx("variant", "color")}>
                <span className={clsx("label", "sr-only")}>Colour</span>
                <span className="value">{product?.color}</span>
              </div>
            )}
            {"size" in product && (
              <div className={clsx("variant", "size")}>
                <span className={clsx("label", "sr-only")}>Size</span>
                <span className="value">{product?.size?.value}</span>
                <span className="unitText">{product?.size?.unitText}</span>
              </div>
            )}
          </div>
        </div>
        <form className="quantity-wrapper">
          <div className="button-wrapper">
            <button className="quantity-icon icon">
              <MinusIcon />
            </button>
            <input className="total" name="quantity" type="number" value="0" />
            <button className="quantity-icon icon">
              <PlusIcon />
            </button>
          </div>
          <Price className="price" offer={primaryOffer} />
        </form>
      </aside>
    </BagProductStyled>
  )
}
