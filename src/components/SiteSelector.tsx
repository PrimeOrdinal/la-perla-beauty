import clsx from "clsx"
import { InferProps } from "prop-types"
import React, { ReactElement } from "react"
import styled from "@emotion/styled"

const StyledA = styled.a`
  background-color: ${props => (props.href ? "white" : "grey")};
  color: ${props => (props.href ? "grey" : "white")};
  padding: 0.25rem 1rem;
  text-decoration: none;
`

const StyledNav = styled.nav`
  background-color: #efeee9;
  display: grid;
  text-align: center;
  grid-auto-flow: column;
`

export const SiteSelector = ({}: InferProps<
  typeof SiteSelector.propTypes
> = {}): ReactElement => {
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

SiteSelector.propTypes = {}

export default SiteSelector
