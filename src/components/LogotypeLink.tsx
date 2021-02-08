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

import { ReactComponent as Logotype } from "../images/Logotype.svg"

import { home as homePath } from "../utils/paths"

const LogotypeLinkStyle = styled(Link)`
  text-align: center;

  ${compose(grid, layout, space)}
`

const LogotypeStyle = styled(Logotype)`
  height: 29px;
  width: auto;
`

export type LogotypeLinkProps = GridProps &
  LayoutProps &
  SpaceProps & {
    siteTitle: string
  }

export const LogotypeLink: React.FC<LogotypeLinkProps> = ({
  siteTitle,
  ...props
}) => (
  <LogotypeLinkStyle
    title={`Return to the ${siteTitle} homepage`}
    to={homePath}
    {...props}
  >
    <LogotypeStyle />
  </LogotypeLinkStyle>
)
