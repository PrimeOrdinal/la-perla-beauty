import React from "react"
import ReactImageGallery from 'react-image-gallery';
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

export type ImageGalleryProps = 
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const ImageGalleryStyled: React.FC<ImageGalleryProps> = styled(ReactImageGallery)`
  background: red;

  ${compose(layout, position, space)}
`

export const ImageGallery: React.FC<ImageGalleryProps> = props => (
  <ImageGalleryStyled {...props} showPlayButton={props.showPlayButton || false} />
)
 