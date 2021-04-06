import { themeGet } from "@styled-system/theme-get"
// import type { Dispatch, SetStateAction } from "react"
import { Index } from "elasticlunr"
import React, { useState } from "react"
import styled from "styled-components"
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { Link } from "./Button"

const QuickSearchStyled = styled.div`
  ${compose(color, flexbox, grid, layout, position, space)}
`

const InputContainerStyled = styled.div`
  align-items: center;
  background-color: ${themeGet("colors.background", "white")};
  border-bottom-left-radius: ${themeGet("radii.4")}px;
  border-bottom-right-radius: ${themeGet("radii.4")}px;
  display: grid;
  left: 10%;
  padding: ${themeGet("space.4")}px ${themeGet("space.8")}px;
  position: absolute;
  top: var(--header-min-height, 38px);
  width: 80%;
  z-index: 101;

  input {
    border-block-start-style: none;
    border-inline-style: none;
    border-radius: unset;
    margin: ${themeGet("space.2")}px;
  }
`

const ResultsContainerStyled = styled.div`
  background-color: ${themeGet("colors.background", "white")};
  bottom: 0;
  left: 0;
  padding-block-start: var(--header-min-height, 38px);
  position: fixed;
  right: 0;
  top: var(--header-min-height, 38px);
  z-index: 100;

  ul {
    align-items: center;
    display: grid;
    list-style: none;
    margin: ${themeGet("space.2")}px;
    width: 100%;
  
    li {
      margin-block-end: unset;
    } 
  }
`

export type QuickSearchProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    searchIndex: Record<string, unknown>
  }

export const QuickSearch: React.FC<QuickSearchProps> = ({
  searchIndex,
  ...props
}) => {
  const [query, setQuery] = useState("")
  // const [results, setResults]: [results: SearchResult[], setResults: Dispatch<SetStateAction<SearchResult[]>>] = useState([])
  const [results, setResults] = useState([])
  const [index] = useState(Index.load(searchIndex))

  const search = event => {
    setQuery(event.target.value)
    setResults(
      index
        .search(event.target.value, { expand: true })
        .map(({ ref }) => index.documentStore.getDoc(ref))
    )
  }

  console.log("results", results)

  return (
    <QuickSearchStyled {...props}>
      <InputContainerStyled>
        <input
          id="quick-search"
          onChange={search}
          placeholder="Search site"
          type="text"
          value={query}
        />
      </InputContainerStyled>
      {results?.length > 0 && <ResultsContainerStyled>
        {(results as SearchResult[]).map(page => {
          return (
            <li key={page.id}>
              <img alt={page.image?.alt} src={page.image?.src} />
              <Link to={page.path}>{page.title}</Link>
            </li>
          )
        })}
      </ResultsContainerStyled>}
    </QuickSearchStyled>
  )
}
