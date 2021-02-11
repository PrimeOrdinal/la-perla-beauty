import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React, { useState } from "react"
import styled from "styled-components"

import { ReactComponent as Grid } from "../images/Grid.svg"
import { ReactComponent as List } from "../images/List.svg"

import { mediaQueries } from "../theme"

const StyledButton = styled.button`
  align-items: center;
  display: grid;
  font-size: var(--font-size-body, 13px);
  gap: ${themeGet("space.3")}px;
  grid-auto-flow: column;
  text-transform: uppercase;
  padding: 0;
  ${mediaQueries.md} {
    gap: ${themeGet("space.4")}px;
  }

  svg {
    width: ${themeGet("space.7")}px;
  }

  svg,
  svg * {
    fill: ${props =>
      props.active
        ? themeGet("colors.darkgrey")
        : themeGet("colors.lightgrey")};
  }
`

const ContainerStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: ${themeGet("space.8")}px;

  ${mediaQueries.md} {
    gap: ${themeGet("space.10")}px;
  }
`

export const ViewSelector: React.FC = () => {
  const [view, setView] = useState("grid")

  return (
    <ContainerStyled>
      <StyledButton
        className={clsx("button--link")}
        onClick={() => setView("grid")}
        grid
        active={view === "grid" ? "active" : undefined}
      >
        Grid
        <Grid />
      </StyledButton>
      <StyledButton
        className={clsx("button--link")}
        onClick={() => setView("list")}
        list
        active={view === "list" ? "active" : undefined}
      >
        List
        <List />
      </StyledButton>
    </ContainerStyled>
  )
}
