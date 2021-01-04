import PropTypes, { InferProps } from "prop-types"
import React, { ReactElement } from "react"
import styled from "styled-components"

const StyledOrderedList = styled.div`
  background-color: #efeee9;
  display: grid;
  text-align: center;
  grid-auto-flow: column;
`

export const Breadcrumbs = ({}: InferProps<
  typeof Breadcrumbs.propTypes
> = {}): ReactElement => {
  return (
    <StyledOrderedList itemscope itemtype="https://schema.org/BreadcrumbsList">
      <li
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <a itemprop="item" href="https://example.com/books">
          <span itemprop="name">Books</span>
        </a>
        <meta itemprop="position" content="1" />
      </li>
      ›
      <li
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <a
          itemscope
          itemtype="https://schema.org/WebPage"
          itemprop="item"
          itemid="https://example.com/books/sciencefiction"
          href="https://example.com/books/sciencefiction"
        >
          <span itemprop="name">Science Fiction</span>
        </a>
        <meta itemprop="position" content="2" />
      </li>
      ›
      <li
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <span itemprop="name">Award winners</span>
        <meta itemprop="position" content="3" />
      </li>
    </StyledOrderedList>
  )
}

Breadcrumbs.propTypes = {}

export default Breadcrumbs
