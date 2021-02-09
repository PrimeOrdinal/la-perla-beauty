import React from "react"
import styled from "styled-components"

import { ReactComponent as Filter } from "../images/Filter.svg"
import { ReactComponent as Grid } from "../images/Grid.svg"
import { ReactComponent as List } from "../images/List.svg"

const FilterSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block-end: 1rem;
  .view {
    display: flex;
    gap: 1rem;
    align-items: center;
    span {
      text-transform: uppercase;
    }
    svg {
      height: 16px;
      object-fit: contain;
      cursor: pointer;
    }
  }
`

const Filters = () => {
  return (
    <FilterSection className="container">
      <div className="view">
        <span>Grid</span>
        <Grid />
        <span>List</span>
        <List />
      </div>
      <div className="view">
        <span>Refine</span>
        <Filter />
        <span>14 Products</span>
      </div>
    </FilterSection>
  )
}

export default Filters
