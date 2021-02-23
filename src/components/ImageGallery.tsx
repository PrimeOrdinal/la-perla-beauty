import clsx from "clsx"
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

import { ReactComponent as Arrow } from "../images/Arrow.svg"
import { ReactComponent as ZoomIn } from "../images/ZoomIn.svg"
import { ReactComponent as Close } from "../images/Close.svg"

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

// function renderCustomControls() {
//   return <button type="button" className='image-gallery-custom-action' onClick={this._customAction.bind(this)} />
// }

const renderLeftNav = (onClick, disabled) => {
  return (
    <button
      className={clsx("ui-button", "image-gallery-left-nav")}
      disabled={disabled}
      onClick={onClick}
    >
      <Arrow className="image-gallery-svg" />
    </button>
  )
}

const renderRightNav = (onClick, disabled) => {
  return (
    <button
      className={clsx("ui-button", "image-gallery-right-nav")}
      disabled={disabled}
      onClick={onClick}
    >
      <Arrow className={clsx("image-gallery-svg", "ui", "zoom-in")} />
    </button>
  )
}

const renderFullscreenButton = (onClick, isFullscreen) => {
  return (
    <button
      className={clsx(
        "ui-button",
        "image-gallery-fullscreen-button",
        isFullscreen ? " active" : undefined
      )}
      onClick={onClick}
      type="button"
    >
      <ZoomIn className={clsx("image-gallery-svg", "ui", "zoom-in")} />
      <Close className={clsx("image-gallery-svg", "ui", "zoom-out")} />
    </button>
  )
}

export const ImageGallery: React.FC<ImageGalleryProps> = props => (
  <ImageGalleryStyled
    renderLeftNav={renderLeftNav}
    renderRightNav={renderRightNav}
    renderFullscreenButton={renderFullscreenButton}
    {...props}
  />
)
