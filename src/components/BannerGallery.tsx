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

export type BannerGalleryProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const BannerGalleryStyled: React.FC<BannerGalleryProps> = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  & > * {
    scroll-snap-align: start;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const BannerGallery: React.FC<BannerGalleryProps> = ({
  children,
  ...props
}) => (
  <BannerGalleryStyled
    {...props}
  >
    {children}
  </BannerGalleryStyled>
)
