import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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

import 'react-tabs/style/react-tabs.css';

export type TabsProps = 
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const TabsStyled: React.FC<TabsProps> = styled(Tabs)`
  column-gap: 2rem;  
  display: grid;
  grid-template-columns: repeat(6,1fr);
  justify-items: start;

  ${compose(layout, position, space)}
`

const CustomTabs: React.FC<TabsProps> = props => (
  <TabsStyled {...props} className="form-field">
    <div></div>
  </TabsStyled>
)

export {CustomTabs as Tabs}