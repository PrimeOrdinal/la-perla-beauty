import React from "react"
import styled from "styled-components"
import { ShoppingBagProduct } from "./ShoppingBagProduct"
import { Button } from "./Button"

const GridStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;

  .promo-section {
    border-top: 1px solid #bdbdbd;
    padding-block-start: 1rem;
    padding-block-end: 1rem;
    h2 {
      text-transform: uppercase;
      font-size: 13px;
      font-family: "Quicksand";
      font-weight: 600;
    }
    form {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      input {
        border: 1px solid black;
      }
    }
  }
  .product-total-section {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    border-top: 1px solid #bdbdbd;
    padding-block-start: 1rem;
    padding-block-end: 1rem;
  }

  .checkout-section {
    border-top: 1px solid #bdbdbd;
    padding-block-start: 1rem;
    padding-block-end: 1rem;
    display: grid;
    gap: 1rem;
    grid-auto-flow: row;
  }

  .grid-wrapper {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    span {
      text-transform: uppercase;
    }
    .title {
      font-weight: 600;
    }
    .price {
      font-family: "Tiempos";
      font-weight: 300;
      font-size: 14px;
    }
  }
`

export const Bag: React.FC = () => {
  return (
    <GridStyled>
      <h1>Your bag</h1>
      <ShoppingBagProduct />
      <ShoppingBagProduct />
      <section className="promo-section">
        <h2>promotional code</h2>
        <form>
          <input type="text" />
          <Button variant="primary">Apply</Button>
        </form>
      </section>
      <section className="product-total-section">
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
    </GridStyled>
  )
}
