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

export const Layout: React.FC = ({ children }) => {
  const data: LayoutQuery = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <StyledSiteContainer>
        <GlobalStyle theme={theme} />
        <SiteSelector />
        <Banner />
        <Header siteTitle={data?.site?.siteMetadata?.title || `Title`} />
        <StyledPageContainer>
          <StyledMain>{children}</StyledMain>
        </StyledPageContainer>
        {/* <Footer siteTitle={data?.site?.siteMetadata?.title || `Title`} /> */}
      </StyledSiteContainer>
    </ThemeProvider>
  )
}
