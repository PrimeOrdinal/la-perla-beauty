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

import { BannerGallery, BannerGalleryProps } from "./BannerGallery"

export type ImageGalleryProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & BannerGalleryProps

export const ImageGalleryStyled: React.FC<ImageGalleryProps> = styled.section`
  ${compose(color, flexbox, grid, layout, position, space)}
`

export const ImageGallery: React.FC<ImageGalleryProps> = props => (
  <ImageGalleryStyled
    {...props}
  >
    <BannerGallery {...props} />
  </ImageGalleryStyled>
)
