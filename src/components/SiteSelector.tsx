import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  background-color: #efeee9;
  display: grid;
  text-align: center;
  grid-auto-flow: column;

  a {
    background-color: ${props => (props.href ? "white" : "grey")};
    color: ${props => (props.href ? "grey" : "white")};
    font-size: ${themeGet("fontSizes.body")}px;
    padding: ${themeGet("space.5")}px ${themeGet("space.8")}px;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const SiteSelector: React.FC = () => {
  return (
    <StyledNav className="site-selector">
      <a
        id="site-link--lingerie"
        className={clsx("button--link")}
        href="https://laperla.com"
      >
        Lingerie
      </a>
      <a
        id="site-link--beauty"
        className={clsx("button--link", "current")}
      >
        Beauty
      </a>
    </StyledNav>
  )
}
