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

import { Banner, BannerProps } from "./Banner"
import { Carousel } from "./Carousel"

export type BannerGalleryProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items: BannerProps[]
    text: string
    title: string
  }

export const BannerGalleryStyled: React.FC<BannerGalleryProps> = styled.section`
  ${compose(color, flexbox, grid, layout, position, space)}
`

export const BannerGallery: React.FC<BannerGalleryProps> = props => (
  <BannerGalleryStyled {...props}>
    <Carousel {...props}>
      {props.items?.map((item, index) => (
        <Banner className="item" key={index} layout={props.layout} {...item} />
      ))}
    </Carousel>
  </BannerGalleryStyled>
)
