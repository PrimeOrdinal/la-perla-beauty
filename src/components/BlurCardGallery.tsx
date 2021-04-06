import React from "react"
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

import { useMediaQuery } from "../hooks/useMediaQuery"

import { mediaQueries } from "../theme"

import { BlurCard, BlurCardProps } from "./BlurCard"
import { Carousel } from "./Carousel"

export type BlurCardGalleryProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: BlurCardProps[]
    text: string
    title: string
  }

export const BlurCardGalleryStyled: React.FC<BlurCardGalleryProps> = styled.section`
  ${mediaQueries.smDown} {
    
  }

  .mobile-gallery {
    aspect-ratio: 2/3;
    position: relative;
    transition-duration: 150ms;
    transition-property: transform;

    .item {
      bottom: 0;
      position: absolute;
      right: var(--app-gutter-x, 0.75rem);
      transition-duration: 150ms;
      transition-property: transform;
      width: calc(100% - calc(var(--app-gutter-x, 0.75rem) * 2 * 2));

      :nth-child(1) {
        transform: translate3d(calc(var(--app-gutter-x, 0.75rem) * -0), calc(var(--app-gutter-x, 0.75rem) * -0), calc(var(--app-gutter-x, 0.75rem) * 0));
      }

      :nth-child(2) {
        transform: translate3d(calc(var(--app-gutter-x, 0.75rem) * -1), calc(var(--app-gutter-x, 0.75rem) * -1), calc(var(--app-gutter-x, 0.75rem) * 1));
      }

      :nth-child(3) {
        transform: translate3d(calc(var(--app-gutter-x, 0.75rem) * -2), calc(var(--app-gutter-x, 0.75rem) * -2), calc(var(--app-gutter-x, 0.75rem) * 2));
      }
    }

    &.item-1 {

    }

    &.item-2 {
      transform: translate3d(calc(var(--app-gutter-x, 0.75rem) * 2), calc(var(--app-gutter-x, 0.75rem) * 2), calc(var(--app-gutter-x, 0.75rem) * 2));

      :nth-child(1) {
        transform: translate3d(-100vw, -100vh, 10rem);
      }
    }

    &.item-3 {
      :nth-child(1) {
        transform: translate3d(-100vw, -100vh, 10rem);
      }

      :nth-child(2) {
        transform: translate3d(-110vw, -110vh, 11rem);
      }
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const BlurCardGallery: React.FC<BlurCardGalleryProps> = props => {
  const isMobile = useMediaQuery(mediaQueries.smDown)

  return (
    <BlurCardGalleryStyled {...props}>
      {isMobile ? (
        <div className="mobile-gallery" {...props}>
          {props.items?.map((item, index) => (
            <BlurCard
              className="item"
              key={index}
              layout={props.layout}
              {...item}
            />
          ))}
        </div>
      ) : (
        <Carousel itemGap="3" showPickers visibleItems={3} {...props}>
          {props.items?.map((item, index) => (
            <BlurCard
              className="item"
              key={index}
              layout={props.layout}
              {...item}
            />
          ))}
        </Carousel>
      )}
    </BlurCardGalleryStyled>
  )
}
