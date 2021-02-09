import { themeGet } from "@styled-system/theme-get"
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
  align-items: center;
  display: grid;
  gap: ${themeGet("space.3")}px;
  grid-auto-flow: column;
  justify-content: end;
  padding: ${themeGet("space.2")}px;

  ${mediaQueries.md} {
    gap: ${themeGet("space.7")}px;
  }

  li {
    a {
      align-items: center;
      display: grid;

      svg {
        height: 18px;
        object-fit: contain;
        object-position: center;
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
