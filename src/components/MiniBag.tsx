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

import { LinkButton } from "./Button"
import { ShoppingBagProduct } from "./ShoppingBagProduct"

export type MiniBagProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const MiniBagStyled: React.FC<MiniBagProps> = styled.div`
  &:disabled {
    color: "disabled";
    cursor: "not-allowed";
  }

  background-color: ${themeGet("colors.white")};
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
      font-size: var(--font-size-heading-3, 14px);
      font-weight: lighter;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const MiniBag: React.FC<MiniBagProps> = props => (
  <MiniBagStyled {...props}>
    <section className="items">
      <ShoppingBagProduct layout="compact" />
      <ShoppingBagProduct layout="compact" />
      <ShoppingBagProduct layout="compact" />
      <ShoppingBagProduct layout="compact" />
      <ShoppingBagProduct layout="compact" />
      <ShoppingBagProduct layout="compact" />
    </section>
    <section className="checkout-section">
      <div className="grid-wrapper">
        <span className="title">Total (inc vat)</span>
        <span className="price">£100</span>
      </div>
      <LinkButton to="/bag" variant="secondary">
        View Bag
      </LinkButton>
      <LinkButton to="/checkout" variant="primary">
        Checkout
      </LinkButton>
    </section>
  </MiniBagStyled>
)
