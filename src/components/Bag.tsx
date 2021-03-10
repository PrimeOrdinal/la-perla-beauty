import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { mediaQueries } from "../theme"

import { Button } from "./Button"
import { ShoppingBagProduct } from "./ShoppingBagProduct"
import applepay from "../../static/icons/applepay.svg"
import googlepay from "../../static/icons/googlepay.svg"
import mastercard from "../../static/icons/mastercard.svg"
import visa from "../../static/icons/visa.svg"

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
      font-size: var(--font-size-xl, 24px);
      margin: 0;
    }
  }
  .column-2 {
    align-content: flex-start;
    ${mediaQueries.md} {
      align-items: flex-start;
      display: grid;
      gap: 2rem;
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
          font-family: "Quicksand", sans-serif;
          font-size: ${themeGet("fontSizes.bodyMobile")}px;
          font-weight: bold;
          margin-block-start: 0;
          text-transform: uppercase;
        }

        form {
          display: grid;
          gap: 1rem;
          grid-template-columns: 2fr 1fr;
          align-items: stretch;
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
    .payment-icons {
      display: grid;
      grid-auto-flow: column;
      gap: 2rem;
      align-items: center;
      justify-content: center;
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
      font-weight: bold;
    }

    .price {
      font-family: "Tiempos", serif;
      font-size: var(--font-size-heading-3, 14px);
      font-weight: lighter;
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
          <div className="payment-icons">
            <img src={applepay} alt="apple pay icon" />
            <img src={mastercard} alt="mastercard icon" />
            <img src={googlepay} alt="google pay icon" />
            <img src={visa} alt="visa card icon" />
          </div>
        </section>
      </GridStyled>
    </div>
  )
}
