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

import { ReactComponent as Basket } from "../images/Basket.svg"
import { ReactComponent as Profile } from "../images/Profile.svg"
import { ReactComponent as Search } from "../images/Search.svg"

import { mediaQueries } from "../theme"

import { ListPlain } from "./ListPlain"

import {
  bag as bagPath,
  myAccount as myAccountPath,
  search as searchPath,
} from "../utils/paths"

export const MenuActionsStyle = styled(ListPlain)`
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: column;
  justify-content: end;
  padding: ${props => props.theme.space[2]}px;
  align-items: center;
  li {
    a {
      svg {
        height: 20px;
        object-fit: contain;
      }
      .profile {
        display: none;

        ${mediaQueries.md} {
          display: block;
        }
      }
    }
  }

  ${compose(grid, layout, space)}
`

export type MenuActionsProps = GridProps &
  LayoutProps &
  SpaceProps & {
    toggleMiniBagVisibility: React.DispatchWithoutAction
    toggleQuickSearchVisibility: React.DispatchWithoutAction
  }

export const MenuActions: React.FC<MenuActionsProps> = ({
  toggleMiniBagVisibility,
  toggleQuickSearchVisibility,
  ...props
}) => (
  <MenuActionsStyle {...props}>
    <li>
      <Link
        to={searchPath}
        onClick={event => {
          // TODO: Only intercept link on desktop
          toggleQuickSearchVisibility()
          event?.preventDefault()
        }}
      >
        <Search />
      </Link>
    </li>
    <li>
      <Link to={myAccountPath}>
        <Profile className="profile" />
      </Link>
    </li>
    <li>
      <Link
        to={bagPath}
        onClick={event => {
          // TODO: Only intercept link on desktop
          toggleMiniBagVisibility()
          event?.preventDefault()
        }}
      >
        <Basket />
      </Link>
    </li>
  </MenuActionsStyle>
)
