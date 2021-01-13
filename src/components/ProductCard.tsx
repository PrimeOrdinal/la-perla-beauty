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
`;

export const ProductCard = (
  { product } : {
    product: Product
  }
): ReactElement => (
  <StyledProductCard data-id={product.id}>
    <img alt={product.title} src="https://via.placeholder.com/250" />
    <div>
      <a href={product.url}>
        <h1>{product.title}</h1>
      </a>
      <span>€{product.price}</span>
    </div>
  </StyledProductCard>
)

export default ProductCard
