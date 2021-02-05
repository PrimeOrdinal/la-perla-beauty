import type {
  // HeaderQuery
  LayoutQuery,
} from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { useToggle } from "../hooks/useToggle"
import { ReactComponent as Hamburger } from "../images/Hamburger.svg"
import { LogotypeLink } from "./LogotypeLink"
import { MenuActions } from "./MenuActions"
import { MenuNavigation as MenuNavigation } from "./MenuNavigation"
import { MenuStore } from "./MenuStore"
import { MiniBag } from "./MiniBag"
import { QuickSearch } from "./QuickSearch"
import { mediaQueries } from "../theme"

const HeaderStyled = styled.header`
  background-color: #ffffff;
  border-bottom-style: solid;
  margin-block-end: ${themeGet("space.6")}px;
  position: sticky;
  top: 0;
`

const ContainerStyled = styled.div`
  display: grid;
  grid-template-areas: "menu-primary logo menu-secondary" "menu-navigation menu-navigation menu-navigation" "quick-search quick-search quick-search";
  grid-template-columns: 1fr 2fr 1fr;
  padding-block-start: ${themeGet("space.6")}px;
  text-align: center;
  align-items: center;
  padding-block-end: ${themeGet("space.6")}px;
  ${mediaQueries.md} {
    padding-block-end: unset;
  }
  .hamburger {
    cursor: pointer;
    height: ${themeGet("space.5")}px;
    object-fit: contain;
    ${mediaQueries.md} {
      display: none;
    }
  }
`

export type HeaderProps = {
  // data?: HeaderQuery
  data?: LayoutQuery
  siteTitle?: string
}

export const Header: React.FC<HeaderProps> = (
  { data, siteTitle } = {
    siteTitle: "Site Title",
  }
) => {
  const [miniBagVisibility, toggleMiniBagVisibility] = useToggle()
  const [quickSearchVisibility, toggleQuickSearchVisibility] = useToggle()

  return (
    <HeaderStyled>
      <ContainerStyled className="container">
        <LogotypeLink gridArea="logo" siteTitle={siteTitle} />
        <MenuStore
          display={{ _: "none", md: "flex" }}
          gridArea="menu-primary"
        />
        <Hamburger className="hamburger" />
        <MenuActions
          gridArea="menu-secondary"
          toggleMiniBagVisibility={toggleMiniBagVisibility}
          toggleQuickSearchVisibility={toggleQuickSearchVisibility}
        />
        {quickSearchVisibility !== true && (
          <MenuNavigation
            display={{ _: "none", md: "block" }}
            gridArea="menu-navigation"
            data={data}
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
      </ContainerStyled>
    </HeaderStyled>
  )
}
