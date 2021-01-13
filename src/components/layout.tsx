/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";

import Banner from "./Banner"
import Header from "./Header"
import SiteSelector from "./SiteSelector"

import "./layout.css"

const StyledSiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledPageContainer = styled.div`
  display: flex;
  flex: 1;
`;

const StyledMain = styled.div`
  flex-basis: 100%;
`;

const StyledFooter = styled.div`
  background-color: lightgrey;
  display: grid;
  padding: 1rem;
  place-items: center;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
