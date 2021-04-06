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

import "react-tabs/style/react-tabs.css"

export type MenuCategoryProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const MenuCategoryContainerStyled: React.FC<MenuCategoryProps> = styled.div`
  background-color: ${themeGet("colors.pink")};
  display: grid;
  overflow-x: auto;
  padding-block-end: ${themeGet("space.5")}px;
  padding-block-start: ${themeGet("space.5")}px;

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const MenuCategoryStyled: React.FC<MenuCategoryProps> = styled.nav`
  column-gap: ${themeGet("space.10")}px;
  display: inline-grid;
  grid-auto-flow: column;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};

  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }
`

export const MenuCategory: React.FC<MenuCategoryProps> = ({
  children,
  ...props
}) => (
  <MenuCategoryContainerStyled className="container" {...props}>
    <MenuCategoryStyled {...props}>{children}</MenuCategoryStyled>
  </MenuCategoryContainerStyled>
)
