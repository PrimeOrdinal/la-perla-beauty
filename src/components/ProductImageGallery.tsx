import type { MutableRefObject } from "react"

import clsx from "clsx"
import React, { useRef, useState } from "react"
import ReactProductImageGallery from "react-image-gallery"
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

import { ReactComponent as Arrow } from "../../static/icons/Arrow.svg"
import { ReactComponent as ZoomIn } from "../../static/icons/ZoomIn.svg"
import { ReactComponent as Close } from "../../static/icons/Close.svg"

import "./ProductImageGallery.css"

export type ProductImageGalleryProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    showPlayButton: boolean
  }

export const ProductImageGalleryStyled: React.FC<ProductImageGalleryProps> = styled(
  ReactProductImageGallery
)`
  ${compose(color, flexbox, grid, layout, position, space)}
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

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({showPlayButton=false, ...props}) => {
  let [isFullScreen, setIsFullScreen] = useState(false)
  let [zoomed, setZoomed] = useState(false)
  let [dragged, setDragged] = useState(0)

  let imageContainer = useRef() as MutableRefObject<HTMLDivElement>

  function handleClick(event) {
    addDragBehaviour(event)
    setScrollPosition(event)
  }

  function setScrollPosition(event) {
    if (!isFullScreen) {
      return
    }

    if (dragged > 0) {
      return
    }

    const img = event.target

    imageContainer.current = img

    img.className = "tile"

    if (imageContainer?.current) {
      const containerRect = imageContainer.current.getBoundingClientRect()
      const imageRect = imageContainer.current.firstElementChild?.getBoundingClientRect() as DOMRect

      const offsetX = event.clientX - containerRect.left // x position within the element bounds
      const offsetY = event.clientY - containerRect.top // y position within the element bounds

      const posX = offsetX + imageContainer.current.scrollTop // x click position within entire element
      const posY = offsetY + imageContainer.current.scrollTop // x click position within entire element

      const percentX = (posX / imageRect.width) * 100 // x click position within entire element as percentage
      const percentY = (posY / imageRect.height) * 100 // x click position within entire element as percentage

      const scrollX =
        (imageRect.width / 100) * percentX * (zoomed ? 0.5 : 2)
      const scrollY =
        (imageRect.height / 100) * percentY * (zoomed ? 0.5 : 2)

      const scrollXoffset = scrollX - containerRect.width * 0.5
      const scrollYoffset = scrollY - containerRect.height * 0.5

      setZoomed(!zoomed)

      setTimeout(() => {
        imageContainer.current.scroll({
          left: scrollXoffset,
          top: scrollYoffset,
        })
      }, 5)
    }
  }

  function addDragBehaviour(event) {
    // console.log("event", event)

    if (!isFullScreen) {
      return
    }

    const img = event.target

    imageContainer.current = img

    img.className = "drag"

    // const slider = document.querySelector('.items')
    const slider = imageContainer.current
    let isDown = false
    let startY
    let scrollTop

    slider.addEventListener('mousedown', (e) => {
      isDown = true
      slider.classList.add('active')
      startY = e.pageY - slider.offsetTop
      scrollTop = slider.scrollTop

      setDragged(0)
    })

    slider.addEventListener('mouseleave', () => {
      isDown = false
      slider.classList.remove('active')
    })

    slider.addEventListener('mouseup', () => {
      isDown = false
      slider.classList.remove('active')
    })

    slider.addEventListener('mousemove', (e) => {
      if(!isDown) {
        return
      }

      e.preventDefault()

      const x = e.pageY - slider.offsetTop
      const walk = (x - startY) * 3 //scroll-fast

      const difference = scrollTop - walk

      slider.scrollTop = difference

      setDragged(difference)

      // console.log(walk)
    });
  }

  function onScreenChange(fullScreenElem) {
    if (fullScreenElem) {
      setIsFullScreen(true)
    } else {
      setIsFullScreen(false)
    }
  }

  return (
    <ProductImageGalleryStyled
      additionalClass={zoomed ? "zoomed" : undefined}
      onClick={handleClick}
      onScreenChange={onScreenChange}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      renderFullscreenButton={renderFullscreenButton}
      showPlayButton={showPlayButton}
      {...props}
    />
  )
}
