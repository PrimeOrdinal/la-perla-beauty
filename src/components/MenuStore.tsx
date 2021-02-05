import { Link } from "gatsby"
import React from "react"
import { ReactComponent as DownArrow } from "../images/DownArrow.svg"
import { ReactComponent as UKFlag } from "../images/UKFlag.svg"

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
  align-items: center;
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: row;
  justify-content: start;

  li {
    a {
      text-decoration: none;

      svg {
        object-fit: contain;
      }
    }
  }

  ${compose(grid, layout, space)}
`

export const DownArrowStyled = styled(DownArrow)`
  height: 10px;
`

export const UKFlagStyled = styled(UKFlag)`
  height: 20px;
`

export type MenuStoreProps = GridProps & LayoutProps & SpaceProps

export const MenuStore: React.FC<MenuStoreProps> = props => (
  <MenuStoreStyled {...props}>
    <li>
      <Link to={"/"}>
        <UKFlagStyled />
      </Link>
    </li>
    <li>
      <Link to={"/"}>UK</Link>
    </li>
    <li>
      <Link to={"/"}>
        <DownArrowStyled />
      </Link>
    </li>
  </MenuStoreStyled>
)
