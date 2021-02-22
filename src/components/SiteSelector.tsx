import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

const AnchorStyled = styled.a`
  background-color: ${props => (props.href ? "white" : "grey")};
  color: ${props => (props.href ? "grey" : "white")};
  font-size: var(--font-size-body, 13px);
  padding: ${themeGet("space.6")}px ${themeGet("space.9")}px;
  text-decoration: none;
  text-transform: capitalize;
  &.current {
    font-weight: 600;
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
      <AnchorStyled
        className={clsx("button--link")}
        href="https://laperla.com"
        rel="external"
      >
        La Perla Lingerie
      </AnchorStyled>
      <AnchorStyled className={clsx("button--link", "current")}>
        La Perla Beauty
      </AnchorStyled>
    </NavStyled>
  )
}
