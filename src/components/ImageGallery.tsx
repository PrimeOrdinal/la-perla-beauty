import { themeGet } from "@styled-system/theme-get"
import React from "react"
import ReactImageGallery from "react-image-gallery"
import styled from "styled-components"
import {
  compose,
  layout,
  position,
  space,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import "./ImageGallery.css"

export type ImageGalleryProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    showPlayButton: boolean
  }

export const ImageGalleryStyled: React.FC<ImageGalleryProps> = styled(
  ReactImageGallery
)`  
  ${compose(layout, position, space)}
`

export const ImageGallery: React.FC<ImageGalleryProps> = props => (
  <ImageGalleryStyled {...props} />
)
