import type { Product } from "schema-dts"

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

import { ReactComponent as CloseIcon } from "../../static/icons/Close.svg"
import { ReactComponent as MinusIcon } from "../../static/icons/Minus.svg"
import { ReactComponent as PlusIcon } from "../../static/icons/Plus.svg"

import { mediaQueries } from "../theme"

const BagProductStyled = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: ${props =>
    props.layout === "compact" ? "auto 1fr" : "1fr 2fr"};

  .bagCol-1 {
    border-radius: ${themeGet("radii.3")}px;
    height: 160px;

    ${mediaQueries.md} {
      height: ${props => (props.layout === "compact" ? "100px" : "200px")};
    }
  }

  .bagCol-2 {
    align-content: space-between;
    display: grid;
    span {
      text-align: left;
      display: block;
    }
    .title-wrapper {
      align-content: center;
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      margin-block-end: 8px;
      padding-block-start: 1rem;

      h1 {
        font-size: 16px;
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
        display: grid;
        grid-auto-flow: column;
        gap: 1rem;
        align-items: center;
        .quantity-icon {
          border: solid 1px black;
          height: 30px;
          padding: 0px;
          width: 30px;
        }

        .total {
          border: none;
          padding: unset;
          text-align: center;
          width: 2rem;
        }
      }

      .price {
        font-family: "Tiempos", serif;
        font-size: 14px;
        font-weight: lighter;
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
  ...props
}) => {
  return (
    <BagProductStyled {...props}>
      <img
        className="bagCol-1"
        src="https://cdn11.bigcommerce.com/s-9o6tufixs6/products/116/images/404/LaPerla_Collection_120ml__IT__14539.1612958270.386.513.jpg?c=1"
      />
      <aside className="bagCol-2">
        <div>
          <div className="title-wrapper">
            <h1>Product Name</h1>
            <button className="close-icon icon">
              <CloseIcon />
            </button>
          </div>
          <span>200ml</span>
        </div>
        <form className="quantity-wrapper">
          <div className="button-wrapper">
            <button className="quantity-icon icon">
              <MinusIcon />
            </button>
            <input className="total" name="quantity" type="number" value="2" />
            <button className="quantity-icon icon">
              <PlusIcon />
            </button>
          </div>
          <span className="price">£124</span>
        </form>
      </aside>
    </BagProductStyled>
  )
}
