import clsx from "clsx"
import React from "react"
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
  }

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  headingAbove,
  headingBelow,
}) => (
  <article>
    {headingAbove && <h1>Title above</h1>}
    <img src="https://picsum.photos/405/540" alt="placeholder image" />
    {headingBelow && <h1>Title below</h1>}
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione
      voluptatum eaque et dolorum.
    </p>
    <Link>Read more</Link>
  </article>
)
