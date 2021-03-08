import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"

import { BlogPostPreview } from "./BlogPostPreview"

const GridStyled = styled.div`
  ${mediaQueries.md} {
    display: grid;
    grid-auto-flow: column;
    gap: 46px;
    min-height: 580px;
    margin-block-end: 2rem;
  }
  .col1,
  .col2 {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    min-height: 375px;
    ${mediaQueries.md} {
      min-height: auto;
      gap: 46px;
    }
    article:last-child {
      align-self: flex-end;
    }
  }
  .col2 {
    margin-block-end: 1rem;
  }
`

export const ArticleGrid: React.FC = () => {
  return (
    <GridStyled>
      <div className="col1">
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
      </div>
      <div className="col2">
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
      </div>
    </GridStyled>
  )
}

export default ArticleGrid
