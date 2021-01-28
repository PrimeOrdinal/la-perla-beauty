import type { Product } from "schema-dts"

import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import {
  compose,
  grid,
  layout,
  space,
  GridProps,
  LayoutProps,
  SpaceProps,
} from "styled-system"

import { ProductCard } from "./ProductCard"
import { ListPlain } from "./ListPlain"

const StyledListing = styled(ListPlain)`
  display: grid;

  ${compose(grid, layout, space)}
`

export type ListingProps = GridProps &
  LayoutProps &
  SpaceProps & {
    edges: Array<{
      node: Product
    }>
  }

export const Listing: React.FC<ListingProps> = ({ edges }) => (
  <StyledListing
    gridAutoFlow="row"
    gridGap={{ _: 2, sm: 1, md: 2, lg: 4 }}
    gridTemplateColumns={{
      _: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(4, 1fr)",
      xl: "repeat(6, 1fr)",
    }}
  >
    {edges.map(({ node: product }: { node: Product }, index) => (
      <li key={index}>
        <ProductCard product={product} />
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(product)}</script>
        </Helmet>
      </li>
    ))}
  </StyledListing>
)
