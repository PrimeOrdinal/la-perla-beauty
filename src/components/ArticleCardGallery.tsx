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
  max-width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  div {
    display: grid;
    column-gap: 2rem;
    grid-auto-columns: calc(25% - 2rem + 0.5rem);
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, calc(25% - 2rem + 0.5rem));

    & > * {
      scroll-snap-align: start;
    }
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
    <div>
      {props.items?.map((item, index) => (
        <ArticleCard key={index} {...item} titlePosition={index % 2 == 0 ? "bottom" : "top"} />
      ))}
    </div>
  </ArticleCardGalleryStyled>
)

export default ArticleCardGallery
