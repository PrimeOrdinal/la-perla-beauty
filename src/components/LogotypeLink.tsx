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

import { ReactComponent as Logotype } from "../../static/icons/Logotype.svg"

import { mediaQueries } from "../theme"

import { home as homePath } from "../utils/paths"

import { Link } from "./Button"

const LogotypeLinkStyled = styled(Link)`
  text-align: center;

  ${compose(grid, layout, space)}
`

const LogotypeStyled = styled(Logotype)`
  height: 20px;
  width: auto;

  ${mediaQueries.md} {
    height: 30px;
  }

  ${compose(grid, layout, space)}
`

export type LogotypeLinkProps = GridProps &
  LayoutProps &
  SpaceProps & React.HTMLProps<HTMLAnchorElement> &{
    siteTitle: string
  }

export const LogotypeLink: React.FC<LogotypeLinkProps> = ({ siteTitle, ...props }) => (
  <LogotypeLinkStyled
    title={`Return to the ${siteTitle} homepage`}
    to={homePath}
    {...props}
  >
    <LogotypeStyled />
  </LogotypeLinkStyled>
)
