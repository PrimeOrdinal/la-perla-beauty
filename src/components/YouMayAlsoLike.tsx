import type {
  BigCommerceGql_Product,
  //   ProductsPageQuery,
} from "../../graphql-types"

import React from "react"
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

import { Carousel } from "./Carousel"
import { ProductCard } from "./ProductCard"

export type YouMayAlsoLikeProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    bestSellingProducts: BigCommerceGql_Product[]
    featuredProducts: BigCommerceGql_Product[]
  }

export const YouMayAlsoLikeStyled: React.FC<YouMayAlsoLikeProps> = styled.aside`
  ${compose(color, flexbox, grid, layout, position, space)}
`

export const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = props => {
  return (
    <YouMayAlsoLikeStyled {...props}>
      <h1>You May Also Like</h1>
      {props.featuredProducts && (
        <Carousel visibleItems={4} showArrows>
          {props.featuredProducts?.map((product, index) => (
            <ProductCard
              className="item"
              key={index}
              product={product}
              variantType={props.variantType}
            />
          ))}
        </Carousel>
      )}
    </YouMayAlsoLikeStyled>
  )
}
