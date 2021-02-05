import type {
//   BigCommerceProducts,
//   ProductsPageQuery,
  BigCommerceProductsFragmentFragment,
  Contentstack_Products
} from "../../graphql-types"

import React from "react"
import styled from "styled-components"
import {
  compose,
  layout,
  position,
  space,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

// import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"
import { standardiseContentstackProduct } from "../utils/standardiseContentstackProduct"

import { Listing } from "./Listing"

export type YouMayAlsoLikeProps = 
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    allBigCommerceProducts: {
      edges: Array<{
          node: BigCommerceProductsFragmentFragment;
      }>;
    };
    allContentstackProducts: {
        edges: Array<{
            node: Pick<Contentstack_Products, 'id' | 'product_id' | 'rich_text_editor' | 'title' | 'url'>;
        }>;
    };
  }

export const YouMayAlsoLikeStyled: React.FC<YouMayAlsoLikeProps> = styled.aside`
  column-gap: 2rem;
  display: grid;

  ${compose(layout, position, space)}
`

export const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = ({data}) => (
  <YouMayAlsoLikeStyled>
    <h1>You May Also Like</h1>
    {data.allContentstackProducts && (
      <Listing
        edges={data.allContentstackProducts.edges.map(({ node }) => ({
          node: standardiseContentstackProduct(node),
        }))}
      />
      // <Listing
      //   edges={data.allBigCommerceProducts.edges.map(({ node }) => ({
      //     node: standardiseBigCommerceProduct(
      //       (node as unknown) as BigCommerceProducts
      //     ),
      //   }))}
      // />
    )}
  </YouMayAlsoLikeStyled>
)
