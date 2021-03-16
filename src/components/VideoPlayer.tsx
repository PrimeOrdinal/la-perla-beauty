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

import { getContent, LayoutStyled } from "./Banner"

export type VideoPlayerProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & ReactPlayer & {
    aspectRatio: string
  }

export const VideoPlayerStyled: React.FC<VideoPlayerProps> = styled.div`
  position: relative;

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => (
  <LayoutStyled layout="video" {...props}>
    <VideoPlayerStyled aspect-ratio={props.aspectRatio} className="media">
      <ReactPlayer
        className="react-player"
        controls={false}
        height="100%"
        light={props.image?.url}
        loop={true}
        playIcon={
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <FiPlay />
          </IconContext.Provider>
        }
        playing={true}
        playsinline={true}
        url={props.video?.url}
        width="100%"
        {...props}
      />
    </VideoPlayerStyled>
    {getContent({...props, layout: "video"})}
  </LayoutStyled>
)
