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
    aspectRatio: string
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
