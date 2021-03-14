import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

import { mediaQueries } from "../theme"

const AnchorStyled = styled.a`
  background-color: ${props => (props.href ? themeGet("colors.lightgrey") : themeGet("colors.white"))};
  color: ${themeGet("colors.black")};
  font-size: var(--font-size-body, 13px);
  padding: ${themeGet("space.6")}px ${themeGet("space.7")}px;
  text-decoration: none;
  text-transform: uppercase;

  ${mediaQueries.md} {
    padding: ${themeGet("space.6")}px ${themeGet("space.9")}px;
  }

  &.current {
    font-weight: bold;
  }
`

const NavStyled = styled.nav`
  background-color: ${themeGet("colors.lightgrey")};
  display: grid;
  text-align: center;
  grid-auto-flow: column;
`

export const SiteSelector: React.FC = () => {
  return (
    <NavStyled>
      <AnchorStyled className={clsx("button--link", "current")}>
        La Perla Beauty
      </AnchorStyled>
      <AnchorStyled
        className={clsx("button--link")}
        href="https://laperla.com"
        rel="external"
      >
        La Perla Lingerie
      </AnchorStyled>
    </NavStyled>
  )
}
