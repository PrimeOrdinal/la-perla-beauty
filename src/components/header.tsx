import React, { ReactElement } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes, { InferProps } from "prop-types"

type CategoryEdgeProps = {
  node: {
    custom_url: {
      url: string
    }
    description: string
    id: string
    is_visible: boolean
    meta_description: string
    meta_keywords: string[]
    name: string
    page_title: string
    parent_id: string
    search_keywords: string[]
  }
}

type HeaderData = {
  allBigCommerceCategories: {
    edges: CategoryEdgeProps[]
  }
}

export const Header = (
  { showDividers, showTitles }: InferProps<typeof Header.propTypes> = {
    showDividers: false,
    showTitles: false,
  }
): ReactElement => {
  const data: HeaderData = useStaticQuery(graphql`
    query Header {
      allBigCommerceCategories {
        edges {
          node {
            custom_url {
              url
            }
            description
            id
            is_visible
            meta_description
            meta_keywords
            name
            page_title
            parent_id
            search_keywords
          }
        }
      }
    }
  `)

  return (
    <header>
      <Link to="/">Go back to the homepage</Link>
      <ul>
        {data.allBigCommerceCategories.edges.map(({ node }, index) => (
          <li key={index}>
            <a href={node.custom_url.url}>{node.name}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}

Header.propTypes = {
  showDividers: PropTypes.bool,
  showTitles: PropTypes.bool,
}

export default Header
