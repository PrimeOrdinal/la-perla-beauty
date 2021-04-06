/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import type { Context } from "react"

import type { BigCommerceGql_Product, LayoutQuery } from "../../graphql-types"

import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import type { Bag } from "../../types/BigCommerce"

import { GlobalStyle } from "../styles/GlobalStyle"

import { getCartContents } from "../utils/carts"
import { redirectToMaintenancePage } from "../utils/maintenance"

import { theme } from "../theme"

import { BagContext } from "./Bag"
import { PromotionalBanner } from "./PromotionalBanner"
import { GlobalFooter } from "./GlobalFooter"
import { GlobalHeader } from "./GlobalHeader"
import { SiteSelector } from "./SiteSelector"
import { Snackbar, SnackbarContext } from "./Snackbar"

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
  type?: "compact" | "full"
  transparent?: boolean
}

const siteContextDefault: {
  bestSellingProducts?: {
    edges: Array<{
      node: BigCommerceGql_Product
    }>
  }
  featuredProducts?: {
    edges: Array<{
      node: BigCommerceGql_Product
    }>
  }
} = {}

export const SiteContext: Context<Site> = React.createContext(
  siteContextDefault
)

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  const data: LayoutQuery = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
      allContentstackMenuComponent(
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
            ...Contentstack_menu_componentFragment
          }
        }
      }
      bigCommerceGQL {
        site {
          bestSellingProducts {
            edges {
              node {
                ...BigCommerceGQL_ProductFragment
              }
            }
          }
          featuredProducts {
            edges {
              node {
                ...BigCommerceGQL_ProductFragment
              }
            }
          }
          settings {
            status
          }
        }
      }
      contentstackPromotionalBannerComponent {
        link {
          href
          title
        }
        title
      }
      siteSearchIndex {
        index
      }
    }
  `)

  // const { bag, setBag } = useContext(BagContext)

  const [snackbarLabelText, setSnackbarLabelText] = useState<
    string | undefined
  >(undefined)
  const setSnackbar = (labelText: string | undefined) => {
    console.log("labelText", labelText)
    setSnackbarLabelText(labelText)
  }

  const [bagContents, setBagContents] = useState({} as Bag)
  const setBag = (bag: Bag) => {
    console.log("bag", bag)
    bag.id && localStorage.setItem("cartId", bag.id)

    setBagContents(bag)
  }
  // console.log("bagContents", bagContents)

  useEffect(() => {
    redirectToMaintenancePage(data.bigCommerceGQL.site.settings.status)
    getCartContents(setBagContents)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <BagContext.Provider value={{ bag: bagContents, setBag }}>
        <SnackbarContext.Provider
          value={{ labelText: snackbarLabelText, setSnackbar }}
        >
          <StyledSiteContainer {...props}>
            <GlobalStyle theme={theme} />

            <SiteSelector />

            {props.type === "compact" ? (
              <StyledPageContainer>
                <StyledContentArea className="flex">
                  {children}
                </StyledContentArea>
              </StyledPageContainer>
            ) : (
              <React.Fragment>
                {data?.contentstackPromotionalBannerComponent?.title && (
                  <PromotionalBanner
                    {...data?.contentstackPromotionalBannerComponent?.link}
                    variant="primary"
                  />
                )}

                <GlobalHeader
                  // bag={bag}
                  data={data}
                  siteTitle={data?.site?.siteMetadata?.title || `Title`}
                  transparent={props.transparent}
                />

                <StyledPageContainer>
                  <SiteContext.Provider value={data?.bigCommerceGQL?.site}>
                    <StyledContentArea>{children}</StyledContentArea>
                  </SiteContext.Provider>
                </StyledPageContainer>

                <GlobalFooter
                  data={data}
                  siteTitle={data?.site?.siteMetadata?.title || `Title`}
                />
              </React.Fragment>
            )}
            <Snackbar labelText={snackbarLabelText} setSnackbar={setSnackbar} />
          </StyledSiteContainer>
        </SnackbarContext.Provider>
      </BagContext.Provider>
    </ThemeProvider>
  )
}
