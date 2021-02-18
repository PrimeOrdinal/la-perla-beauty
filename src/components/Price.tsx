import getSymbolFromCurrency from "currency-symbol-map"
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
  font-family: "Tiempos";

  &:disabled {
    color: "disabled";
    cursor: "not-allowed";
  }

  ${compose(color, layout, position, space)}
`

export const Price: React.FC<PriceProps> = ({offer, ...props}) => (
  <PriceStyled
    itemProp="offers"
    itemScope
    itemType="https://schema.org/Offer"
    {...props}
  >
    <span
      itemProp="priceCurrency"
      content={offer?.priceCurrency as string}
      className="product-price"
    >
      {getSymbolFromCurrency(offer?.priceCurrency as string)}
    </span>
    <span
      className="product-price"
      itemProp="price"
      content={offer?.price as number}
    >
      {offer?.price}
    </span>
    {offer?.availability && (
      <link itemProp="availability" href={offer?.availability as string} />
    )}
  </PriceStyled>
)
