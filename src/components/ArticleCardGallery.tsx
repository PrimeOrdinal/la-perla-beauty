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

import { BlogPostPreview } from "./BlogPostPreview"

const ArticleCardGalleryStyled = styled.div`
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
    items: Array<{
      title: string
      text_justification: JustifyProp
    }>
    text: string
    title: string
  }


export const ArticleCardGallery: React.FC<ArticleCardGalleryProps> = ({
  id,
  items,
  text,
  text_justification
}) => {
  console.log("items", items)
  console.log("text", text)
  return (
    <ArticleCardGalleryStyled>
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
    </ArticleCardGalleryStyled>
  )
}

export default ArticleCardGallery
