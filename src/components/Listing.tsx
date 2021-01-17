import type { Product } from "schema-dts"

import React, { ReactElement } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { ProductCard } from "../components/ProductCard"

const StyledResults = styled.ul`
  align-items: start;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  margin: 0;
  padding: 1rem;

  li {
    margin-block-end: 0;
  }

  article {
    display: ;
  }

  h1 {
    font-size: 1rem;
  }
`

export const Listing = ({
  edges,
}: {
  edges: Array<{
    node: Product
  }>
}): ReactElement => (
  <StyledResults>
    {edges.map(({ node: product }: { node: Product }, index) => (
      <li key={index}>
        <ProductCard product={product} />
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(product)}</script>
        </Helmet>
      </li>
    ))}
  </StyledResults>
)

export default Listing
