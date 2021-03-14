import type { SetStateAction } from "react"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

import { ReactComponent as Grid } from "../../static/icons/Grid.svg"
import { ReactComponent as List } from "../../static/icons/List.svg"

import { mediaQueries } from "../theme"

import { Button } from "./Button"

const ViewSelectorStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: ${themeGet("space.4")}px;

  ${mediaQueries.md} {
    gap: ${themeGet("space.8")}px;
  }

  .button {
    padding: ${themeGet("space.4")}px ${themeGet("space.4")}px;

    ${mediaQueries.md} {
      padding: ${themeGet("space.4")}px ${themeGet("space.6")}px;
    }
  }
`

export type ViewSelectorProps = React.HTMLAttributes<HTMLElement> & {
  setView: React.Dispatch<SetStateAction<string>>
  view: "grid" | "list"
}

export const ViewSelector: React.FC<ViewSelectorProps> = ({
  setView,
  ...props
}) => (
  <ViewSelectorStyled {...props}>
    <Button
      active={props.view === "grid" ? "active" : "inactive"}
      className={clsx("button", "grid")}
      onClick={() => setView("grid")}
    >
      Grid
      <Grid />
    </Button>
    <Button
      active={props.view === "list" ? "active" : "inactive"}
      className={clsx("button", "list")}
      onClick={() => setView("list")}
    >
      List
      <List />
    </Button>
  </ViewSelectorStyled>
)
