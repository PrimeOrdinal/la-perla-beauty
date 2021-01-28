import { Link } from "gatsby"
import React from "react"
import UKFlag from "../images/UKFlag.svg"
import DownArrow from "../images/DownArrow.svg"

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
  gap: 0.5rem;
  grid-auto-flow: row;
  justify-content: start;
  align-items: center;
  padding: ${props => props.theme.space[2]}px;
  li {
    a {
      text-decoration: none;
    }
  }

  ${compose(grid, layout, space)}
`

export type MenuStoreProps = GridProps & LayoutProps & SpaceProps

export const MenuStore: React.FC<MenuStoreProps> = props => (
  <MenuStoreStyle {...props}>
    <li>
      <Link to={"/"}>
        <UKFlag />
      </Link>
    </li>
    <li>
      <Link to={"/"}>UK</Link>
    </li>
    <li>
      <Link to={"/"}>
        <DownArrow />
      </Link>
    </li>
  </MenuStoreStyle>
)
