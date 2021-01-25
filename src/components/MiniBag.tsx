import React from "react"
import styled from "styled-components"
import {
  color,
  compose,
  layout,
  position,
  space,
  ColorProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type MiniBagProps = ColorProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const MiniBagStyled: React.FC<MiniBagProps> = styled.div`
  font-family: "inherit";

  &:disabled: {
    color: "disabled",
    cursor: "not-allowed",
  }

  ${compose(color, layout, position, space)}
`

export const MiniBag: React.FC<MiniBagProps> = props => (
  <MiniBagStyled {...props}>Mini bag</MiniBagStyled>
)
