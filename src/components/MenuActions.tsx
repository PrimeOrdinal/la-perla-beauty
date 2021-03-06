import { themeGet } from "@styled-system/theme-get"
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

import { ReactComponent as Basket } from "../../static/icons/Basket.svg"
import { ReactComponent as Profile } from "../../static/icons/Profile.svg"
import { ReactComponent as Search } from "../../static/icons/Search.svg"

import { mediaQueries } from "../theme"

import { Link } from "./Button"
import { ListPlain } from "./ListPlain"

import {
  bag as bagPath,
  myAccount as myAccountPath,
  search as searchPath,
} from "../utils/paths"

export const MenuActionsStyle = styled(ListPlain)`
  align-items: center;
  display: grid;
  gap: ${themeGet("space.4")}px;
  grid-auto-flow: column;
  justify-content: end;

  ${mediaQueries.md} {
    gap: ${themeGet("space.7")}px;
    padding: ${themeGet("space.2")}px;
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
    }

    &.profile {
      display: none;

      ${mediaQueries.md} {
        display: block;
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
    <li className="profile">
      <Link to={myAccountPath}>
        <Profile />
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
