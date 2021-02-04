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

import { ListPlain } from "./ListPlain"
import { ProductCard } from "./ProductCard"

const ListingStyled = styled(ListPlain)`
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
  <ListingStyled
    className="container"
    gridAutoFlow="row"
    gridColumnGap={{ _: 2, sm: 1, md: 2, lg: 4 }}
    gridRowGap={{ _: 4, sm: 2, md: 4, lg: 8 }}
    gridTemplateColumns={{
      _: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(4, 1fr)",
      xl: "repeat(4, 1fr)",
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
  </ListingStyled>
)
