import { themeGet } from "@styled-system/theme-get"
import { Breadcrumb as GatsbyPluginBreadcrumb } from "gatsby-plugin-breadcrumb"
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const BreadcrumbStyled = styled.div`
  margin-block-end: ${themeGet("space.8")}px;
  margin-block-start: ${themeGet("space.8")}px;

  .breadcrumb__title {
    text-decoration: none;
  }

  .breadcrumb {
    font-size: var(--font-size-sm, 12px);
  }

  .breadcrumb__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding-inline-start: unset;
    text-transform: uppercase;
  }

  .breadcrumb__list__item {
    margin: 0 0.25em;
  }

  .breadcrumb__link {
    color: ${themeGet("colors.darkgrey", "grey")};
    text-decoration: none;
  }

  .breadcrumb__link__active {
    text-decoration: none;
  }

  .breadcrumb__link__disabled {
    text-decoration: none;
  }

  .breadcrumb__separator {
    padding-inline-end: ${themeGet("space.2")}px;
    padding-inline-start: ${themeGet("space.2")}px;
  }

  [aria-current="page"] {
    color: ${themeGet("colors.black", "black")};
  }
`

export type BreadcrumbProps = {
  crumbs: {
    crumbLabel: string
    pathname: string
  }[]
  crumbSeparator?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = props => (
  <BreadcrumbStyled className="container">
    <GatsbyPluginBreadcrumb crumbSeparator="|" {...props} />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: props.crumbs?.map((crumb, index) => ({
            "@type": "ListItem",
            position: index,
            name: crumb?.crumbLabel,
            item: process.env.GATSBY_SITE_URL + crumb?.pathname,
          })),
        })}
      </script>
    </Helmet>
  </BreadcrumbStyled>
)
