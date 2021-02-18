import React from "react"
import { mediaQueries } from "../theme"
import { themeGet } from "@styled-system/theme-get"
import styled from "styled-components"
import { ShoppingBagProduct } from "./ShoppingBagProduct"
import { Button } from "./Button"
import { availabilitySchemaToHumanReadableText } from "src/utils/schema-org"

const GridStyled = styled.div`
  display: grid;
  grid-auto-flow: row;

  ${mediaQueries.md} {
    grid-template-columns: 2fr 1fr;
    margin-block-start: 2rem;
  }
  .column-1 {
    display: grid;
    grid-auto-flow: row;
    justify-items: start;
    gap: 2rem;
    padding-block-end: 1rem;
    h1 {
      margin: 0;
      font-size: ${themeGet("fontSizes.6")}px;
      ${mediaQueries.md} {
        font-size: ${themeGet("fontSizes.7")}px;
      }
    }
  }
  .column-2 {
    ${mediaQueries.md} {
      display: grid;
      align-items: flex-start;
    }
    .column-2-wrapper {
      ${mediaQueries.md} {
        padding-block-start: 1rem;
        padding-block-end: 1rem;
        padding-inline-start: 1rem;
        padding-inline-end: 1rem;
        border: ${themeGet("border.width")} solid ${themeGet("border.color")};
        border-radius: ${themeGet("radii.4")}px;
        display: grid;
        grid-auto-flow: row;
      }

      h1 {
        display: none;
        ${mediaQueries.md} {
          display: initial;
        }
      }
      .promo-section {
        padding-block-start: 1rem;
        padding-block-end: 1rem;
        border-top: solid ${themeGet("border.width")}
          ${themeGet("border.color")}px;
        h2 {
          font-family: "Quicksand";
          text-transform: uppercase;
          font-size: ${themeGet("fontSizes.bodyMobile")}px;
          font-weight: 600;
          margin-block-start: 0;
        }
        form {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1rem;
          input {
            border: 1px solid black;
          }
        }
      }
      .productTotal-section {
        border-top: solid ${themeGet("border.width")}px
          ${themeGet("border.color")};
        padding-block-start: 1rem;
        padding-block-end: 1rem;
        display: grid;
        grid-auto-flow: row;
        gap: 1rem;
      }
      .checkout-section {
        border-top: solid ${themeGet("border.width")}px
          ${themeGet("border.color")};
        padding-block-start: 1rem;
        padding-block-end: 1rem;
        display: grid;
        grid-auto-flow: row;
        gap: 1rem;
      }
    }
  }

  .grid-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      text-transform: uppercase;
    }
    .title {
      font-weight: 600;
    }
    .price {
      font-family: "Tiempos";
      font-weight: 300;
      font-size: ${themeGet("fontSizes.heading3Mobile")}px;
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
