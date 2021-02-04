import type { Offer, Product } from "schema-dts"

import { themeGet } from "@styled-system/theme-get"
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
    background: ${themeGet("colors.pink")};
    border-radius: 5px;
    display: block;
    font-size: ${themeGet("fontSizes.small")}px;
    padding: 0.25rem;
    text-align: center;
    text-transform: uppercase;
  }

  .product-type-wrapper {
    align-items: center;
    display: flex;

    .product-type {
      color: inherit;
      flex: 0.8;
      font-size: 0.75rem;
      letter-spacing: 1px;
      text-decoration: none;
      text-transform: uppercase;
    }

    svg {
      cursor: pointer;
      flex: 0.1;
      height: 18px;
      object-fit: contain;

      &:not(:last-child) {
        margin-right: 0.75rem;
      }
    }
  }

  .product-brand {
    align-self: end;
    font-family: "Tiempus";
    font-size: ${themeGet("fontSizes.5")}px;
    font-weight: bold;
  }

  .product-price {
    font-family: "Tiempus";
    font-size: ${themeGet("fontSizes.body")}px;
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
          src="https://via.placeholder.com/300"
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

      {product.brand && <span className="product-brand" itemProp="brand">{product.brand}</span>}
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
              {product.price}1,900.00
            </span>
            <link itemProp="availability" href="https://schema.org/InStock" />
            {/* In stock */}
          </div>
        )}
      </div>
    </ProductCardStyled>
  )
}
