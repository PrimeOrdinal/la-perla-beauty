import React from "react"
import styled from "styled-components"
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { mediaQueries } from "../theme"

import { ArticleCard, ArticleCardProps } from "./ArticleCard"

const ArticleCardGridStyled = styled.section`
  --margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  ${mediaQueries.md} {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }

  article:nth-child(even) {
    margin-top: var(--margin-top, 2rem);

    ${mediaQueries.md} {
      --margin-top: 4rem;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ArticleCardGridProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: ArticleCardProps[]
    text: string
    title: string
  }


export const ArticleCardGrid: React.FC<ArticleCardGridProps> = props => (
    <ArticleCardGridStyled>
      {props.items?.map((item, index) => <ArticleCard
        key={index}
        titlePosition="bottom"
        {...item}
      />)}
    </ArticleCardGridStyled>
  )

export default ArticleCardGrid
