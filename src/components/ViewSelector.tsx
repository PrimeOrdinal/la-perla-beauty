import type { SetStateAction } from "react"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

import { ReactComponent as Grid } from "../images/Grid.svg"
import { ReactComponent as List } from "../images/List.svg"

import { mediaQueries } from "../theme"

import { Button } from "./Button"

const ViewSelectorStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: ${themeGet("space.4")}px;

  ${mediaQueries.md} {
    gap: ${themeGet("space.10")}px;
  }

  .button {
    padding: ${themeGet("space.4")}px ${themeGet("space.4")}px;

    ${mediaQueries.md} {
      padding: ${themeGet("space.4")}px ${themeGet("space.6")}px;
    }
  }
`

export type ViewSelectorProps = {
  setView: React.Dispatch<SetStateAction<string>>
  view: "grid" | "list"
}

export const ViewSelector: React.FC<ViewSelectorProps> = ({
  setView,
  view,
  ...props
}) => {
  return (
    <ViewSelectorStyled {...props}>
      <Button
        active={view === "grid" ? "active" : undefined}
        className={clsx("button")}
        grid
        onClick={() => setView("grid")}
      >
        Grid
        <Grid />
      </Button>
      <Button
        active={view === "list" ? "active" : undefined}
        className={clsx("button")}
        list
        onClick={() => setView("list")}
      >
        List
        <List />
      </Button>
    </ViewSelectorStyled>
  )
}
