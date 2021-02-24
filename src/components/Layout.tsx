/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import type { LayoutQuery } from "../../graphql-types"

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../styles/GlobalStyle"

import { theme } from "../theme"

import { Banner } from "./Banner"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { SiteSelector } from "./SiteSelector"

const StyledSiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
`

const StyledPageContainer = styled.div`
  display: flex;
  flex: 1;
`

const StyledContentArea = styled.div`
  flex-basis: 100%;
  max-width: 100vw;

  &.flex {
    display: flex;
  }
`

export type LayoutProps = {
  children?: React.ReactNode
  type?: "full" | "minimal"
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  type = "full",
  ...props
}) => {
  const data: LayoutQuery = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
      allContentstackMenus(
        filter: {
          slot: {
            in: [
              "footer-secondary-1"
              "footer-secondary-2"
              "footer-secondary-3"
              "footer-tertiary-1"
              "header-navigation"
              "mobile-navigation"
            ]
          }
        }
      ) {
        edges {
          node {
            ...Contentstack_menusFragment
          }
        }
      }
      bigCommerceGQL {
        site {
          settings {
            status
          }
        }
      }
      contentstackBanners {
        title
        url {
          href
          title
        }
      }
      siteSearchIndex {
        index
      }
    }
  `)

  // TODO: Uncomment the following if statement to show a maintenance when the BigCommerce store is not available
  // if (data.bigCommerceGQL.site.settings.status === "PRE_LAUNCH") {
  //   navigate("/maintenance")
  // }

  return (
    <ThemeProvider theme={theme} {...props}>
      <StyledSiteContainer>
        <GlobalStyle theme={theme} />
        <SiteSelector />

        {type === "full" ? (
          <React.Fragment>
            {data?.contentstackBanners?.title && (
              <Banner
                to={data?.contentstackBanners?.url?.href}
                title={data?.contentstackBanners?.url?.title}
                variant="primary"
              >
                {data?.contentstackBanners?.title}
              </Banner>
            )}
            <Header
              siteTitle={data?.site?.siteMetadata?.title || `Title`}
              data={data}
            />
            <StyledPageContainer>
              <StyledContentArea>{children}</StyledContentArea>
            </StyledPageContainer>
            <Footer
              siteTitle={data?.site?.siteMetadata?.title || `Title`}
              data={data}
            />
          </React.Fragment>
        ) : (
          <StyledPageContainer>
            <StyledContentArea className="flex">{children}</StyledContentArea>
          </StyledPageContainer>
        )}
      </StyledSiteContainer>
    </ThemeProvider>
  )
}
