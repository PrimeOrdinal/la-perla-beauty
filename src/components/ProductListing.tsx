import type { Product } from "schema-dts"

import type { Contentstack_CategoriesPromotional_Banners } from "../../graphql-types"

import React from "react"
import { Helmet } from "react-helmet"
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

import { ProductCard } from "./ProductCard"
import { Banner } from "./Banner"

const ProductListingStyled = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;

  .promotional-banner {
    grid-column: ${props => (props.view === "grid" ? "span 2" : "span 1")};
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ProductListingProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    items?: Product[]
    promotionalBanners?: Contentstack_CategoriesPromotional_Banners
    view: "grid" | "list"
  }

export const ProductListing: React.FC<ProductListingProps> = ({
  items,
  promotionalBanners,
  view,
}) => {
  const gridItems = items?.map((product: Product, index) => (
    <li className="product" key={`product-${index}`}>
      <ProductCard key={index} product={product} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(product)}</script>
      </Helmet>
    </li>
  ))

  promotionalBanners?.forEach((promotionalBanner, index) => {
    gridItems.splice(
      promotionalBanner?.grid_position,
      0,
      <li className="promotional-banner" key={`promotional-banner-${index}`}>
        <Banner {...promotionalBanner?.promotional_banner?.[0]} />
      </li>
    )
  })

  return (
    <ProductListingStyled
      borderTop={1}
      gridAutoFlow="row"
      gridColumnGap={
        view === "grid"
          ? { _: 6, sm: 6, md: 8, lg: 10 }
          : { _: 6, sm: 6, md: 8, lg: 10 }
      }
      gridRowGap={
        view === "grid"
          ? { _: 4, sm: 6, md: 8, lg: 10 }
          : { _: 4, sm: 6, md: 8, lg: 10 }
      }
      gridTemplateColumns={
        view === "grid"
          ? {
              _: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              xl: "repeat(4, 1fr)",
            }
          : {
              _: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(2, 1fr)",
            }
      }
      view={view}
    >
      {gridItems}
    </ProductListingStyled>
  )
}
