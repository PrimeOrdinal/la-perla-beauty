import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

const AnchorStyled = styled.a`
  background-color: ${props => (props.href ? "white" : "grey")};
  color: ${props => (props.href ? "grey" : "white")};
  font-size: ${themeGet("fontSizes.body")}px;
  padding: ${themeGet("space.6")}px ${themeGet("space.9")}px;
  text-decoration: none;
  text-transform: uppercase;
`

const NavStyled = styled.nav`
  background-color: #efeee9;
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
      >
        Lingerie
      </AnchorStyled>
      <AnchorStyled
        className={clsx("button--link", "current")}
      >
        Beauty
      </AnchorStyled>
    </NavStyled>
  )
}
