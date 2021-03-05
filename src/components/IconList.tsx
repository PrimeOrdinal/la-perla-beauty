import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"
import {
  compose,
  grid,
  layout,
  position,
  space,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type IconListProps = GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: Array<{
      color: "purple" | "green" | "orange" | "pink"
      heading: string
      icon:
        | "diamond"
        | "heart"
        | "plant"
        | "nib"
        | "return"
        | "envelope"
        | "recycle"
        | "shipping"
        | "gift-wrap"
        | "tracking"
        | "cookies"
        | "checkout"
        | "perfume"
      body: React.ReactNode
    }>
    orientation: "horizontal" | "vertical"
  }

import { ListPlain } from "../components/ListPlain"

import Diamond from "../images/Diamond.svg"
import WishlistAbsent from "../images/WishlistAbsent.svg"
import Tracking from "../images/Tracking.svg"
import Shipping from "../images/Shipping.svg"
import Return from "../images/Return.svg"
import Newsletter from "../images/Newsletter.svg"
import Plant from "../images/Plant.svg"
import Recycle from "../images/Recycle.svg"
import Perfume from "../images/Perfume.svg"
import Cookies from "../images/Cookies.svg"
import Nib from "../images/Nib.svg"
import GiftWrap from "../images/GiftWrap.svg"

export const IconListStyled: React.FC<IconListProps> = styled(ListPlain)`
  display: grid;
  gap: ${themeGet("space.4")}px;
  grid-auto-flow: ${props =>
    props.orientation === "horizontal" ? "column" : "row"};
  justify-items: ${props =>
    props.orientation == "horizontal" ? "start" : "center"};
  .icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    &.diamond {
      background-image: url(${Diamond});
    }
    &.heart {
      background-image: url(${WishlistAbsent});
    }
    &.plant {
      background-image: url(${Plant});
    }
    &.nib {
      background-image: url(${Nib});
    }
    &.return {
      background-image: url(${Return});
    }
    &.envelope {
      background-image: url(${Newsletter});
    }
    &.recycle {
      background-image: url(${Recycle});
    }
    &.shipping {
      background-image: url(${Shipping});
    }
    &.gift-wrap {
      background-image: url(${GiftWrap});
    }
    &.tracking {
      background-image: url(${Tracking});
    }
    &.cookies {
      background-image: url(${Cookies});
    }
    &.perfume {
      background-image: url(${Perfume});
    }
    &.purple {
      background-color: #d3cbd6;
    }
    &.green {
      background-color: #bfcea5;
    }
    &.orange {
      background-color: #debf9b;
    }
    &.pink {
      background-color: #feebdf;
    }
  }
  li {
    display: grid;
    grid-auto-flow: ${props =>
      props.orientation === "horizontal" ? "column" : "row"};
    gap: 1rem;
    align-items: center;
    justify-items: ${props =>
      props.orientation === "horizontal" ? "start" : "center"};
    text-align: ${props =>
      props.orientation === "horizontal" ? "left" : "center"};
    h3 {
      margin: 0;
    }
  }
  ${compose(grid, layout, position, space)}
`
export const IconList: React.FC<IconListProps> = ({ items, ...props }) => (
  <IconListStyled {...props}>
    {items?.length &&
      items.map((item, index) => (
        <li key={index}>
          {item.icon && (
            <div className={clsx("icon", item.color, item.icon)}>
              <span className="sr-only">{item.icon}</span>
            </div>
          )}
          <div>
            {item.heading && <h3>{item.heading}</h3>}
            {item.body}
          </div>
        </li>
      ))}
  </IconListStyled>
)
