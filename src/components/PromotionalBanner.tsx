import type { Colour as ColourProp, Link as LinkProp } from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
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

import { Link } from "./Button"

export type PromotionalBannerProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & LinkProp & {
    colour: ColourProp
  }

export const PromotionalBannerStyled: React.FC<PromotionalBannerProps> = styled.div`
  background-color: ${props => props.colour ? themeGet(`colors.${props.colour}`) : themeGet("colors.pink")};
  color: ${themeGet("colors.black")};
  display: grid;
  font-size: var(--font-size-body, 13px);
  text-align: center;
  grid-auto-flow: column;
  padding: ${themeGet("space.6")}px;
  text-transform: uppercase;

  a {
    color: inherit;
    text-decoration: none;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const PromotionalBanner: React.FC<PromotionalBannerProps> = (props) => (
  <PromotionalBannerStyled {...props}>
    <Link to={props.href}>{props.title}</Link>
  </PromotionalBannerStyled>
)
