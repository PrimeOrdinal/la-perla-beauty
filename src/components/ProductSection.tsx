import type { Offer, Product } from "schema-dts"

import React from "react"
import styled from "styled-components"
import {
  compose,
  layout,
  space,
  LayoutProps,
  SpaceProps,
} from "styled-system"

const ProductSectionStyled = styled.section`
  display: grid;
  grid-auto-flow: column;
  padding: ${props => props.theme.space[3]}px;

  ${compose(layout, space)}
`


export type ProductSectionProps = LayoutProps & SpaceProps & { product: Product }

export const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  return (
  <ProductSectionStyled itemScope itemType="https://schema.org/Product">
    <span itemProp="name">{product.name}</span>
    <img itemProp="image" src="kenmore-microwave-17in.jpg" alt={`Kenmore 17" Microwave`} />
    <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
    Rated <span itemProp="ratingValue">3.5</span>/5
    based on <span itemProp="reviewCount">11</span> customer reviews
    </div>

    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
      <span itemProp="priceCurrency" content="USD">$</span>
      <span itemProp="price" content={product.price}>{product.price}</span>
      <link itemProp="availability" href="https://schema.org/InStock" />In stock
    </div>

    Product description:
    <span itemProp="description">0.7 cubic feet countertop microwave.
    Has six preset cooking categories and convenience features like
    Add-A-Minute and Child Lock.</span>

    Customer reviews:

    <div itemProp="review" itemScope itemType="https://schema.org/Review">
      <span itemProp="name">Not a happy camper</span> -
      by <span itemProp="author">Ellie</span>,
      <meta itemProp="datePublished" content="2011-04-01" />April 1, 2011
      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="worstRating" content = "1" />
        <span itemProp="ratingValue">1</span>/
        <span itemProp="bestRating">5</span>stars
      </div>
      <span itemProp="reviewBody">The lamp burned out and now I have to replace
      it. </span>
    </div>

    <div itemProp="review" itemScope itemType="https://schema.org/Review">
      <span itemProp="name">Value purchase</span> - by <span itemProp="author">Lucas</span>,
      <meta itemProp="datePublished" content="2011-03-25" />March 25, 2011
      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="worstRating" content = "1" />
        <span itemProp="ratingValue">4</span>/
        <span itemProp="bestRating">5</span>stars
      </div>
      <span itemProp="reviewBody">Great microwave for the price. It is small and fits in my apartment.</span>
    </div>
  </ProductSectionStyled>
  )
}

