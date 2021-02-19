import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { mediaQueries } from "../theme"

import { Button } from "./Button"
import { ShoppingBagProduct } from "./ShoppingBagProduct"

const GridStyled = styled.div`
  display: grid;
  grid-auto-flow: row;

  ${mediaQueries.md} {
    grid-template-columns: 2fr 1fr;
    margin-block-start: 2rem;
  }

  .column-1 {
    display: grid;
    gap: 2rem;
    grid-auto-flow: row;
    justify-items: start;
    padding-block-end: 1rem;

    h1 {
      font-size: ${themeGet("fontSizes.6")}px;
      margin: 0;

      ${mediaQueries.md} {
        font-size: ${themeGet("fontSizes.7")}px;
      }
    }
  }
  .column-2 {
    ${mediaQueries.md} {
      align-items: flex-start;
      display: grid;
    }

    .column-2-wrapper {
      ${mediaQueries.md} {
        border-radius: ${themeGet("radii.4")}px;
        border-style: solid;
        display: grid;
        grid-auto-flow: row;
        padding-block-end: 1rem;
        padding-block-start: 1rem;
        padding-inline-end: 1rem;
        padding-inline-start: 1rem;
      }

      h1 {
        display: none;

        ${mediaQueries.md} {
          display: initial;
        }
      }
      .promo-section {
        border-top-style: solid;
        padding-block-end: 1rem;
        padding-block-start: 1rem;

        h2 {
          font-family: "Quicksand";
          font-size: ${themeGet("fontSizes.bodyMobile")}px;
          font-weight: 600;
          margin-block-start: 0;
          text-transform: uppercase;
        }

        form {
          display: grid;
          gap: 1rem;
          grid-template-columns: 2fr 1fr;

          input {
            border-color: ${themeGet("colors.black")};
            border-style: solid;
          }
        }
      }

      .productTotal-section {
        border-top-style: solid;
        display: grid;
        gap: 1rem;
        grid-auto-flow: row;
        padding-block-end: 1rem;
        padding-block-start: 1rem;
      }

      .checkout-section {
        border-top-style: solid;
        display: grid;
        gap: 1rem;
        grid-auto-flow: row;
        padding-block-end: 1rem;
        padding-block-start: 1rem;
      }
    }
  }

  .grid-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;

    span {
      text-transform: uppercase;
    }

    .title {
      font-weight: 600;
    }

    .price {
      font-family: "Tiempos";
      font-size: ${themeGet("fontSizes.heading3Mobile")}px;
      font-weight: 300;
    }
  }
`

export const Bag: React.FC = () => {
  return (
    <div className="container">
      <GridStyled>
        <section className="column-1">
          <h1>Your bag</h1>
          <ShoppingBagProduct />
          <ShoppingBagProduct />
          <ShoppingBagProduct />
          <ShoppingBagProduct />
          <ShoppingBagProduct />
          <ShoppingBagProduct />
        </section>
        <section className="column-2">
          <div className="column-2-wrapper">
            <h1>Order Summary</h1>
            <section className="promo-section">
              <h2>promotional code</h2>
              <form>
                <input type="text" />
                <Button variant="primary">Apply</Button>
              </form>
            </section>
            <section className="productTotal-section">
              <div className="grid-wrapper">
                <span className="title">subtotal</span>
                <span className="price">£100</span>
              </div>
              <div className="grid-wrapper">
                <span>shipping</span>
                <span>–</span>
              </div>
              <div className="grid-wrapper">
                <span>Vat</span>
                <span>–</span>
              </div>
            </section>
            <section className="checkout-section">
              <div className="grid-wrapper">
                <span className="title">Total (inc vat)</span>
                <span className="price">£100</span>
              </div>
              <Button variant="primary">Checkout</Button>
            </section>
          </div>
        </section>
      </GridStyled>
    </div>
  )
}
