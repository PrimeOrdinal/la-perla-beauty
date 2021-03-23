import type {
  Colour as ColourProp,
  Icon as IconProp,
} from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React, { useRef } from "react"
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

import { useMediaQuery } from "../hooks/useMediaQuery"

import { colourClasses } from "../styles/colourClasses"
import { iconClasses } from "../styles/iconClasses"

import { mediaQueries } from "../theme"

import { Carousel } from "./Carousel"

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
    mobileView: "stack" | "swipe"
    orientation: "horizontal" | "vertical"
  }

export const IconListStyled: React.FC<IconListProps> = styled.div`
  --item-height: 40px;

  display: grid;
  gap: ${themeGet("space.4")}px;

  ${colourClasses}
  ${iconClasses}

  ${mediaQueries.smDown} {
    max-height: ${props =>
      props.mobileView == "stack" ? "var(--item-height, 40px)" : "unset"};
  }

  ${mediaQueries.md} {
    grid-auto-flow: column;
  }

  /*
  .carousel {
    height: var(--item-height, 40px);
  }
  */

  .item {
    align-content: center;
    align-items: center;
    display: grid;
    gap: 1rem;
    justify-content: start;
    scroll-snap-align: start;

    ${mediaQueries.smDown} {
      grid-auto-flow: column;
    }

    ${mediaQueries.md} {
      grid-auto-flow: ${props =>
        props.orientation === "horizontal" ? "column" : "row"};
      justify-content: ${props =>
        props.orientation === "horizontal" ? "start" : "center"};
      justify-items: center;
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
export const IconList: React.FC<IconListProps> = props => {
  const isMobile = useMediaQuery(mediaQueries.smDown)

  const items = props.items?.map((item, index) => (
    <div className="item" key={index}>
      {item.icon && (
        <div className={clsx("icon", item.colour, item.icon)}>
          <span className="sr-only">{item.icon}</span>
        </div>
      )}
      <div>
        {item.title && <h3 className="title">{item.title}</h3>}
        {item.text}
      </div>
    </div>
  ))

  return (
    <IconListStyled {...props}>
      {isMobile && props.mobileView === "swipe" ? (
        <Carousel className="carousel" orientation="vertical" showPickers>
          {items}
        </Carousel>
      ) : (
        items
      )}
    </IconListStyled>
  )
}
