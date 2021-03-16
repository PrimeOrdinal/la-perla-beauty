import type { Justify as JustifyProp } from "../../types/components"

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

const ArticleCardGalleryStyled = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  article:nth-child(even) {
    margin-top: 2rem;
  }

  ${mediaQueries.md} {
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ArticleCardGalleryProps = ColorProps &
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

export const ArticleCardGallery: React.FC<ArticleCardGalleryProps> = props => (
  <ArticleCardGalleryStyled>
    {props.items?.map((item, index) => (
      <ArticleCard key={index} {...item} titlePosition={index % 2 == 0 ? "bottom" : "top"} />
    ))}
  </ArticleCardGalleryStyled>
)

export default ArticleCardGallery
