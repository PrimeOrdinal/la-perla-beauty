/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import type { SeoQuery } from "../../graphql-types"

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type metaProp =
  | { name: string; content: string; property?: undefined }
  | { property: string; content: string; name?: undefined }

type SeoProps = {
  description?: string
  lang?: string
  meta?: metaProp
  title: string
}

export const SEO: React.FC<SeoProps> = ({ description, lang, meta, title }) => {
  const data: SeoQuery = useStaticQuery(graphql`
    query SEO {
      site {
        buildTime(formatString: "YYYY-MM-DD hh:mm a z")
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)

  const metaDescription =
    description ||
    data?.site?.siteMetadata?.description ||
    "Site description missing"
  const defaultTitle = data?.site?.siteMetadata?.title

  const metaArray: metaProp[] = [
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
      content: data?.site?.siteMetadata?.author || ``,
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
      content: data?.site?.buildTime.toString(),
    },
  ]

  if (meta) {
    metaArray.push(meta)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={metaArray}
    />
  )
}

export default SEO
