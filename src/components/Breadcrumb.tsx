import { Breadcrumb as GatsbyPluginBreadcrumb } from "gatsby-plugin-breadcrumb"
import { InferProps } from "prop-types"
import React, { ReactElement } from "react"
import styled from "@emotion/styled"

import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"

// const StyledOrderedList = styled.div`
//   background-color: #efeee9;
//   display: grid;
//   text-align: center;
//   grid-auto-flow: column;
// `;

const StyledGatsbyPluginBreadcrumb = styled(GatsbyPluginBreadcrumb)`
  background-color: #efeee9;
  .breadcrumb__list {
    color: red;
  }
`

export const Breadcrumb = (
  props: InferProps<typeof Breadcrumb.propTypes>
): ReactElement => {
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

  return <StyledGatsbyPluginBreadcrumb {...props} crumbSeparator=" - " />
}

export default Breadcrumb
