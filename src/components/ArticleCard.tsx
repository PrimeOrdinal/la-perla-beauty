import type { Image as ImageProp, Link as LinkProp } from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
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

export type ArticleCardProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    aspectRatio: string
    image: ImageProp
    link: LinkProp
    summary: string
    tag: string
    title: string
    titlePosition: "bottom" | "top"
    url: string
  }

const ArticleCardStyled = styled.article`
  figure {
    margin: unset;
  }

  span {
    display: block;
    text-transform: uppercase;
    margin: 8px 0;
  }

  h2 {
    font-size: ${themeGet("fontSizes.6")}px;
  }

  a {
    text-transform: uppercase;
    font-weight: bold;
    margin-block-start: 8px;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const ArticleCard: React.FC<ArticleCardProps> = (props) => (
  <ArticleCardStyled>
    {props.titlePosition === "top" && <h2>{props.title}</h2>}
    <figure aspect-ratio={props.aspectRatio}>
      <img
        alt={props.image?.title}
        src={props.image?.src}
      />
    </figure>
    {props.tag && <span>{props.tag}</span>}
    {props.titlePosition === "bottom" && <h2>{props.title}</h2>}
    {props.summary && <p>{props.summary}</p>}
    {props.link && <Link to={props.link?.href}>{props.link?.title}</Link>}
    {props.url && <Link to={props.url}>Read more</Link>}
  </ArticleCardStyled>
)
