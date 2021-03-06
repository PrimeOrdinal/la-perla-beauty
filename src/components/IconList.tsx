import type { Colour, Icon } from "../../types/theme"

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

import { colourClasses } from "../styles/colourClasses"
import { iconClasses } from "../styles/iconClasses"

export type IconListProps = GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: Array<{
      color: Colour
      heading: string
      icon: Icon
      body: React.ReactNode
    }>
    orientation: "horizontal" | "vertical"
  }

import { ListPlain } from "../components/ListPlain"

export const IconListStyled: React.FC<IconListProps> = styled(ListPlain)`
  display: grid;
  gap: ${themeGet("space.4")}px;
  grid-auto-flow: ${props =>
    props.orientation === "horizontal" ? "column" : "row"};
  justify-items: ${props =>
    props.orientation == "horizontal" ? "start" : "center"};
  .icon {
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }

  ${colourClasses}
  ${iconClasses}

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
