import React from "react"
import ReactPlayer from "react-player/lazy"
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

export type VideoPlayerProps = 
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
      
  }

export const VideoPlayerStyled: React.FC<VideoPlayerProps> = styled.div`
  ${compose(layout, position, space)}
`

export const VideoPlayer: React.FC<VideoPlayerProps> = props => (
  <ReactPlayer {...props} />
)
