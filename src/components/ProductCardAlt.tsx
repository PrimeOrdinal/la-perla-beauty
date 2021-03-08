import React from "react"
import styled from "styled-components"

import Share from "../../static/icons//Share.svg"
import WishlistAbsent from "../../static/icons//WishlistAbsent.svg"

import { Button } from "./Button"

const ProductCardAltStyled = styled.article`
  background: white;
  border-radius: 20px;
  display: inline-grid;
  padding: 34px;
  margin-top: 5rem;
  margin-bottom: 1rem;
  gap: 1rem;
  .productImage {
    margin-top: -5rem;
  }
  .productType {
    display: flex;
    justify-content: space-between;
    span {
      text-transform: uppercase;
      font-size: 12px;
    }
    .productIcons {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      img {
        width: 21px;
        height: 18px;
      }
    }
  }
  h3 {
    font-size: 18px;
    margin: 0;
    padding-block-end: 1rem;
    border-bottom: 1px solid #aeaeae;
  }
  .productInfo {
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
`

export type ProductCardAltProps = {
  image: {
    src: string
    alt: string
  }
  category: string
  name: string
  size?: string
  price: string
  colour?: string
}

export const ProductCardAlt: React.FC<ProductCardAltProps> = ({
  image,
  category,
  name,
  size,
  price,
  colour,
}) => {
  return (
    <ProductCardAltStyled>
      {image && (
        <img className="productImage" src={image.src} alt={image.alt} />
      )}
      <div className="productType">
        {category && <span>{category}</span>}
        <div className="productIcons">
          <img className="img-bl" src={Share} alt="share" />
          <img className="img-bl" src={WishlistAbsent} alt="like" />
        </div>
      </div>
      <h3>{name}</h3>
      <div className="productInfo">
        {(size && <span>SIZE | {size}ml</span>) ||
          (colour && <span>COLOUR | {colour}</span>)}
        {price && <span className="price">£{price}</span>}
      </div>
      <Button variant="primary">Add to basket</Button>
      <Button variant="tertiary">View product</Button>
    </ProductCardAltStyled>
  )
}

export default ProductCardAlt
