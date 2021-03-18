import type { MutableRefObject } from "react"

import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
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

import { Button } from "./Button"

const CarouselStyled = styled.section`
  --column-gap: ${props => props.columns > 1 ? (1 / props.columns) * 2 : "0"}rem;
  --column-width: ${props => props.columns ? 100 / props.columns : 100}%;

  position: relative;

  .scrollable-container {
    max-width: 100vw;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    transition-delay: 125ms;
    transition-duration: 125ms;
    transition-property: filter;
    transition-timing-function: ease-in-out;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .items {
    display: grid;
    column-gap: 1rem;
    grid-auto-columns: calc(var(--column-width, 100%) - var(--column-gap, 1rem));
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, calc(var(--column-width, 100%) - var(--column-gap, 1rem)));
  }

  .pickers {
    bottom: 0;
    display: ${props => props.showPickers ? "grid" : "none"};
    grid-auto-flow: column;
    justify-content: center;
    left: 0;
    pointer-events: none;
    position: ${props => props.layout === "overlay" ? "absolute" : "unset"};
    right: 0;
  }

  .item,
  .picker,
  .ui-button {
    transition-duration: 500ms;
    transition-property: filter, opacity;
  }

  .item {
    scroll-snap-align: start;

    &:not(.active) {
      filter: grayscale(80%);
    }
  }

  .picker,
  .ui-button {
    &:not(.active) {
      opacity: 0.25;
    }
  }

  .picker {
    font-size: 2rem;
    pointer-events: auto;
  }

  .ui-button {
    display: ${props => props.showArrows ? "flex" : "none"};
    height: var(--button-height, 24px);
    position: absolute;
    top: calc(50% - (var(--button-height, 24px) * 0.5));
    z-index: 1;
  }

  .ui-button-previous {
    left: -60px;
    transform: rotate(180deg);
  }

  .ui-button-next {
    right: -60px;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type CarouselProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    children: React.ReactNode
    columns?: 1 | 2 | 3 | 4
    layout?: "overlay" | "chrome"
    showArrows?: boolean
    showPickers?: boolean
  }

export const Carousel: React.FC<CarouselProps> = props => {
  const previousButtonRef = useRef() as MutableRefObject<HTMLButtonElement>
  const nextButtonRef = useRef() as MutableRefObject<HTMLButtonElement>
  const pickersRef = useRef() as MutableRefObject<HTMLDivElement>
  const itemsRef = useRef() as MutableRefObject<HTMLDivElement>
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const itemCount = itemsRef.current.childElementCount
    const items = itemsRef.current.children

    if (slideIndex > 0) {
      previousButtonRef.current.classList.add("active")
    } else {
      previousButtonRef.current.classList.remove("active")
    }

    if (slideIndex < itemCount - 1) {
      nextButtonRef.current.classList.add("active")
    } else {
      nextButtonRef.current.classList.remove("active")
    }

    Array.from(items).forEach((item, index) => {
      item.classList.add("item")

      item.addEventListener("click", articleCardClicked, false);

      if (index === slideIndex) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })

    items[slideIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })

    const pickers = pickersRef.current.children

    Array.from(pickers).forEach((picker, index) => {
      if (index === slideIndex) {
        picker.classList.add("active")
      } else {
        picker.classList.remove("active")
      }
    })
  })

  const articleCardClicked = (event) => {
    const items = itemsRef.current.children

    const currentTargetIndex = Array.from(items).indexOf(event.currentTarget)

    setSlideIndex(currentTargetIndex)
  }

  const previousButtonClicked = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    }
  }

  const nextButtonClicked = () => {
    const childElementCount = itemsRef.current.childElementCount
    
    if (slideIndex < childElementCount - 1) {
      setSlideIndex(slideIndex + 1)
    }
  }

  return (
    <CarouselStyled {...props}>
      <div className="scrollable-container">
        <div className="items" ref={itemsRef}>
          {props.children}
        </div>
      </div>
      <div className="pickers" ref={pickersRef}>

        {props.children?.map((_item, index) => (
          <Button className="picker" key={index} onClick={() => setSlideIndex(index)}>
            •
          </Button>
        ))}
      </div>
      <button className={clsx("ui-button", "ui-button-previous")} onClick={previousButtonClicked} ref={previousButtonRef}>
        <Arrow className="ui-button-svg" />
      </button>
      <button className={clsx("ui-button", "ui-button-next")} onClick={nextButtonClicked} ref={nextButtonRef}>
        <Arrow className={clsx("ui-button-svg")} />
      </button>
    </CarouselStyled>
  )
}

export default Carousel
