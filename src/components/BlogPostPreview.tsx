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
    titleAbove: string
    titleBelow: string
    link: string
    tag: string
  }

const BlogPostPreviewStyled = styled.article`
  span {
    display: block;
    text-transform: uppercase;
    margin: 8px 0;
  }
  h2 {
    font-size: 20px;
  }
  a {
    text-transform: uppercase;
    font-weight: bold;
    margin-block-start: 8px;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  titleAbove,
  titleBelow,
  tag,
  body,
  link,
  aspectRatio,
}) => (
  <BlogPostPreviewStyled>
    {titleAbove && <h2>{titleAbove}</h2>}
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
    {titleBelow && <h2>{titleBelow}</h2>}
    {body && <p>{body}</p>}
    {link && <Link>{link}</Link>}
  </BlogPostPreviewStyled>
)
