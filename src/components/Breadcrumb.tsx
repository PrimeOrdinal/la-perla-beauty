import { themeGet } from "@styled-system/theme-get"
import { Breadcrumb as GatsbyPluginBreadcrumb } from "gatsby-plugin-breadcrumb"
import React from "react"
import styled from "styled-components"

const BreadcrumbStyled = styled.div`
  margin-block-end: ${themeGet("space.8")}px;

  .breadcrumb__title {
    text-decoration: none;
  }

  .breadcrumb {
    font-size: var(--font-size-small, 12px);
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
    pathname: string
    location: Record<string, unknown>
  }[]
  crumbSeparator?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = props => {
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
    <BreadcrumbStyled className="container">
      <GatsbyPluginBreadcrumb crumbSeparator="|" {...props} />
    </BreadcrumbStyled>
  )
}
