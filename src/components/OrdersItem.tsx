import clsx from "clsx"
import React from "react"
import styled from "styled-components"
import {
  compose,
  layout,
  position,
  space,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"
import { ListPlain } from "./ListPlain"
import { Button, Link } from "./Button"
import { mediaQueries } from "../theme"

export type OrdersItemProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: Array<{
      current: string
      previous: string
    }>
  }

const OrderItemStyled = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  place-content: start;
  ${mediaQueries.md} {
    grid-auto-flow: column;
  }
  .items {
    display: grid;
    gap: 1rem;
    grid-auto-flow: row;
    grid-column: span 2;
    ${mediaQueries.md} {
      grid-column: span 1;
      place-content: start;
    }
  }
  .view-previous-desktop {
    text-transform: uppercase;
    font-weight: bold;
    display: none;
    ${mediaQueries.md} {
      display: block;
    }
  }
`
const SecondColumnStyled = styled(ListPlain)`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  .order {
    display: grid;
    grid-auto-flow: row;
    .order-name {
      text-transform: uppercase;
    }
    .order-number {
      font-family: "Tiempos";
      font-weight: 300;
    }
  }
  .price {
    font-family: "Tiempos";
    font-weight: 300;
  }
  .order-history {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    li {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 13px;
      span {
        font-weight: normal;
      }
    }
  }
  li {
    .view-previous-mobile {
      text-transform: uppercase;
      font-weight: bold;
      ${mediaQueries.md} {
        display: none;
      }
    }
  }
`

export const OrdersItem: React.FC<OrdersItemProps> = ({ items, previous }) => {
  return (
    <OrderItemStyled>
      <img src="https://picsum.photos/210" alt="image" />
      <SecondColumnStyled>
        <ListPlain className="order">
          <li className="order-name">order</li>
          <li className="order-number">#23454466</li>
        </ListPlain>
        <li className="price">£49</li>
        <ListPlain className="order-history">
          <li>
            order date: <span>1/32/13</span>
          </li>
          <li>
            last update: <span>1/32/13</span>
          </li>
          <li>
            status: <span>1/32/13</span>
          </li>
        </ListPlain>
        <li>
          <Link className="view-previous-mobile">view order details</Link>
        </li>
      </SecondColumnStyled>
      {/* <div className="items">
        <Button variant="primary" py="5" px="7">
          view order details
        </Button>
        <Button variant="tertiary" py="5" px="7">
          track order
        </Button>
      </div> */}

      <Link className="view-previous-desktop">View order details</Link>
    </OrderItemStyled>
  )
}
