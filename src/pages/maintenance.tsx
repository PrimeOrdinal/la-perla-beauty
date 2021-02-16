import type {
  Contentstack_Pages,
  MaintenancePageQuery,
} from "../../graphql-types"

import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const StyledContainer = styled.div`
  align-content: center;  
  display: grid;
  justify-items: center;  
`

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

const MaintenancePage: React.FC<PageProps<MaintenancePageQuery, PageContextPage>> = ({data}) => {

  return (
    <Layout type="minimal">
      <SEO title="Down for maintenance" />

      <StyledContainer className={clsx("container")}>
        
        <header>
          <h1>{data?.site?.siteMetadata?.title}</h1>
        </header>

        <main>
          <span>Site is down for maintenance</span>
        </main>

      </StyledContainer>

    </Layout>
  )
}

export default MaintenancePage

export const query = graphql`
  query MaintenancePage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
