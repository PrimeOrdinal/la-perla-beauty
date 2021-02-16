import React from "react"
import styled from "styled-components"

import { ReactComponent as CloseIcon } from "../images/Close.svg"
import { ReactComponent as MinusIcon } from "../images/Minus.svg"
import { ReactComponent as PlusIcon } from "../images/Plus.svg"

const ShoppingBagProductStyled = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;

  .column-1 {
    border-radius: 12px;
    height: 160px;
  }

  .column-2 {
    position: relative;

    .title-wrapper {
      align-items: center;
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      margin-block-end: 8px;

      h1 {
        font-size: 16px;
        font-weight: 300;
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
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 3fr;
      position: absolute;

      .quantity-icon {
        border: solid 1px black;
        height: 30px;
        padding: 0px;
        width: 30px;
      }

      .total {
        text-align: center;
      }

      .price {
        font-family: "Tiempos";
        font-size: 14px;
        font-weight: 300;
        text-align: end;
      }
    }
  }

  .icon {
    svg,
    svg * {
      fill: black;
    }
  }
`

export const ShoppingBagProduct: React.FC = () => {
  return (
    <ShoppingBagProductStyled>
      <img
        className="column-1"
        src="https://cdn11.bigcommerce.com/s-9o6tufixs6/products/116/images/404/LaPerla_Collection_120ml__IT__14539.1612958270.386.513.jpg?c=1"
      />
      <aside className="column-2">
        <div className="title-wrapper">
          <h1>Product Name</h1>
          <button className="close-icon icon">
            <CloseIcon />
          </button>
        </div>
        <span>200ml</span>
        <div className="quantity-wrapper">
          <button className="quantity-icon icon">
            <MinusIcon />
          </button>
          <span className="total">2</span>
          <button className="quantity-icon icon">
            <PlusIcon />
          </button>
          <span className="price">£124</span>
        </div>
      </aside>
    </ShoppingBagProductStyled>
  )
}
