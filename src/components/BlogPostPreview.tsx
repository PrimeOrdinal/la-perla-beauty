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

import { Link } from "./Button"

export type BlogPostPreviewProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    aspectRatio: string
    body: string
    headingAbove: string
    headingBelow: string
    link: string
    tag: string
  }

const BlogPostPreviewStyled = styled.article`
  span {
    display: block;
    text-transform: uppercase;
  }
  a {
    text-transform: uppercase;
    font-weight: bold;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  headingAbove,
  headingBelow,
  tag,
  body,
  link,
  aspectRatio,
}) => (
  <BlogPostPreviewStyled>
    {headingAbove && <h2>{headingAbove}</h2>}
    {aspectRatio && (
      <figure aspect-ratio={aspectRatio}>
        <img
          src={`https://picsum.photos/600/400?${
            Math.floor(Math.random() * 10) + 1
          }`}
          alt="placeholder image"
        />
      </figure>
    )}

    {tag && <span>{tag}</span>}
    {headingBelow && <h2>{headingBelow}</h2>}
    {body && <p>{body}</p>}
    {link && <Link>{link}</Link>}
  </BlogPostPreviewStyled>
)
