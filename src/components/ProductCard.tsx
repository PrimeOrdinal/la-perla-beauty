import type { Offer, Product } from "schema-dts"

import { themeGet } from "@styled-system/theme-get"
import { theme } from "../theme"
import getSymbolFromCurrency from "currency-symbol-map"
import React from "react"
import styled from "styled-components"
import { compose, layout, space, LayoutProps, SpaceProps } from "styled-system"
import { ReactComponent as Wishlist } from "../images/Wishlist.svg"
import { ReactComponent as Plus } from "../images/Plus.svg"

const ProductCardStyled = styled.article`
  background: none;
  display: grid;
  gap: 1rem;
  grid-auto-flow: row;

  img {
    border-radius: 20px;
    width: 100%;
  }

  .pre-order-banner {
    background: ${themeGet("colors.orange")};
    border-radius: 5px;
    display: block;
    font-size: ${themeGet("fontSizes.small")}px;
    padding: 0.25rem;
    text-align: center;
    text-transform: uppercase;
  }

  .product-type-wrapper {
    align-items: center;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;

    .product-type {
      color: inherit;
      font-size: 0.75rem;
      letter-spacing: 1px;
      text-decoration: none;
      text-transform: uppercase;
    }

    svg {
      cursor: pointer;
      height: 18px;
      object-fit: contain;
      justify-self: end;
    }
  }

  .product-brand {
    align-self: end;
    font-family: "Tiempos";
    font-size: ${themeGet("fontSizes.5")}px;
    font-weight: bold;
    display: inline-block;
  }

  .product-price {
    font-family: "Tiempos";
    font-size: ${themeGet("fontSizes.heading2Desktop")}px;
  }

  ${compose(layout, space)}
`

export type ProductCardProps = LayoutProps &
  SpaceProps & { product: Product; showImage: boolean }

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showImage = true,
  ...props
}) => {
  const offer = product.offers as Offer

  return (
    <ProductCardStyled
      itemScope
      itemType="https://schema.org/Product"
      data-id={product["@id"]}
      {...props}
    >
      {showImage && (
        <img
          alt={product.name as string}
          itemProp="image"
          src="https://via.placeholder.com/282"
        />
      )}
      <span className="pre-order-banner">Pre-Order</span>
      <div className="product-type-wrapper">
        <a className="product-type" itemProp="url" href={product.url as string}>
          <span itemProp="name">{product.name}</span>
        </a>
        <Wishlist />
        <Plus />
      </div>

      {product.brand && (
        <span className="product-brand" itemProp="brand">
          {product.brand}
        </span>
      )}
      {/* <div
        itemProp="aggregateRating"
        itemScope
        itemType="https://schema.org/AggregateRating"
      >
        <span itemProp="ratingValue">87</span>
        out of <span itemProp="bestRating">100</span>
        based on <span itemProp="ratingCount">24</span> user ratings
      </div> */}
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
              className="product-price"
            >
              {getSymbolFromCurrency(offer.priceCurrency as string)}£
            </span>
            <span
              className="product-price"
              itemProp="price"
              content={offer?.price as number}
            >
              {product.price}50
            </span>
            <link itemProp="availability" href="https://schema.org/InStock" />
            {/* In stock */}
          </div>
        )}
      </div>
    </ProductCardStyled>
  )
}
