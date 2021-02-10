import React from "react"
import styled from "styled-components"
import { mediaQueries, theme } from "../theme"

import { ReactComponent as Filter } from "../images/Filter.svg"
import { ReactComponent as Grid } from "../images/Grid.svg"
import { ReactComponent as List } from "../images/List.svg"

const FilterSection = styled.section`
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block-end: 1.25rem;
    border-bottom: ${theme.border.width} solid ${theme.border.color};
    .view {
      display: flex;
      gap: 1rem;
      align-items: center;
      span {
        text-transform: uppercase;
        &:last-child {
          display: none;
          ${mediaQueries.md} {
            display: block;
          }
        }
      }
      button {
        padding: 0;
        svg {
          height: 16px;
          object-fit: contain;
          cursor: pointer;
        }
      }
    }
  }
`

const Filters = () => {
  return (
    <FilterSection className="container">
      <div className="wrap">
        <div className="view">
          <span>Grid</span>
          <button>
            <Grid />
          </button>
          <span>List</span>
          <button>
            <List />
          </button>
        </div>
        <div className="view">
          <span>Refine</span>
          <button>
            <Filter />
          </button>
          <span>14 Products</span>
        </div>
      </div>
    </FilterSection>
  )
}

export default Filters
