import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"

import { BlogPostPreview } from "../components/BlogPostPreview"

const ArticleSliderStyled = styled.section`
  padding-right: 0;
  ${mediaQueries.md} {
    padding-right: var(--app-gutter-x, 0.75rem);
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    gap: 2rem;
    overflow-x: scroll;
    ${mediaQueries.md} {
      grid-template-columns: repeat(4, auto);
    }
  }
`

export const ArticleSlider: React.FC = () => {
  return (
    <ArticleSliderStyled className="container">
      <div className="grid">
        <BlogPostPreview
          titleAbove="The key to more success is to get a massage"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="read more"
          aspectRatio="3/4"
        />
        <BlogPostPreview
          titleBelow="Don’t panic, when it gets crazy and rough"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="read more"
          aspectRatio="3/4"
        />
        <BlogPostPreview
          titleAbove="The key to more success is to get a massage"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="read more"
          aspectRatio="3/4"
        />
        <BlogPostPreview
          titleBelow="Don’t panic, when it gets crazy and rough"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="read more"
          aspectRatio="3/4"
        />
      </div>
    </ArticleSliderStyled>
  )
}

export default ArticleSlider
