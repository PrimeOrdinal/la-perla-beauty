import type { Offer } from "schema-dts"

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

export type PriceProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    offer: Offer
  }

export const PriceStyled: React.FC<PriceProps> = styled.div`
  font-family: "Tiempos", serif;
  font-size: var(--font-size-heading-4, 18px);
  font-weight: lighter;

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const Price: React.FC<PriceProps> = ({ locale = "en-GB", offer, ...props }) => (
  <PriceStyled
    itemProp="offers"
    itemScope
    itemType="https://schema.org/Offer"
    {...props}
  >
    {new Intl.NumberFormat(locale, { style: 'currency', currency: offer?.priceCurrency }).format(offer?.price)}
    {offer?.availability && (
      <link itemProp="availability" href={offer?.availability as string} />
    )}
  </PriceStyled>
)
