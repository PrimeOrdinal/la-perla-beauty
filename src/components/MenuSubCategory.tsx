import { themeGet } from "@styled-system/theme-get"
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

import "react-tabs/style/react-tabs.css"

export type MenuSubCategoryProps = LayoutProps & PositionProps & SpaceProps & VariantProps

export const MenuSubCategoryContainerStyled: React.FC<MenuSubCategoryProps> = styled.div`
  background-color: ${themeGet("colors.pink")};
  display: grid;
  overflow-x: auto;
  padding: ${themeGet("space.5")}px;

  ${compose(layout, position, space)}
`

export const MenuSubCategoryStyled: React.FC<MenuSubCategoryProps> = styled.nav`
  column-gap: ${themeGet("space.10")}px;
  display: inline-grid;
  grid-auto-flow: column;
  justify-content: center;
  padding-inline-end: ${themeGet("space.5")}px;
  padding-inline-start: ${themeGet("space.5")}px;

  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }
`

export const MenuSubCategory: React.FC<MenuSubCategoryProps> = ({ children, ...props }) => (
  <MenuSubCategoryContainerStyled {...props}>
    <MenuSubCategoryStyled>{children}</MenuSubCategoryStyled>
  </MenuSubCategoryContainerStyled>
)
