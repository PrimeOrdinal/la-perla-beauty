import type { MutableRefObject } from "react"

import clsx from "clsx"
import React, { useRef, useState } from "react"
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

import { ReactComponent as Arrow } from "../../static/icons/Arrow.svg"
import { ReactComponent as ZoomIn } from "../../static/icons/ZoomIn.svg"
import { ReactComponent as Close } from "../../static/icons/Close.svg"

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

export const ImageGallery: React.FC<ImageGalleryProps> = props => {
  let [isFullScreen, setIsFullScreen] = useState(false)
  let [hasRegistered, setHasRegistered] = useState(false)

  let image = useRef() as MutableRefObject<HTMLDivElement>

  function handleClick(event) {
    if (!isFullScreen) {
      return
    }

    const img = event.target

    image.current = img

    img.className = "tile"

    if (image?.current) {
      const containerRect = image.current.getBoundingClientRect()
      const imageRect = image.current.firstElementChild?.getBoundingClientRect() as DOMRect

      const offsetX = event.clientX - containerRect.left // x position within the element bounds
      const offsetY = event.clientY - containerRect.top // y position within the element bounds

      const posX = offsetX + image.current.scrollLeft // x click position within entire element
      const posY = offsetY + image.current.scrollTop // x click position within entire element

      const percentX = (posX / imageRect.width) * 100 // x click position within entire element as percentage
      const percentY = (posY / imageRect.height) * 100 // x click position within entire element as percentage

      const scrollX = (imageRect.width / 100) * percentX * (hasRegistered ? 0.5 : 2)
      const scrollY = (imageRect.height / 100) * percentY * (hasRegistered ? 0.5 : 2)

      const scrollXoffset = scrollX - containerRect.width * 0.5
      const scrollYoffset = scrollY - containerRect.height * 0.5

      setHasRegistered(!hasRegistered)

      setTimeout(() => {
        image.current.scroll({
          left: scrollXoffset,
          top: scrollYoffset,
        })
      }, 5)
    }
  }

  function onScreenChange(fullScreenElem) {
    if (fullScreenElem) {
      setIsFullScreen(true)
    } else {
      setIsFullScreen(false)
    }
  }

  return (
    <ImageGalleryStyled
      additionalClass={hasRegistered ? "zoomed" : undefined}
      onClick={handleClick}
      onScreenChange={onScreenChange}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      renderFullscreenButton={renderFullscreenButton}
      {...props}
    />
  )
}
