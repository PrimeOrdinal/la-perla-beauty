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
    props.transparent ? "transparent" : themeGet("colors.white")};
  border-bottom-style: ${props => (props.transparent ? "none" : "solid")};
  min-height: var(--header-min-height, 38px);
  padding-block-start: ${themeGet("space.3")}px;
  position: sticky;
  top: 0;
  transition: background-color ease-in 0.25s;
  z-index: 999;

  ${mediaQueries.md} {
    padding-block-start: ${themeGet("space.8")}px;
  }

  &:hover {
    background-color: ${themeGet("colors.background")};
  }

  .permanent {
    position: relative;
    z-index: 50;
  }

  .minibag {
    box-shadow: 2px 3px 10px 2px rgba(204, 204, 204, 0.5);
  }
`

const ContainerStyled = styled.div`
  align-items: center;
  display: grid;
  grid-template-areas: "menu-primary logo menu-secondary" "menu-navigation menu-navigation menu-navigation" "quick-search quick-search quick-search";
  grid-template-columns: 1fr 2fr 1fr;
  position: relative;
  z-index: 500;

  ${mediaQueries.md} {
    text-align: center;
  }
`

export type GlobalHeaderProps = {
  // data?: GlobalHeaderQuery
  data?: LayoutQuery
  siteTitle?: string
  transparent?: boolean
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  data,
  ...props
}) => {
  const [miniBagVisibility, toggleBagPreviewVisibility] = useToggle()
  const [quickSearchVisibility, toggleQuickSearchVisibility] = useToggle()

  // const searchInputRef = React.useRef()
  // console.log(searchInputRef)

  return (
    <GlobalHeaderStyled transparent={props.transparent}>
      <React.Fragment>
        <ContainerStyled className="container">
          <LogotypeLink
            className="permanent"
            gridArea="logo"
            siteTitle={props.siteTitle}
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
            // searchInputRef={searchInputRef}
          />
          <MenuMainNavigation
            display={{ _: "none", md: "block" }}
            gridArea="menu-navigation"
            data={data}
          />
          {miniBagVisibility && (
            <BagPreview
              position="absolute"
              right="1rem"
              top="6rem"
              className="minibag"
            />
          )}
        </ContainerStyled>
        {quickSearchVisibility && (
          <QuickSearch
            gridArea="quick-search"
            // searchInputRef={searchInputRef}
            searchIndex={data?.siteSearchIndex?.index}
          />
        )}
      </React.Fragment>
    </GlobalHeaderStyled>
  )
}
