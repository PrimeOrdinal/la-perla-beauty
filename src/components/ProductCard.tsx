import type { Offer, Product } from "schema-dts"
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
  grid-auto-flow: row;
  gap: 1rem;
  /* padding: ${props => props.theme.space[3]}px; */

  img {
    width: 100%;
    border-radius: 20px;
  }

  .pre-order-banner {
    display: block;
    text-align: center;
    background: ${theme.colors.secondary};
    padding: 0.25rem;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: ${theme.fontSizes[0]}rem;
  }
  .product-type-wrapper {
    display: flex;
    align-items: center;
    .product-type {
      text-decoration: none;
      color: inherit;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      flex: 0.8;
    }
    svg {
      height: 18px;
      object-fit: contain;
      flex: 0.1;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 0.75rem;
      }
    }
  }

  .product-brand {
    font-family: "Tiempus";
    font-size: 1.125rem;
    font-weight: bold;
    align-self: end;
  }
  .product-price {
    font-family: "Tiempus";
    font-size: 1rem;
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

      <span className="product-brand" itemProp="brand">
        {product.name}
      </span>
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
