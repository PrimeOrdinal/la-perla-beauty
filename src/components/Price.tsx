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

export type PriceProps = ColorProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const PriceStyled: React.FC<PriceProps> = styled.div`
  &:disabled {
    color: "disabled";
    cursor: "not-allowed";
  }

  ${compose(color, layout, position, space)}
`

export const Price: React.FC<PriceProps> = props => (
  <PriceStyled itemProp="offers" itemScope itemType="https://schema.org/Offer" {...props}>
    Price: $<span itemProp="price">6.99</span>
    <meta itemProp="priceCurrency" content="USD" />
    <link itemProp="availability" href="https://schema.org/InStock" />In Stock
  </PriceStyled>
)
