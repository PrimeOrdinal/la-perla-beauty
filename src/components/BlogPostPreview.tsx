import React from "react"

import clsx from "clsx"
import styled from "styled-components"
import {
  compose,
  grid,
  layout,
  position,
  space,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { Link } from "./Button"
import { mediaQueries } from "../theme"

export type BlogPostPreviewProps = GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    headingAbove: string
    headingBelow: string
    tag: string
    body: string
    link: string
  }

const BlogPostPreviewStyled = styled.article`
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    ${mediaQueries.md} {
      max-width: 100%;
      height: 415px;
    }
  }
  span {
    display: block;
    text-transform: uppercase;
  }
  a {
    text-transform: uppercase;
    font-weight: bold;
  }
`

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  headingAbove,
  headingBelow,
  tag,
  body,
  link,
}) => (
  <BlogPostPreviewStyled>
    {headingAbove && <h2>{headingAbove}</h2>}
    <img
      src={`https://picsum.photos/905/740?${
        Math.floor(Math.random() * 10) + 1
      }`}
      alt="placeholder image"
    />
    {tag && <span>{tag}</span>}
    {headingBelow && <h2>{headingBelow}</h2>}
    {body && <p>{body}</p>}
    {link && <Link>{link}</Link>}
  </BlogPostPreviewStyled>
)
