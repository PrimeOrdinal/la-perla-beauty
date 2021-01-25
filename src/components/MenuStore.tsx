import { Link } from "gatsby"
import React from "react"

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

export const MenuStoreStyle = styled(ListPlain)`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  justify-content: end;
  padding: ${props => props.theme.space[2]}px;

  ${compose(grid, layout, space)}
`

type MenuStoreProps = GridProps & LayoutProps & SpaceProps

export const MenuStore: React.FC<MenuStoreProps> = props => (
  <MenuStoreStyle {...props}>
    <li>
      <Link to={"/"}>Item</Link>
    </li>
    <li>
      <Link to={"/"}>Item</Link>
    </li>
    <li>
      <Link to={"/"}>Item</Link>
    </li>
  </MenuStoreStyle>
)
