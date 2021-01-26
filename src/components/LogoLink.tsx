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

import Logo from "../images/logo.svg"

import { home as homePath } from "../utils/paths"

const LogoStyle = styled(Logo)`
  height: 40px;
  width: auto;
`

const LogoLinkStyle = styled(Link)`
  ${compose(grid, layout, space)}
`

export type LogoLinkProps = GridProps &
  LayoutProps &
  SpaceProps & {
    siteTitle: string
  }

export const LogoLink: React.FC<LogoLinkProps> = ({ siteTitle, ...props }) => (
  <LogoLinkStyle
    title={`Return to the ${siteTitle} homepage`}
    to={homePath}
    {...props}
  >
    <LogoStyle />
  </LogoLinkStyle>
)
