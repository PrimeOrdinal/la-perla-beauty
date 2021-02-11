import type { Product, WithContext } from "schema-dts"

import type { Contentstack_CategoriesPromotional_Banners } from "../../graphql-types"

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

import { theme } from "../theme"

import { ProductCard } from "./ProductCard"
import { PromotionalBanner } from "./PromotionalBanner"

const ListingStyled = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;

  .product {

  }

  .promotional-banner {
    aspect-ratio: 1;
    grid-column: span 2;

    ${theme.mediaQueries.md} {
      aspect-ratio: unset;
    }
  }

  ${compose(grid, layout, space)}
`

export type ListingProps = GridProps &
  LayoutProps &
  SpaceProps & {
    products?: Array<{
      node: WithContext<Product>
    }>
    promotionalBanners?: Contentstack_CategoriesPromotional_Banners
  }

export const Listing: React.FC<ListingProps> = ({
  products,
  promotionalBanners,
}) => {
  const items = products?.map(({ node: product }: { node: Product }, index) => (
    <li className="product" key={`product-${index}`}>
      <ProductCard product={product} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(product)}</script>
      </Helmet>
    </li>
  ))

  promotionalBanners?.forEach((promotionalBanner, index) => {
    items.splice(
      promotionalBanner?.grid_position,
      0,
      <li className="promotional-banner" key={`promotional-banner-${index}`}>
        <PromotionalBanner {...promotionalBanner?.promotional_banner?.[0]} />
      </li>
    )
  })

  return (
    <ListingStyled
      className="container"
      borderTop={1}
      gridAutoFlow="row"
      gridColumnGap={{ _: 6, sm: 6, md: 8, lg: 10 }}
      gridRowGap={{ _: 4, sm: 6, md: 8, lg: 10 }}
      gridTemplateColumns={{
        _: "repeat(2, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
    >
      {items}
    </ListingStyled>
  )
}
