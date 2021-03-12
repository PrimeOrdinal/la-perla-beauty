import type {
  // GlobalHeaderQuery
  LayoutQuery,
} from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { useToggle } from "../hooks/useToggle"

import { mediaQueries } from "../theme"

import { MenuHamburger } from "./MenuHamburger"
import { LogotypeLink } from "./LogotypeLink"
import { MenuActions } from "./MenuActions"
import { MenuMainNavigation } from "./MenuMainNavigation"
import { MenuStore } from "./MenuStore"
import { BagPreview } from "./BagPreview"
import { QuickSearch } from "./QuickSearch"

const GlobalHeaderStyled = styled.header`
  background-color: ${props =>
    props.opaque ? themeGet("colors.white") : "transparent"};
  border-bottom-style: ${props => (props.opaque ? "solid" : "none")};
  min-height: var(--header-min-height, 38px);
  padding-block-start: ${themeGet("space.3")}px;
  position: sticky;
  top: 0;
  z-index: 999;
  &:hover {
    background-color: ${themeGet("colors.white")};
    transition: all ease-in 0.25s;
  }
  ${mediaQueries.md} {
    padding-block-start: ${themeGet("space.8")}px;
  }

  .permanent {
    position: relative;
    z-index: 50;
  }

  .minibag {
    box-shadow: 2px 3px 10px 2px rgba(204,204,204,0.5);
  }
`

const ContainerStyled = styled.div`
  align-items: center;
  display: grid;
  grid-template-areas: "menu-primary logo menu-secondary" "menu-navigation menu-navigation menu-navigation" "quick-search quick-search quick-search";
  grid-template-columns: 1fr 2fr 1fr;

  ${mediaQueries.md} {
    text-align: center;
  }
`

export type GlobalHeaderProps = {
  // data?: GlobalHeaderQuery
  data?: LayoutQuery
  siteTitle?: string
  opaque?: boolean
}

export const GlobalHeader: React.FC<HeaderProps> = (
  { data, siteTitle, opaque } = {
    siteTitle: "Site Title",
    opaque: true,
  }
) => {
  const [miniBagVisibility, toggleBagPreviewVisibility] = useToggle()
  const [quickSearchVisibility, toggleQuickSearchVisibility] = useToggle()

  return (
    <GlobalHeaderStyled opaque={opaque}>
      <ContainerStyled className="container">
        <LogotypeLink
          className="permanent"
          gridArea="logo"
          siteTitle={siteTitle}
        />
        <MenuStore
          display={{ _: "none", md: "flex" }}
          gridArea="menu-primary"
          left="-12px"
          position="relative"
        />
        <MenuHamburger data={data} gridArea="menu-primary" />
        <MenuActions
          className="permanent"
          gridArea="menu-secondary"
          toggleBagPreviewVisibility={toggleBagPreviewVisibility}
          toggleQuickSearchVisibility={toggleQuickSearchVisibility}
        />
        {quickSearchVisibility !== true && (
          <MenuMainNavigation
            display={{ _: "none", md: "block" }}
            gridArea="menu-navigation"
            data={data}
          />
        )}
        {miniBagVisibility && (
          <BagPreview position="absolute" right="1rem" top="6rem" className="minibag" />
        )}
        {quickSearchVisibility && (
          <QuickSearch
            gridArea="quick-search"
            searchIndex={data?.siteSearchIndex?.index}
          />
        )}
      </ContainerStyled>
    </GlobalHeaderStyled>
  )
}
