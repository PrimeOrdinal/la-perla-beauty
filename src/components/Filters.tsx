import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { ReactComponent as Filter } from "../images/Filter.svg"

import { theme, mediaQueries } from "../theme"

import { ViewSelector } from "./ViewSelector"

const FilterSection = styled.section`
  align-items: center;
  border-bottom: ${theme.border.width} solid ${theme.border.color};
  display: flex;
  justify-content: space-between;
  padding-block-end: 1.25rem;

  svg {
    height: ${themeGet("space.5")}px;
    object-fit: contain;
  }
`

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
`
const StyledRefine = styled.div`
  ${theme.mediaQueries.md} {
    display: grid;
    grid-auto-flow: column;
    gap: ${themeGet("space.10")}px;
  }
  .product-count {
    display: none;
    ${mediaQueries.md} {
      display: block;
    }
  }
`

export const Filters = ({ productCount }) => {
  return (
    <FilterSection className="container">
      <ViewSelector />
      <StyledRefine>
        <StyledButton>
          <span>Refine</span>
          <Filter />
        </StyledButton>
        <span className="product-count">{productCount} Products</span>
      </StyledRefine>
    </FilterSection>
  )
}
