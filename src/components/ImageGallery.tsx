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

import { Banner, BannerProps } from "./Banner"

export type ImageGalleryProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: BannerProps[]
    text: string
    title: string
  }

export const ImageGalleryStyled: React.FC<ImageGalleryProps> = styled.section`
  max-width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  .items {
    display: grid;
    column-gap: 1rem;
    grid-auto-columns: calc(33.33% - 0.66rem);
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, calc(33.33% - 0.66rem));

    & > * {
      scroll-snap-align: start;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const ImageGallery: React.FC<ImageGalleryProps> = props => (
  <ImageGalleryStyled
    {...props}
  >
    <div className="items">
      {props.items?.map((item, index) => (
        <Banner key={index} layout="image" {...item} />
      ))}
    </div>
  </ImageGalleryStyled>
)
