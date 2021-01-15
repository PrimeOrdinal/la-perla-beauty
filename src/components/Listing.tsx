import React, { ReactElement } from "react"
import { Helmet } from "react-helmet"
import styled from "@emotion/styled"

import { ProductCard } from "../components/ProductCard"

import { createProductStructuredProductJSON } from "../utils/createStructuredJSON"

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
    node: ProductCustom
  }>
}): ReactElement => (
  <StyledResults>
    {edges.map(({ node }: { node: ProductCustom }, index) => {
      const structuredJSON = createProductStructuredProductJSON(node)

      return (
        <li key={index}>
          <ProductCard product={node} />
          <Helmet>
            <script type="application/ld+json">{structuredJSON}</script>
          </Helmet>
        </li>
      )
    })}
  </StyledResults>
)

export default Listing
