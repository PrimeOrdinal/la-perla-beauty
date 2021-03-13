import type {
  Colour as ColourProp,
  Icon as IconProp,
} from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
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

import { colourClasses } from "../styles/colourClasses"
import { iconClasses } from "../styles/iconClasses"

import { mediaQueries } from "../theme"

export type IconListProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: Array<{
      colour: ColourProp
      icon: IconProp
      text: string
      title: string
    }>
    mobile_view: "stack" | "swipe"
    orientation: "horizontal" | "vertical"
    title: string
  }

import { ListPlain } from "../components/ListPlain"

export const IconListStyled: React.FC<IconListProps> = styled(ListPlain)`
  --item-gap: 1rem;
  --item-height: 40px;

  display: grid;
  gap: ${themeGet("space.4")}px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  ${colourClasses}
  ${iconClasses}

  ${mediaQueries.smDown} {
    max-height: ${props => (props.mobile_view == "stack" ? "calc(var(--item-height, 40px) + var(--item-gap, 1rem))" : "unset")};
  }

  ${mediaQueries.md} {
    grid-auto-flow: column;
  }

  li {
    align-items: center;
    display: grid;
    gap: var(--item-gap, 1rem);
    scroll-snap-align: start;

    ${mediaQueries.smDown} {
      grid-auto-flow: column;
    }

    ${mediaQueries.md} {
      grid-auto-flow: ${props =>
        props.orientation === "horizontal" ? "column" : "row"};
      justify-items: ${props =>
        props.orientation === "horizontal" ? "start" : "center"};
      text-align: ${props =>
        props.orientation === "horizontal" ? "left" : "center"};
    }
  }

  .title {
    margin: unset;
  }

  .icon {
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    height: var(--item-height, 40px);
    width: var(--item-height, 40px);
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`
export const IconList: React.FC<IconListProps> = ({ items, ...props }) => (
  <IconListStyled {...props}>
    {items?.length &&
      items.map((item, index) => (
        <li key={index}>
          {item.icon && (
            <div className={clsx("icon", item.colour, item.icon)}>
              <span className="sr-only">{item.icon}</span>
            </div>
          )}
          <div>
            {item.title && <h3 className="title">{item.title}</h3>}
            {item.text}
          </div>
        </li>
      ))}
  </IconListStyled>
)
