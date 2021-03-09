import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"

import { BlogPostPreview } from "./BlogPostPreview"

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  article:nth-child(even) {
    margin-top: 2rem;
  }
  ${mediaQueries.md} {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`

export const ArticleGrid: React.FC = () => {
  return (
    <GridStyled>
      <BlogPostPreview
        titleBelow="Etiam aliquet vist metus"
        body="Luxury with integrity​"
        link="read more"
        aspectRatio="3/4"
      />
      <BlogPostPreview
        titleBelow="Etiam aliquet vist metus"
        body="Luxury with integrity​"
        link="read more"
        aspectRatio="3/4"
      />
      <BlogPostPreview
        titleBelow="Etiam aliquet vist metus"
        body="Luxury with integrity​"
        link="read more"
        aspectRatio="3/4"
      />
      <BlogPostPreview
        titleBelow="Etiam aliquet vist metus"
        body="Luxury with integrity​"
        link="read more"
        aspectRatio="3/4"
      />
    </GridStyled>
  )
}

export default ArticleGrid
