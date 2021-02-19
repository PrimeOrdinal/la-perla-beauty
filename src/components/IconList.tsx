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
export type IconListProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: Array<{
      color: "red" | "green" | "blue"
      heading: string
      icon: "diamond" | "heart"
      body: React.ReactNode
    }>
    orientation: "horizontal" | "vertical"
  }
export const IconListStyled: React.FC<IconListProps> = styled.ul`
  display: grid;
  grid-auto-flow: ${props =>
    props.orientation === "horizontal" ? "column" : "row"};
  .icon {
    &.diamond {
      background-image: url("diamond.svg");
    }
    &.heart {
      background-image: url("heart.svg");
    }
    &.red {
      background-color: #ff0000;
    }
    &.green {
      background-color: #00ff00;
    }
    &.blue {
      background-color: #0000ff;
    }
  }
  ${compose(layout, position, space)}
`
export const IconList: React.FC<IconListProps> = ({ items, ...props }) => (
  <IconListStyled {...props}>
    {items?.length &&
      items.map((item, index) => (
        <li key={index}>
          {item.icon && (
            <div className={clsx("icon", item.color, item.icon)}>
              {item.icon}
            </div>
          )}
          {item.heading && <h3>{item.heading}</h3>}
          {item.body}
        </li>
      ))}
  </IconListStyled>
)
