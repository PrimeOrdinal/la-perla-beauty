/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"
// import theme from '@rebass/preset'
import { useStaticQuery, graphql } from "gatsby"
import React, { FunctionComponent } from "react"
// import { Button } from 'rebass'
import { ThemeProvider } from "theme-ui"

import theme from "../theme"

import Banner from "./Banner"
import Header from "./Header"
import SiteSelector from "./SiteSelector"

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

const StyledFooter = styled.div`
  background-color: lightgrey;
  display: grid;
  padding: 1rem;
  place-items: center;
`

// Create styles for the Global component
const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Roboto Light", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
  body {
    background-color: red;
  }
`

// function SomeText (props) {
//   const theme = useTheme()
//   return (
//     <section
//       css={{ backgroundColor: theme.colors.primary, color: theme.colors.gray }}
//       {...props}
//     />
//   )
// }

const Layout: FunctionComponent = ({ children }): JSX.Element => {
  const data: {
    site: {
      buildTime: Date
      siteMetadata: {
        title: string
        description: string
        author: string
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
      <Global styles={globalStyles} />
      {/* <SomeText>some text</SomeText> */}
      <StyledSiteContainer>
        <SiteSelector />
        <Banner />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} active />
        <StyledPageContainer>
          <StyledMain>{children}</StyledMain>
        </StyledPageContainer>
        <StyledFooter>
          <span>© {new Date().getFullYear()} La Perla Beauty</span>
        </StyledFooter>
      </StyledSiteContainer>
    </ThemeProvider>
  )
}

export default Layout
