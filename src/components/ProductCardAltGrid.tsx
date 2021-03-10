import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"

import { ProductCardAlt } from "./ProductCardAlt"

const ProductCardGrid = styled.section`
  background-color: ${themeGet("lightgreen")};
  padding-block-start: 1rem;
  padding-block-end: 1rem;
  margin-block-end: 1rem;
  .grid {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    place-items: center;
    ${mediaQueries.sm} {
      grid-template-columns: auto auto;
    }
    ${mediaQueries.md} {
      grid-template-columns: repeat(4, auto);
      gap: 24px;
    }
  }
`

export const ProductCardAltGrid: React.FC = () => {
  return (
    <ProductCardGrid>
      <div className="grid container">
        <ProductCardAlt
          image={{
            src: `https://picsum.photos/231/231?${
              Math.floor(Math.random() * 10) + 1
            }`,
            alt: "something",
          }}
          size="120"
          name="The Scent of La Perla"
          price="120"
          category="Eau de parfum"
        />
        <ProductCardAlt
          image={{
            src: `https://picsum.photos/231/231?${
              Math.floor(Math.random() * 10) + 1
            }`,
            alt: "something",
          }}
          size="120"
          name="The Scent of La Perla"
          price="120"
          category="Eau de parfum"
        />
        <ProductCardAlt
          image={{
            src: `https://picsum.photos/231/231?${
              Math.floor(Math.random() * 10) + 1
            }`,
            alt: "something",
          }}
          size="120"
          name="The Scent of La Perla"
          price="120"
          category="Eau de parfum"
        />
        <ProductCardAlt
          image={{
            src: `https://picsum.photos/231/231?${
              Math.floor(Math.random() * 10) + 1
            }`,
            alt: "something",
          }}
          size="120"
          name="The Scent of La Perla"
          price="120"
          category="Eau de parfum"
        />
      </div>
    </ProductCardGrid>
  )
}

export default ProductCardAltGrid
