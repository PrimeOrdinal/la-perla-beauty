import React from "react"
import styled from "styled-components"
import { ReactComponent as Close } from "../images/Close.svg"
import { ReactComponent as Minus } from "../images/Minus.svg"
import { ReactComponent as Plus } from "../images/Plus.svg"

const ShoppingBagProductStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  .column-1 {
    border-radius: 12px;
    height: 160px;
  }
  .column-2 {
    position: relative;
    .title-wrapper {
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      align-items: center;
      margin-block-end: 8px;
      h1 {
        font-weight: 300;
        font-size: 16px;
        margin: 0;
      }
      .close-icon {
        height: 18px;
        width: 18px;
        padding: 0;
      }
    }
    .quantity-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 3fr;
      align-items: center;
      position: absolute;
      bottom: 0px;
      .quantity-icon {
        border: solid 1px black;
        padding: 0px;
        height: 30px;
        width: 30px;
      }
      .total {
        text-align: center;
      }
      .price {
        text-align: end;
        font-family: "Tiempos";
        font-weight: 300;
        font-size: 14px;
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
            <Close />
          </button>
        </div>
        <span>200ml</span>
        <div className="quantity-wrapper">
          <button className="quantity-icon icon">
            <Minus />
          </button>
          <span className="total">2</span>
          <button className="quantity-icon icon">
            <Plus />
          </button>
          <span className="price">£124</span>
        </div>
      </aside>
    </ShoppingBagProductStyled>
  )
}
