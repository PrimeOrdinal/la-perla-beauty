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

function onMouseOver(event) {
  const img = event.target;
  const topOffset = img.offsetTop;
  const leftOffset = img.offsetLeft;
  const height = img.height;
  const width = img.width;

  img.style.transformOrigin =
    ((event.pageX - leftOffset) / width) * 50 +
    "% " +
    ((event.pageY - topOffset) / height) * 50 +
    "%";
}

export const ImageGallery: React.FC<ImageGalleryProps> = props => {
  let [isFullScreen, setIsFullScreen] = useState(false);
  let [hasRegistered, setHasRegistered] = useState(false);

  let image = useRef(null);

  function handleClick(event) {
    if (!isFullScreen) {
      return;
    }

    const img = event.target;

    image.current = img;

    img.className = "tile";

    if (img.style.transform === "scale(2.5)") {
      // here we are zooming out
      img.style.transform = "scale(1)";
      img.style.cursor = "zoom-in";
      img.removeEventListener("mousemove", onMouseOver);
      setHasRegistered(false);
      return;
    }

    // here we are zooming in
    img.style.transform = "scale(2.5)";
    img.style.cursor = "zoom-out";

    if (!hasRegistered) {
      img.addEventListener("mousemove", onMouseOver);
      setHasRegistered(true);
    }
  }

  function onScreenChange(fullScreenElem) {
    if (fullScreenElem) {
      setIsFullScreen(true);

      if (image?.current) {
        image.current.style.cursor = "zoom-in";
      }
    } else {
      setIsFullScreen(false);

      if (image?.current) {
        image.current.style.cursor = "auto";
        image.current.style.transform = "scale(1)";
        image.current.removeEventListener("mousemove", onMouseOver);
      }
    }
  }

  return (
    <ImageGalleryStyled
      onClick={handleClick}
      onScreenChange={onScreenChange}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      renderFullscreenButton={renderFullscreenButton}
      {...props}
    />
  )
}
