import React from "react"
import ModalOverlay from "./ModalOverlay"

import styled from "styled-components"
import {
  compose,
  grid,
  layout,
  space,
  GridProps,
  LayoutProps,
  SpaceProps,
} from "styled-system"

import { ListPlain } from "./ListPlain"

export const MenuStoreStyled = styled(ListPlain)`
  ${compose(grid, layout, space)}
`

export type MenuStoreProps = GridProps & LayoutProps & SpaceProps

export const MenuStore: React.FC<MenuStoreProps> = props => (
  <MenuStoreStyled {...props}>
    <li>
      <ModalOverlay />
    </li>
  </MenuStoreStyled>
)
