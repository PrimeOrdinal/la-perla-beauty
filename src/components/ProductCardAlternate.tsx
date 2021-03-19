import type { Offer, Product } from "schema-dts"

import type { Colour as ColourProp } from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
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

import { Link, LinkButton } from "./Button"
import { Price } from "./Price"
import { QuickBuy } from "../components/QuickBuy"
import { ShareOverlay } from "../components/ShareOverlay"
import { QuickWishlist } from "./QuickWishlist"

const ProductCardAlternateStyled = styled.article`
  background-color: ${themeGet("colors.background")};
  border-radius: ${themeGet("radii.4")}px;
  box-shadow: 1px 2px 5px 0 rgba(0,0,0,0.1);
  display: inline-grid;
  margin-block-end: 1rem;
  margin-block-start: 5rem;
  padding: 34px;

  .image-container {
    margin-block-start: -5rem;
  }

  .product-category-wrapper {
    align-items: center;
    display: grid;
    gap: 0.5rem;
    grid-auto-flow: column;
    justify-content: end;
  }

  .product-type {
    display: flex;
    justify-content: space-between;

    span {
      font-size: ${themeGet("fontSizes.1")}px;
      text-transform: uppercase;
    }
  }

  .product-actions {
    display: grid;

    &.icons {
      grid-auto-flow: column;
    }

    &.text {
      gap: 1rem;
    }

    img {
      width: 21px;
      height: 18px;
    }
  }

  .product-name {
    border-bottom: 1px solid #aeaeae;
    font-size: ${themeGet("fontSizes.5")}px;
    margin: 0;
  }

  .product-information,
  .product-name {
    padding-block-end: 1rem;
  }

  .product-information {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    padding-block-start: 1rem;

    span {
      font-size: ${themeGet("fontSizes.3")}px;
    }

    .label {
      font-weight: bold;
      text-transform: uppercase;
    }

    .color {
      gap: 1rem;
    }

    .size {
      gap: 1rem;
    }

    .price {
      font-family: "Tiempos", serif;
      font-weight: 300;
      font-size: ${themeGet("fontSizes.4")}px;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ProductCardAlternateProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    colour?: ColourProp
    product: Product
    variantType: "color" | "size"
  }

export const ProductCardAlternate: React.FC<ProductCardAlternateProps> = ({
  product,
  ...props
}) => {
  const offer = product?.offers as Offer

  const thumbnail = product?.image?.[0]

  const image = thumbnail ? (
    <img
      alt={product?.name}
      itemProp="image"
      src={thumbnail?.contentUrl}
    />
  ) : undefined

  return (
    <ProductCardAlternateStyled>
      {(image && product?.url && (
        <Link
          className="image-container"
          to={product?.url}
          title={product?.title}
        >
          {image}
        </Link>
      )) ||
        <div className="image-container">{image}</div>}
      <div className="product-type">
        <div className="product-category-wrapper">
          {Array.isArray(product?.category) &&
            product?.category
              .map(category => (
                <Link
                  className="product-category"
                  id={category?.identifier}
                  key={category?.identifier}
                  itemProp="category"
                  title={category?.name}
                  to={category?.url}
                >
                  <span itemProp="name">{category?.name}</span>
                </Link>
              ))
              .pop()}
        </div>
        <div className={clsx("product-actions", "icons")}>
          <ShareOverlay />
          <QuickWishlist product={product} type="icon" />
        </div>
      </div>
      {product?.name && (
        <span className="product-name" itemProp="name">
          {product?.name}
        </span>
      )}
      <div className="product-information">
        {(props.variantType === "size" && (
          <div className="size">
            <span className="label">Size</span> |{" "}
            <span className="value">{product?.size?.value}</span>
            <span className="unitText">{product?.size?.unitText}</span>
          </div>
        )) ||
          (props.variantType === "color" && (
            <div className="color">
              <span className="label">Colour</span> |{" "}
              <span className="value">{product?.color}</span>
            </div>
          ))}
        {offer && <Price display={{ _: "none", md: "block" }} offer={offer} />}
      </div>
      <div className={clsx("product-actions", "text")}>
        <QuickBuy product={product} showPrice={false} showVariants={false} />
        <LinkButton
          title={product?.title}
          to={product?.url}
          variant="tertiary"
        >
          View product
        </LinkButton>
      </div>
    </ProductCardAlternateStyled>
  )
}

export default ProductCardAlternate
