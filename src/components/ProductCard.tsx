import type { Offer, Product } from "schema-dts"

import getSymbolFromCurrency from "currency-symbol-map"
import React, { ReactElement } from "react"
import styled from "styled-components"

const StyledProductCard = styled.article`
  background-color: #eeeeee;

  img {
    width: 100%;
  }

  div {
    padding: 1rem;
  }
`

export const ProductCard = ({
  product,
}: {
  product: Product
}): ReactElement => {
  const offer = product.offers as Offer

  return (
    <StyledProductCard
      data-id={product["@id"]}
      itemScope
      itemType="https://schema.org/Product"
    >
      <img
        alt={product.name as string}
        itemProp="image"
        src="https://via.placeholder.com/250"
      />
      <a itemProp="url" href={product.url as string}>
        <span itemProp="name">{product.brand}</span>
      </a>
      <div
        itemProp="aggregateRating"
        itemScope
        itemType="https://schema.org/AggregateRating"
      >
        <span itemProp="ratingValue">87</span>
        out of <span itemProp="bestRating">100</span>
        based on <span itemProp="ratingCount">24</span> user ratings
      </div>
      <div
        itemProp="offers"
        itemScope
        itemType="https://schema.org/AggregateOffer"
      >
        {offer && (
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            {/* <span
              itemProp="acceptedPaymentMethod"
              content={offer?.acceptedPaymentMethod}
            >
              {offer?.acceptedPaymentMethod}
            </span> */}
            <span
              itemProp="priceCurrency"
              content={offer?.priceCurrency as string}
            >
              {getSymbolFromCurrency(offer?.priceCurrency)}
            </span>
            <span itemProp="price" content={offer?.price as number}>
              1,000.00
            </span>
            <link itemProp="availability" href="https://schema.org/InStock" />
            In stock
          </div>
        )}
      </div>
    </StyledProductCard>
  )
}

export default ProductCard
