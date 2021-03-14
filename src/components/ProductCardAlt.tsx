import type { Offer, Product } from "schema-dts"

import type { Colour as ColourProp } from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
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

import Share from "../../static/icons//Share.svg"
import WishlistAbsent from "../../static/icons//WishlistAbsent.svg"

import { Link } from "./Button"
import { Price } from "./Price"
import { QuickWishlist } from "./QuickWishlist"

const ProductCardAltStyled = styled.article`
  background-color: ${themeGet("colors.background")};
  border-radius: ${themeGet("radii.4")}px;
  display: inline-grid;
  gap: 1rem;
  margin-block-end: 1rem;
  margin-block-start: 5rem;
  padding: 34px;

  .image-container {
    margin-block-start: -5rem;
  }

  .productType {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 12px;
      text-transform: uppercase;
    }

    .productIcons {
      display: grid;
      gap: 1rem;
      grid-auto-flow: column;

      img {
        width: 21px;
        height: 18px;
      }
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

export const ProductCardAlt: React.FC<ProductCardAltProps> = ({
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
    <ProductCardAltStyled>
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
      <div className="productType">
        {props.category && <span>{props.category}</span>}
        <div className="productIcons">
          <img className="img-bl" src={Share} alt="share" />
          <img className="img-bl" src={WishlistAbsent} alt="like" />
        </div>
      </div>
      <h3>{props.name}</h3>
      <div className="product-information">
        {(props.variantType === "size" && (
          <div className="product-information">
            <span className="label">Size</span> |{" "}
            <span className="value">{props.product?.size}</span>
          </div>
        )) ||
          (props.variantType === "color" && (
            <div className="product-information">
              <span className="label">Colour</span> |{" "}
              <span className="value">{props.product?.color}</span>
            </div>
          ))}
        {offer && <Price display={{ _: "none", md: "block" }} offer={offer} />}
      </div>
      <div className="product-actions">
        <QuickWishlist product={product} />
        <Link
          title={product?.title as string}
          to={product?.url as string}
          variant="tertiary"
        >
          View product
        </Link>
      </div>
    </ProductCardAltStyled>
  )
}

export default ProductCardAlt
