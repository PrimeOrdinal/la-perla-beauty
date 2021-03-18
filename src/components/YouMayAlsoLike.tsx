import type {
  BigCommerceProducts,
  BigCommerceGql_Product,
  //   ProductsPageQuery,
  Contentstack_Products,
} from "../../graphql-types"

import React, { useContext } from "react"
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

import { SiteContext } from "../components/Layout"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"

import { ProductListing } from "./ProductListing"

export type YouMayAlsoLikeProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    bestSellingProducts: BigCommerceGql_Product[]
    featuredProducts: BigCommerceGql_Product[]
    allBigCommerceProducts: {
      edges: Array<{
        node: BigCommerceProducts
      }>
    }
    allContentstackProducts: {
      edges: Array<{
        node: Pick<
          Contentstack_Products,
          "id" | "product_id" | "description" | "title" | "url"
        >
      }>
    }
  }

export const YouMayAlsoLikeStyled: React.FC<YouMayAlsoLikeProps> = styled.aside`
  column-gap: 2rem;
  display: grid;

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = props => {
  const site = useContext(SiteContext)

  const items = site?.featuredProducts?.edges?.map(
    ({ node: productFormatBigCommerce }) =>
      standardiseBigCommerceProduct({
        productFormatBigCommerce,
      })
  )

  return (
    <YouMayAlsoLikeStyled {...props}>
      <h1>You May Also Like</h1>
      {items && (
        <ProductListing
          items={items}
          view="grid"
        />
      )}
    </YouMayAlsoLikeStyled>
  )
}
