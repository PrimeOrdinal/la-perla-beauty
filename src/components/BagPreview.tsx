// import type { Context } from "react"
import type { Product } from "schema-dts"

import type { Bag } from "../../types/BigCommerce"

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

import { mediaQueries } from "../theme"

import { BagContext } from "./Bag"
import { BagProduct } from "./BagProduct"
import { LinkButton } from "./Button"

export type BagPreviewProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    bag: Bag
    items: Product[]
  }

export const BagPreviewStyled: React.FC<BagPreviewProps> = styled.div`
  background-color: ${themeGet("colors.background")};
  border-radius: ${themeGet("radii.4")}px;
  border-style: solid;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr auto;
  max-height: 60vh;
  padding: 1rem;

  ${mediaQueries.md} {
    margin-block-start: 2rem;
  }

  &:disabled {
    color: "disabled";
    cursor: "not-allowed";
  }

  .items {
    display: grid;
    gap: 2rem;
    grid-auto-flow: row;
    justify-items: start;
    margin-block-end: 1rem;
    overflow-y: auto;
    padding-block-end: 1rem;

    h1 {
      font-size: var(--font-size-xl, 24px);
      margin: 0;
    }
  }

  .checkout-section {
    border-top-style: solid;
    display: grid;
    gap: 1rem;
    grid-auto-flow: row;
    padding-block-end: 1rem;
    padding-block-start: 1rem;
  }

  .grid-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;

    span {
      text-transform: uppercase;
    }

    .title {
      font-weight: bold;
    }

    .price {
      font-family: "Tiempos", serif;
      font-size: var(--font-size-heading-5, 14px);
      font-weight: lighter;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const BagPreview: React.FC<BagPreviewProps> = props => {
  const { bag }: { bag: Bag } = useContext(BagContext)

  return (
    <BagPreviewStyled {...props}>
      <section className="items">
        {bag.line_items?.physical_items?.map((item, index) => <BagProduct key={index} layout="compact" {...item} />)}
        {props.items?.map((item, index) => (
          <BagProduct key={index} layout="compact" {...item} />
        ))}
      </section>
      <section className="checkout-section">
        <div className="grid-wrapper">
          <span className="title">Total (inc vat)</span>
          <span className="price">{bag.cart_amount}</span>
        </div>
        <LinkButton to="/bag" variant="secondary">
          View Bag
        </LinkButton>
        <LinkButton to="/checkout" variant="primary">
          Checkout
        </LinkButton>
      </section>
    </BagPreviewStyled>
  )
}
