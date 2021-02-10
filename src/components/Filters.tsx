import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { ReactComponent as Filter } from "../images/Filter.svg"

import { theme } from "../theme"

import { ViewSelector } from "./ViewSelector"

const FilterSection = styled.section`
  align-items: center;
  border-bottom: ${theme.border.width} solid ${theme.border.color};
  display: flex;
  justify-content: space-between;
  padding-block-end: 1.25rem;

  .view {
    align-items: center;
    display: flex;
    gap: 1rem;
  }

  svg {
    height: ${themeGet("space.5")}px;
    object-fit: contain;
  }
`

export const Filters = ({productCount}) => {
  return (
    <FilterSection className="container">
      <ViewSelector />
      <div className="view">
        <button>
          <span>Refine</span>
          <Filter />
        </button>
        <span>{productCount} Products</span>
      </div>
    </FilterSection>
  )
}
