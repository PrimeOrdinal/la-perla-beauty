import React, { ReactElement } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes, { InferProps } from "prop-types"
import styled from "styled-components"

import Logo from "../images/logo.svg"

import Search from "./Search"

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
  siteSearchIndex: {
    index: {}
  }
}

const StyledHeader = styled.header`
  background-color: #ffffff;
  display: grid;
  grid-template-areas: "menu-primary logo menu-secondary" "menu-main menu-main menu-main" "search search search";
  grid-template-columns: 1fr 2fr 1fr;
  padding-block-end: 1rem;
  padding-block-start: 1rem;
  position: sticky;
  text-align: center;
`;

const StyledLogo = styled(Logo)`
  height: 40px;
`;

const StyledLogoLink = styled(Link)`
  grid-area: logo;
`;

const StyledMenu = styled.ul`
  align-items: center;
  display: grid;
  list-style: none;
  margin: 0;

  li {
    margin-block-end: 0;
  }
`;

const StyledMenuPrimary = styled(StyledMenu)`
  grid-auto-flow: column;
  grid-area: menu-primary;
`;

const StyledMenuSecondary = styled(StyledMenu)`
  grid-auto-flow: column;
  grid-area: menu-secondary;
`;

const StyledMenuMain = styled.div`
  grid-area: menu-main;
`;

const StyledMenuMainExpanded = styled.div`
  display: ${props => (props.active ? "grid" : "none")};
  list-style: none;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  padding-block-end: 1rem;
  padding-block-start: 1rem;
`;

const StyledMenuMainExpandedList = styled(StyledMenu)`
  list-style: none;
`;

const StyledMenuMainHeadings = styled(StyledMenu)`
  display: grid;
  list-style: none;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  padding-block-end: 1rem;
  padding-block-start: 1rem;
`;

const StyledSearchContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-area: search;
  padding: 1rem;
`;

export const Header = (
  { active, siteTitle }: InferProps<typeof Header.propTypes> = {
    active: false,
    siteTitle: "Site Title",
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
      siteSearchIndex {
        index
      }
    }
  `)

  return (
    <StyledHeader>
      <StyledLogoLink id="header-logo" title={`Go back to the homepage for ${siteTitle}`} to="/">
        <StyledLogo />
      </StyledLogoLink>
      <StyledMenuPrimary id="header-menu-primary">
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
      </StyledMenuPrimary>
      <StyledMenuSecondary id="header-menu-secondary">
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
      </StyledMenuSecondary>
      <StyledMenuMain id="header-menu-main">
        <StyledMenuMainHeadings id="header-menu-main-headings">
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
          <li>
            <a href="#">Item 4</a>
          </li>
        </StyledMenuMainHeadings>
        <StyledMenuMainExpanded id="header-menu-main-expanded" active={active}>
        <StyledMenuMainExpandedList>
          {data.allBigCommerceCategories.edges.map(({ node }, index) => (
            <li key={index}>
              <a href={node.custom_url.url}>{node.name}</a>
            </li>
          ))}
        </StyledMenuMainExpandedList>
          <StyledMenuMainExpandedList>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </StyledMenuMainExpandedList>
          <StyledMenuMainExpandedList>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </StyledMenuMainExpandedList>
        </StyledMenuMainExpanded>
      </StyledMenuMain>
      <StyledSearchContainer>
        <Search searchIndex={data.siteSearchIndex.index} />
      </StyledSearchContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  active: PropTypes.bool,
  siteTitle: PropTypes.string,
}

export default Header
