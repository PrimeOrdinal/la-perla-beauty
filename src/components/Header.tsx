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
import { Search } from "./Search"

const StyledHeader = styled.header`
  background-color: #ffffff;
  display: grid;
  grid-template-areas: "menu-primary logo menu-secondary" "menu-navigation menu-navigation menu-navigation" "search search search";
  grid-template-columns: 1fr 2fr 1fr;
  padding-block-end: 1rem;
  padding-block-start: 1rem;
  position: sticky;
  text-align: center;
`

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

  const [miniBagVisibility, toggleMiniBagVisibility] = useToggle()
  const [quickSearchVisibility, toggleQuickSearchVisibility] = useToggle()

  return (
    <StyledHeader>
      <LogoLink gridArea="logo" siteTitle={siteTitle} />
      <MenuStore display={{ _: "none", md: "block" }} gridArea="menu-primary" />
      <MenuActions
        gridArea="menu-secondary"
        toggleMiniBagVisibility={toggleMiniBagVisibility}
        toggleQuickSearchVisibility={toggleQuickSearchVisibility}
      />
      <MenuNavigation
        display={{ _: "none", md: "block" }}
        gridArea="menu-navigation"
      />
      {miniBagVisibility && (
        <MiniBag position="absolute" right="5rem" top="5rem" />
      )}
      {quickSearchVisibility && (
        <Search searchIndex={data?.siteSearchIndex?.index} />
      )}
    </StyledHeader>
  )
}
