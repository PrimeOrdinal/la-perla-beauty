import { Justify as JustifyProp } from "../../types/components"

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

import { ArticleCard } from "./ArticleCard"

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

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ArticleCardGridProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: Array<{
      title: string
      text_justification: JustifyProp
    }>
    text: string
    title: string
  }


export const ArticleCardGrid: React.FC = (props) => {
  return (
    <GridStyled>
      <ArticleCard
        titleBelow="Etiam aliquet vist metus"
        body="Luxury with integrity​"
        link="read more"
        aspectRatio="3/4"
      />
      <ArticleCard
        titleBelow="Etiam aliquet vist metus"
        body="Luxury with integrity​"
        link="read more"
        aspectRatio="3/4"
      />
      <ArticleCard
        titleBelow="Etiam aliquet vist metus"
        body="Luxury with integrity​"
        link="read more"
        aspectRatio="3/4"
      />
      <ArticleCard
        titleBelow="Etiam aliquet vist metus"
        body="Luxury with integrity​"
        link="read more"
        aspectRatio="3/4"
      />
    </GridStyled>
  )
}

export default ArticleCardGrid
