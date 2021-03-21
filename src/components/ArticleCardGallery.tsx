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

import { ArticleCard, ArticleCardProps } from "./ArticleCard"
import { Carousel } from "./Carousel"

const ArticleCardGalleryStyled = styled.section`
  .title {
    font-size: var(--font-size-lg, 18px);
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
    {props.title && <h1 className="title">{props.title}</h1>}
    {props.text && <p className="text">{props.text}</p>}
    <Carousel visibleItems={3} showArrows>
      {props.items?.map((item, index) => (
        <ArticleCard
          {...item}
          key={index}
          titlePosition={index % 2 == 0 ? "bottom" : "top"}
        />
      ))}
    </Carousel>
  </ArticleCardGalleryStyled>
)

export default ArticleCardGallery
