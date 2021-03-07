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

export type RefillSectionProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const RefillSectionStyled: React.FC<RefillSectionProps> = styled.div`
  column-gap: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: start;

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const RefillSection: React.FC<RefillSectionProps> = props => (
  <RefillSectionStyled {...props} className="form-field">
    <div></div>
  </RefillSectionStyled>
)
