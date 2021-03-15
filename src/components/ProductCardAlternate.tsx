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
import { QuickShare } from "../components/QuickShare"
import { QuickWishlist } from "./QuickWishlist"

const ProductCardAlternateStyled = styled.article`
  background-color: ${themeGet("colors.background")};
  border-radius: ${themeGet("radii.4")}px;
  box-shadow: 1px 2px 5px 0 rgba(0,0,0,0.1);
  display: inline-grid;
  gap: 1rem;
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
      font-size: 12px;
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

  h3 {
    border-bottom: 1px solid #aeaeae;
    font-size: 18px;
    margin: 0;
    padding-block-end: 1rem;
  }

  .product-information {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    span {
      font-weight: bold;
      font-size: 14px;
    }

    .color {
      color
      gap: 1rem;
    }

    .size {
      color
      gap: 1rem;
    }

    .price {
      font-family: "Tiempos", serif;
      font-weight: 300;
      font-size: 16px;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ProductCardAltProps = ColorProps &
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

export const ProductCardAlternate: React.FC<ProductCardAltProps> = ({
  product,
  ...props
}) => {
  const offer = product?.offers as Offer

  const thumbnail = product?.image?.[0]

  const image = thumbnail ? (
    <img
      alt={product?.name as string}
      itemProp="image"
      src={thumbnail?.contentUrl}
    />
  ) : undefined

  return (
    <ProductCardAlternateStyled>
      {(image && product?.url && (
        <Link
          className="image-container"
          to={product?.url as string}
          title={product?.title as string}
        >
          {image}
        </Link>
      )) ||
        image}
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
          <QuickShare />
          <QuickWishlist product={product} type="icon" />
        </div>
      </div>
      <h3>{product.name}</h3>
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
          title={product?.title as string}
          to={product?.url as string}
          variant="tertiary"
        >
          View product
        </LinkButton>
      </div>
    </ProductCardAlternateStyled>
  )
}

export default ProductCardAlternate
