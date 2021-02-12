import type { Offer, Product } from "schema-dts"

import { themeGet } from "@styled-system/theme-get"
import getSymbolFromCurrency from "currency-symbol-map"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { compose, layout, space, LayoutProps, SpaceProps } from "styled-system"

import { ReactComponent as Wishlist } from "../images/Wishlist.svg"
import { ReactComponent as Plus } from "../images/Plus.svg"

import {
  availabilitySchemaToHumanReadableText,
  availabilitySchemaToShortName,
} from "../utils/schema-org"

import { Tag } from "./Tag"
import { mediaQueries } from "../theme"

const ProductCardStyled = styled.article`
  align-content: space-between;
  background: none;
  display: grid;
  gap: ${themeGet("space.5")}px;

  .image-container,
  img {
    background-color: ${themeGet("colors.lightgrey")};
    border-radius: ${themeGet("radii.4")}px;
    display: block;
  }

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  .product-primary {
    display: grid;
    gap: ${themeGet("space.3")}px;
    grid-template-rows: min-content 1fr;
  }

  .product-category-wrapper {
    align-items: center;
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    gap: 1rem;

    svg {
      cursor: pointer;
      height: ${themeGet("space.4")}px;
      margin-right: ${themeGet("space.2")}px;
      object-fit: contain;
      justify-self: end;
    }
  }

  .product-category {
    color: inherit;
    font-size: var(--font-size-body, 13px);
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .product-name {
    align-self: end;
    font-family: "Tiempos Fine";
    font-size: ${themeGet("fontSizes.heading3Desktop")}px;
    font-weight: bold;
    display: inline-block;
    ${mediaQueries.sm} {
      font-size: ${themeGet("fontSizes.5")}px;
    }
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
  const offer = product?.offers as Offer

  const thumbnail = product?.images?.find(({ representativeOfPage }) => representativeOfPage === true)

  const image = thumbnail ? (
    <img
      alt={product?.name as string}
      itemProp="image"
      src={thumbnail?.contentUrl}
    />
  ) : undefined

  return (
    <ProductCardStyled
      itemScope
      itemType="https://schema.org/Product"
      data-id={product?.["@id"]}
      {...props}
    >
      {(showImage && (product?.url && (
        <Link className="image-container" to={product?.url as string} title={product?.title as string}>
          {image}
        </Link>
      ))) ||
        image}
      {offer?.availability && (
        <Tag
          className="availability"
          availability={availabilitySchemaToShortName(offer?.availability)}
        >
          {availabilitySchemaToHumanReadableText(offer?.availability)}
        </Tag>
      )}
      <div className="product-category-wrapper">
        {product?.category?.url && (
          <Link
            className="product-category"
            itemProp="category"
            title={product?.category}
            to={product?.category as string}
          >
            <span itemProp="name">{product?.category}</span>
          </Link>
        )}
        {product?.brand?.name && (
          <span className="product-brand" itemProp="brand">
            {product?.brand?.name}
          </span>
        )}
        <Wishlist />
        <Plus />
      </div>
      {product?.name && (
        <span className="product-name" itemProp="name">
          {product?.name}
        </span>
      )}
      <div
        itemProp="offers"
        itemScope
        itemType="https://schema.org/AggregateOffer"
      >
        {offer && (
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
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
            {offer?.availability && <link itemProp="availability" href={offer?.availability} />}
          </div>
        )}
      </div>
    </ProductCardStyled>
  )
}
