import { themeGet } from "@styled-system/theme-get"
// import type { Dispatch, SetStateAction } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import {
  color,
  compose,
  grid,
  layout,
  position,
  space,
  ColorProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

const QuickSearchStyled = styled.div`
  align-items: center;
  background-color: ${themeGet("colors.background", "white")};
  display: grid;
  padding: ${props => props.theme.space[2]}px;

  ${compose(color, grid, layout, position, space)}
`

const ResultsStyled = styled.ul`
  align-items: center;
  display: grid;
  list-style: none;
  margin: 0;

  li {
    margin-block-end: 0;
  }
`

export type QuickSearchProps = ColorProps &
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
        .search(event.target.value, {})
        .map(({ ref }) => index.documentStore.getDoc(ref))
    )
  }

  return (
    <QuickSearchStyled {...props}>
      <input
        type="text"
        value={query}
        onChange={search}
        placeholder="Search site"
      />
      <ResultsStyled>
        {(results as SearchResult[]).map(page => (
          <li key={page.id}>
            {/* <img alt={page.title} src={page.image_url} /> */}
            <Link to={page.path}>{page.title}</Link>
          </li>
        ))}
      </ResultsStyled>
    </QuickSearchStyled>
  )
}
