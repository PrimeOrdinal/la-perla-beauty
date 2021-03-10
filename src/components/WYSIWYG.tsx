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

export type WYSIWYGProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    markup: string
  }

export const WYSIWYGStyled: React.FC<WYSIWYGProps> = styled.div`
  ${compose(color, flexbox, grid, layout, position, space)}
`

export const WYSIWYG: React.FC<WYSIWYGProps> = ({ markup }) => (
  <WYSIWYGStyled
    dangerouslySetInnerHTML={{
      __html: markup as string,
    }}
  />
)
