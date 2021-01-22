import type { HeaderQuery } from "../../graphql-types"

import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import { MenuActions } from "./MenuActions"

import { useHover } from "../hooks/useHover"

import Logo from "../images/logo.svg"

import { Search } from "./Search"

const StyledHeader = styled.header`
  background-color: #ffffff;
  display: grid;
  grid-template-areas: "menu-primary logo menu-secondary" "menu-main menu-main menu-main" "search search search";
  grid-template-columns: 1fr 2fr 1fr;
  padding-block-end: 1rem;
  padding-block-start: 1rem;
  position: sticky;
  text-align: center;
`

const StyledLogo = styled(Logo)`
  height: 40px;
`

const StyledLogoLink = styled(Link)`
  grid-area: logo;
`

const StyledMenu = styled.ul`
  align-items: center;
  display: grid;
  list-style: none;
  margin: 0;

  li {
    margin-block-end: 0;
  }
`

const StyledMenuPrimary = styled(StyledMenu)`
  grid-auto-flow: column;
  grid-area: menu-primary;
`

const StyledMenuMain = styled.div`
  grid-area: menu-main;
`

const StyledMenuMainExpanded = styled.div`
  display: ${props => (props.active ? "block" : "none")};
  padding-block-end: 1rem;
  padding-block-start: 1rem;
`

const StyledMenuMainExpandedList = styled(StyledMenu)`
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
`

const StyledMenuMainHeadings = styled(StyledMenu)`
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  padding-block-end: 1rem;
  padding-block-start: 1rem;
`

const StyledSearchContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-area: search;
  padding: 1rem;
`

// type HeaderQuery = {
//   allBigCommerceCategories: {
//     edges: CategoryEdgeProps[]
//   }
//   siteSearchIndex: {
//     index: Record<string, unknown>
//   }
// }

export type HeaderProps = {
  siteTitle?: string
}
export const Header: React.FC<HeaderProps> = (
  { siteTitle } = {
    siteTitle: "Site Title",
  }
) => {
  const data: HeaderQuery = useStaticQuery(graphql`
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
      siteSearchIndex {
        index
      }
    }
  `)

  const [hoverRef, isHovered] = useHover()

  return (
    <StyledHeader ref={hoverRef}>
      <StyledLogoLink title={`Go back to the homepage for ${siteTitle}`} to="/">
        <StyledLogo />
      </StyledLogoLink>
      <StyledMenuPrimary>
        <li>
          <a href="/">Item 1</a>
        </li>
        <li>
          <a href="/">Item 2</a>
        </li>
        <li>
          <a href="/">Item 3</a>
        </li>
      </StyledMenuPrimary>
      <MenuActions
        css={{
          gridArea: "menu-secondary",
        }}
      />
      <StyledMenuMain>
        <StyledMenuMainHeadings>
          <li>
            <Link to="/products/">Products</Link>
          </li>
          <li>
            <a href="/">Category 2</a>
          </li>
          <li>
            <a href="/">Category 3</a>
          </li>
          <li>
            <a href="/">Category 4</a>
          </li>
        </StyledMenuMainHeadings>
        <StyledMenuMainExpanded active={isHovered}>
          <StyledMenuMainExpandedList>
            {data.allBigCommerceCategories.edges.map(({ node }, index) => (
              <li key={index}>
                <a href={node?.custom_url?.url as string | undefined}>{node.name}</a>
              </li>
            ))}
          </StyledMenuMainExpandedList>
        </StyledMenuMainExpanded>
      </StyledMenuMain>
      <StyledSearchContainer>
        <Search searchIndex={data?.siteSearchIndex?.index} />
      </StyledSearchContainer>
    </StyledHeader>
  )
}
