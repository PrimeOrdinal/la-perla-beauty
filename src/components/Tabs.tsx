import { themeGet } from "@styled-system/theme-get"
import React from "react"
import { Tabs } from "react-tabs"
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

export type TabsProps = LayoutProps & PositionProps & SpaceProps & VariantProps

export const TabsContainerStyled: React.FC<TabsProps> = styled.nav`
  background-color: ${themeGet("colors.pink")};
  display: grid;
  overflow-x: auto;
  padding: ${themeGet("space.5")}px;

  ${compose(layout, position, space)}
`

export const TabsStyled: React.FC<TabsProps> = styled(Tabs)`
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

const CustomTabs: React.FC<TabsProps> = ({ children, ...props }) => (
  <TabsContainerStyled {...props}>
    <TabsStyled>{children}</TabsStyled>
  </TabsContainerStyled>
)

export { CustomTabs as Tabs }
