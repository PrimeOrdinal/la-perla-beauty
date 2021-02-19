import { Link } from "./Button"
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

import { ReactComponent as Logotype } from "../images/Logotype.svg"

import { mediaQueries } from "../theme"

import { home as homePath } from "../utils/paths"

const LogotypeLinkStyled = styled(Link)`
  text-align: center;

  ${compose(grid, layout, space)}
`

const LogotypeStyle = styled(Logotype)`
  height: 20px;
  width: auto;

  ${mediaQueries.md} {
    height: 30px;
  }

  ${compose(grid, layout, space)}
`

export type LogotypeLinkProps = GridProps &
  LayoutProps &
  SpaceProps & {
    siteTitle: string
  }

export const LogotypeLink: React.FC<LogotypeLinkProps> = ({ siteTitle }) => (
  <LogotypeLinkStyled
    title={`Return to the ${siteTitle} homepage`}
    to={homePath}
  >
    <LogotypeStyle />
  </LogotypeLinkStyled>
)
