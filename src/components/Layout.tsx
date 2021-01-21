/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled, { ThemeProvider } from "styled-components"
// import type {} from 'styled-components/cssprop'
import { color } from "styled-system"

import { GlobalStyle } from "../styles/GlobalStyle"

import { theme } from "../theme"

import { Banner } from "./Banner"
import { Button } from "./Button"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { SiteSelector } from "./SiteSelector"

const Box = styled.div`
  ${color}
`

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
  const data: {
    site: {
      buildTime: Date
      siteMetadata: {
        author: string
        description: string
        title: string
      }
    }
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
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
        <Button>Default</Button>
        <Button space="1" variant="primary">
          Primary
        </Button>
        <Button space="2" variant="secondary">
          Secondary
        </Button>
        <Button space="4" variant="tertiary">
          Tertiary
        </Button>
        <Button p={2} color="#fff" bg="orange" padding={1}>
          Override
        </Button>
        <Button disabled>Override</Button>
        <Box color="black" bg="blue">
          Blue Box
        </Box>
        <Box color="black" bg="primary">
          Primary Theme Colour Box
        </Box>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <StyledPageContainer>
          <StyledMain>{children}</StyledMain>
        </StyledPageContainer>
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      </StyledSiteContainer>
    </ThemeProvider>
  )
}
