// import type { Dispatch, SetStateAction } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

const StyledResults = styled.ul`
  align-items: center;
  display: grid;
  list-style: none;
  margin: 0;

  li {
    margin-block-end: 0;
  }
`

export type SearchProps = {
  searchIndex: Record<string, unknown>
}

export const Search: React.FC<SearchProps> = ({ searchIndex }) => {
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
    <React.Fragment>
      <input
        type="text"
        value={query}
        onChange={search}
        placeholder="Search site"
      />
      <StyledResults>
        {(results as SearchResult[]).map(page => (
          <li key={page.id}>
            {/* <img alt={page.title} src={page.image_url} /> */}
            <Link to={page.path}>{page.title}</Link>
          </li>
        ))}
      </StyledResults>
    </React.Fragment>
  )
}
