import { IconContext } from "@react-icons/all-files"
import { FiPlay } from "@react-icons/all-files/fi/FiPlay"
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

// import Profile from "../../static/icons/Profile.svg"

export type VideoPlayerProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const VideoPlayerStyled: React.FC<VideoPlayerProps> = styled(
  ReactPlayer
)`
  ${compose(layout, position, space)}
`

export const VideoPlayer: React.FC<VideoPlayerProps> = props => (
  <VideoPlayerStyled
    playIcon={
      <IconContext.Provider value={{ color: "white", size: "2rem" }}>
        <FiPlay />
      </IconContext.Provider>
    }
    {...props}
  />
)
