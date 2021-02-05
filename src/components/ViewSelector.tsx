import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

import { ReactComponent as Grid } from "../images/Grid.svg"
import { ReactComponent as List } from "../images/List.svg"

const StyledButton = styled.button`
  align-items: center;
  display: grid;
  font-size: ${themeGet("fontSizes.body")}px;
  gap: 1rem;
  grid-auto-flow: column;
  padding: ${themeGet("space.6")}px ${themeGet("space.9")}px;
  text-transform: uppercase;

  svg {
    width: ${themeGet("space.7")}px
  }
`

const ContainerStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
`

export const ViewSelector: React.FC = () => {
  return (
    <ContainerStyled>
      <StyledButton className={clsx("button--link")} grid>Grid<Grid /></StyledButton>
      <StyledButton className={clsx("button--link", "current")} list>List<List />
      </StyledButton>
    </ContainerStyled>
  )
}
