import { IconContext } from "@react-icons/all-files"
import { FiPlay } from "@react-icons/all-files/fi/FiPlay"
import React from "react"
import ReactPlayer from "react-player/lazy"
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

export type VideoPlayerProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    aspectRatio: string
  }

export const VideoPlayerStyled: React.FC<VideoPlayerProps> = styled.div`
  padding-top: 56.25%;
  position: relative;

  .react-player {
    left: 0;
    position: absolute;
    top: 0;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  aspectRatio,
  ...props
}) => (
  <VideoPlayerStyled aspect-ratio={aspectRatio}>
    <ReactPlayer
      className="react-player"
      controls={false}
      height="100%"
      loop={false}
      playIcon={
        <IconContext.Provider value={{ color: "white", size: "2rem" }}>
          <FiPlay />
        </IconContext.Provider>
      }
      playing={true}
      playsinline={true}
      width="100%"
      {...props}
    />
  </VideoPlayerStyled>
)
