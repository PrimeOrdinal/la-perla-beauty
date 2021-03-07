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
import { ListPlain } from "./ListPlain"
import { Button, Link } from "./Button"
import { mediaQueries } from "../theme"

export type OrdersItemProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    current: string
    previous: string
  }

const OrderItemStyled = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto;
  place-content: start;
  ${mediaQueries.md} {
    grid-auto-flow: column;
  }
  img {
    width: 100%;
    object-fit: cover;
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
  .view-desktop {
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
      font-size: 11px;
    }
    .order-number {
      font-family: "Tiempos", serif;
      font-weight: lighter;
      font-size: 14px;
    }
  }
  .price {
    font-family: "Tiempos", serif;
    font-weight: lighter;
    font-size: 14px;
  }
  .order-history {
    display: grid;
    grid-auto-flow: row;
    gap: 8px;
    li {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 11px;
      span {
        font-weight: normal;
      }
    }
  }
  li {
    .view-mobile {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 13px;
      ${mediaQueries.md} {
        display: none;
      }
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const OrdersItem: React.FC<OrdersItemProps> = ({
  current,
  previous,
}) => {
  return (
    <OrderItemStyled>
      <img src="https://picsum.photos/220" alt="image" />
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
            status: <span>processing</span>
          </li>
        </ListPlain>

        <li>
          {previous && <Link className="view-mobile">view order details</Link>}
        </li>
      </SecondColumnStyled>
      {current && (
        <div className="items">
          <Button variant="primary" py="5" px="7">
            view order details
          </Button>
          <Button variant="tertiary" py="5" px="7">
            track order
          </Button>
        </div>
      )}

      {previous && <Link className="view-desktop">View order details</Link>}
    </OrderItemStyled>
  )
}
