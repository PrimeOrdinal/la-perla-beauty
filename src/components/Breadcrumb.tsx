import { Breadcrumb as GatsbyPluginBreadcrumb } from "gatsby-plugin-breadcrumb"
import React from "react"
import styled from "styled-components"

import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"

const StyledGatsbyPluginBreadcrumb = styled(GatsbyPluginBreadcrumb)`
  background-color: #efeee9;
  .breadcrumb__list {
    color: red;
  }
`

export type BreadcrumbProps = {
  crumbs: {
    pathname: string
    location: Record<string, unknown>
  }[]
  crumbSeparator: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  // return (
  //   <StyledOrderedList itemScope itemType="https://schema.org/BreadcrumbList">
  //     <li
  //       itemProp="itemListElement"
  //       itemScope
  //       itemType="https://schema.org/ListItem"
  //     >
  //       <a itemProp="item" href="https://example.com/books">
  //         <span itemProp="name">Books</span>
  //       </a>
  //       <meta itemProp="position" content="1" />
  //     </li>
  //     ›
  //     <li
  //       itemProp="itemListElement"
  //       itemScope
  //       itemType="https://schema.org/ListItem"
  //     >
  //       <a
  //         itemScope
  //         itemType="https://schema.org/WebPage"
  //         itemProp="item"
  //         itemID="https://example.com/books/sciencefiction"
  //         href="https://example.com/books/sciencefiction"
  //       >
  //         <span itemProp="name">Science Fiction</span>
  //       </a>
  //       <meta itemProp="position" content="2" />
  //     </li>
  //     <li
  //       itemProp="itemListElement"
  //       itemScope
  //       itemType="https://schema.org/ListItem"
  //     >
  //       <span itemProp="name">Award winners</span>
  //       <meta itemProp="position" content="3" />
  //     </li>
  //   </StyledOrderedList>
  // )

  return (
    <StyledGatsbyPluginBreadcrumb {...props} />
  )
}
