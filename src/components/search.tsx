import { Index } from "elasticlunr"
import { Link } from "gatsby"
import PropTypes, { InferProps } from "prop-types"
import React, { ReactElement, useState } from "react"
import styled from "styled-components"

type Page = {
  id: string
  path: string
  title: string
  tags: string[]
}

const StyledResults = styled.ul`
  align-items: center;
  display: grid;
  list-style: none;
  margin: 0;

  li {
    margin-block-end: 0;
  }
`;

export const Search = (
  { searchIndex }: InferProps<typeof Search.propTypes> = {
    searchIndex: {
      index: {},
    },
  }
): ReactElement => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [index, setIndex] = useState(Index.load(searchIndex))

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
      <input type="text" value={query} onChange={search} placeholder="Search site" />
      <StyledResults>
        {results.map((page: Page) => (
          <li key={page.id}>
            <Link to={page.path}>{page.title}</Link>
          </li>
        ))}
      </StyledResults>
    </React.Fragment>
  )
}

Search.propTypes = {
  searchIndex: PropTypes.object,
}

export default Search
