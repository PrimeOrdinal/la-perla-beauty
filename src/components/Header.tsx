import type { HeaderQuery } from "../../graphql-types"

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import { useToggle } from "../hooks/useToggle"

import { LogoLink } from "./LogoLink"
import { MenuActions } from "./MenuActions"
import { MenuNavigation } from "./MenuNavigation"
import { MenuStore } from "./MenuStore"
import { MiniBag } from "./MiniBag"
import { QuickSearch } from "./QuickSearch"

const StyledHeader = styled.header`
  background-color: #ffffff;
  display: grid;
  grid-template-areas: "menu-primary logo menu-secondary" "menu-navigation menu-navigation menu-navigation" "quick-search quick-search quick-search";
  grid-template-columns: 1fr 2fr 1fr;
  padding-block-start: 1rem;
  position: sticky;
  text-align: center;
  top: 0;
`
const StyledWrapper = styled.div`
  border-bottom: 0.5px solid gray;
`

const StyledContainer = styled.div`
  width: 90%;
  margin: auto;
`

export type HeaderProps = {
  data?: HeaderQuery
  siteTitle?: string
}

export const HeaderPure: React.FC<HeaderProps> = (
  { data, siteTitle } = {
    siteTitle: "Site Title",
  }
) => {
  const [miniBagVisibility, toggleMiniBagVisibility] = useToggle()
  const [quickSearchVisibility, toggleQuickSearchVisibility] = useToggle()

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledHeader>
          <LogoLink gridArea="logo" siteTitle={siteTitle} />
          <MenuStore
            display={{ _: "none", md: "flex" }}
            gridArea="menu-primary"
          />
          <MenuActions
            gridArea="menu-secondary"
            toggleMiniBagVisibility={toggleMiniBagVisibility}
            toggleQuickSearchVisibility={toggleQuickSearchVisibility}
          />
          {quickSearchVisibility !== true && (
            <MenuNavigation
              display={{ _: "none", md: "block" }}
              gridArea="menu-navigation"
            />
          )}
          {miniBagVisibility && (
            <MiniBag position="absolute" right="5rem" top="5rem" />
          )}
          {quickSearchVisibility && (
            <QuickSearch
              gridArea="quick-search"
              searchIndex={data?.siteSearchIndex?.index}
            />
          )}
        </StyledHeader>
      </StyledContainer>
    </StyledWrapper>
  )
}

export const Header: React.FC<HeaderProps> = props => {
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

  return <HeaderPure data={data} {...props} />
}
