/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export function SEO({
  description,
  lang,
  meta,
  title,
}: {
  description: string
  lang: string
  meta: Array<{
    content: string
    name: string
  }>
  title: string
}): JSX.Element {
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
    query siteInformationQuery {
      site {
        buildTime(formatString: "YYYY-MM-DD hh:mm a z")
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const { site } = data

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `date`,
          content: site.buildTime.toString(),
        },
        ...meta,
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
