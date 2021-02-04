import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

const StyledA = styled.a`
  background-color: ${props => (props.href ? "white" : "grey")};
  color: ${props => (props.href ? "grey" : "white")};
  font-size: ${themeGet("fontSizes.body")}rem;
  padding: ${themeGet("space.5")}rem ${themeGet("space.8")}rem;
  text-decoration: none;
  text-transform: uppercase;
`

const StyledNav = styled.nav`
  background-color: #efeee9;
  display: grid;
  text-align: center;
  grid-auto-flow: column;
`

export const SiteSelector: React.FC = () => {
  return (
    <StyledNav className="site-selector">
      <StyledA
        id="site-link--lingerie"
        className={clsx("button--link")}
        href="https://laperla.com"
      >
        Lingerie
      </StyledA>
      <StyledA
        id="site-link--beauty"
        className={clsx("button--link", "current")}
      >
        Beauty
      </StyledA>
    </StyledNav>
  )
}
