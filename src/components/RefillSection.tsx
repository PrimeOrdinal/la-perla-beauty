import React from "react"
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

export type RefillSectionProps = 
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const RefillSectionStyled: React.FC<RefillSectionProps> = styled.div`
  column-gap: 2rem;  
  display: grid;
  grid-template-columns: repeat(6,1fr);
  justify-items: start;

  ${compose(layout, position, space)}
`

export const RefillSection: React.FC<RefillSectionProps> = props => (
  <RefillSectionStyled {...props} className="form-field">
    <div></div>
  </RefillSectionStyled>
)
