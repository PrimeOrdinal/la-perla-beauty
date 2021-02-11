import { themeGet } from "@styled-system/theme-get"
import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
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

export const TabsStyled: React.FC<TabsProps> = styled(Tabs)`
  background-color: ${themeGet("colors.pink")};
  column-gap: ${themeGet("space.10")}px;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  padding: ${themeGet("space.5")}px;

  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
  }

  ${compose(layout, position, space)}
`

const CustomTabs: React.FC<TabsProps> = ({ children, ...props }) => (
  <TabsStyled {...props}>{children}</TabsStyled>
)

export { CustomTabs as Tabs }
