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

export type ReviewProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

export const ReviewStyled: React.FC<ReviewProps> = styled.div`
  &:disabled {
    color: "disabled";
    cursor: "not-allowed";
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const Review: React.FC<ReviewProps> = props => (
  <ReviewStyled
    itemProp="review"
    itemScope
    itemType="https://schema.org/Review"
    {...props}
  >
    <span itemProp="reviewRating">5</span> stars -
    <b>
      "<span itemProp="name">A masterpiece of literature</span>"
    </b>
    by <span itemProp="author">John Doe</span>, Written on{" "}
    <meta itemProp="datePublished" content="2006-05-04" />
    May 4, 2006
    <span itemProp="reviewBody">
      I really enjoyed this book. It captures the essential challenge people
      face as they try make sense of their lives and grow to adulthood.
    </span>
  </ReviewStyled>
)
