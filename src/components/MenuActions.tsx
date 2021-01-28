import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch"
import { FaUser } from "@react-icons/all-files/fa/FaUser"
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

import {
  bag as bagPath,
  myAccount as myAccountPath,
  search as searchPath,
} from "../utils/paths"

export const MenuActionsStyle = styled(ListPlain)`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  justify-content: end;
  padding: ${props => props.theme.space[2]}px;

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
        <FaSearch />
      </Link>
    </li>
    <li>
      <Link to={myAccountPath}>
        <FaUser />
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
        <FaBriefcase />
      </Link>
    </li>
  </MenuActionsStyle>
)
