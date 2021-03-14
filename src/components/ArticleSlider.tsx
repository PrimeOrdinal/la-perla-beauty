import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"

import { ArticleCard } from "../components/ArticleCard"

const ArticleSliderStyled = styled.section`
  padding-inline-end: 0;
  ${mediaQueries.md} {
    padding-inline-end: var(--app-gutter-x, 0.75rem);
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
        <ArticleCard
          title="The key to more success is to get a massage"
          titlePosition="top"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="read more"
          aspectRatio="3/4"
        />
        <ArticleCard
          title="Don’t panic, when it gets crazy and rough"
          titlePosition="bottom"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="read more"
          aspectRatio="3/4"
        />
        <ArticleCard
          title="The key to more success is to get a massage"
          titlePosition="top"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="read more"
          aspectRatio="3/4"
        />
        <ArticleCard
          title="Don’t panic, when it gets crazy and rough"
          titlePosition="bottom"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="read more"
          aspectRatio="3/4"
        />
      </div>
    </ArticleSliderStyled>
  )
}

export default ArticleSlider
