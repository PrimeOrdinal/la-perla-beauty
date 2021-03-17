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

import { ArticleCard, ArticleCardProps } from "./ArticleCard"
import { Button } from "./Button"

const ArticleCardGalleryStyled = styled.section`
  position: relative;

  .title {
    font-size: var(--font-size-lg, 18px);
  }

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
    grid-auto-columns: calc(33.33% - 0.66rem);
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, calc(33.33% - 0.66rem));
    margin-block-start: 2rem;
  }

  .pickers {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
  }

  .article-card,
  .picker,
  .ui-button {
    transition-duration: 500ms;
    transition-property: filter, opacity;
  }

  .article-card {
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
  }

  .ui-button {
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

export type ArticleCardGalleryProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: ArticleCardProps[]
    text: string
    title: string
  }

export const ArticleCardGallery: React.FC<ArticleCardGalleryProps> = props => {
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
    <ArticleCardGalleryStyled>
      {props.title && <h1 className="title">{props.title}</h1>}
      {props.text && <p className="text">{props.text}</p>}
      <div className="scrollable-container">
        <div className="items" ref={itemsRef}>
          {props.items?.map((item, index) => (
            <ArticleCard
              {...item}
              className="article-card"
              key={index}
              onClick={articleCardClicked}
              titlePosition={index % 2 == 0 ? "bottom" : "top"}
            />
          ))}
        </div>
      </div>
      <div className="pickers" ref={pickersRef}>
        {props.items?.map((_item, index) => (
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
    </ArticleCardGalleryStyled>
  )
}

export default ArticleCardGallery
