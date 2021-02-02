/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import type { LayoutQuery } from "../../graphql-types"

import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled, { ThemeProvider } from "styled-components"
// import type {} from "styled-components/cssprop"

import { GlobalStyle } from "../styles/GlobalStyle"

import { theme } from "../theme"

import { Banner } from "./Banner"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { SiteSelector } from "./SiteSelector"

const StyledSiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledPageContainer = styled.div`
  display: flex;
  flex: 1;
`

const StyledMain = styled.div`
  flex-basis: 100%;
`

export type LayoutProps = {
  children?: React.ReactNode
}

export const Layout: React.FC = (
  { children }
) => {
  const data: LayoutQuery = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
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
      allContentstackMenus(
        filter: {
          slot: {
            in: ["footer-secondary-1", "footer-secondary-2", "footer-secondary-3", "footer-tertiary-1", "header-navigation"]
          }
        }
      ) {
        edges {
          node {
            ...Contentstack_menusFragment
          }
        }
      }
      siteSearchIndex {
        index
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <StyledSiteContainer>
        <GlobalStyle theme={theme} />
        <SiteSelector />
        <Banner to="/shipping">Standard Shipping &amp; Returns Lorem Ipsum</Banner>
        <Header siteTitle={data?.site?.siteMetadata?.title || `Title`} data={data} />
        <StyledPageContainer>
          <StyledMain>{children}</StyledMain>
        </StyledPageContainer>
        <Footer siteTitle={data?.site?.siteMetadata?.title || `Title`} data={data} />
      </StyledSiteContainer>
    </ThemeProvider>
  )
}
