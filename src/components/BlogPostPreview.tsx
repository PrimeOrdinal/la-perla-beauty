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

export type BlogPostPreviewProps = GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    headingAbove: string
    headingBelow: string
    tag: string
    body: string
  }

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  headingAbove,
  headingBelow,
  tag,
  body,
}) => (
  <article>
    {headingAbove && <h1>Title above</h1>}
    <img src="https://picsum.photos/405/540" alt="placeholder image" />
    {tag && <span>be inspired</span>}
    {headingBelow && <h1>Title below</h1>}
    {body && (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione
        voluptatum eaque et dolorum.
      </p>
    )}
    <Link>Read more</Link>
  </article>
)
