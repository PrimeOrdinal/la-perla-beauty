import type {
  Image as ImageProp,
  Link as LinkProp,
} from "../../types/components"

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
  header {
    align-items: start;
    display: grid;
  }

  figure {
    aspect-ratio: ${props => (props.aspectRatio ? props.aspectRatio : "3/4")};
  }

  img {
    height: 100%;
    width: 100%;
  }

  .title {
    font-size: ${themeGet("fontSizes.7")}px;
    margin-block-end: 1rem;
    margin-block-start: 0.5rem;
    order: ${props => (props.titlePosition === "top" ? "-1" : "unset")};
  }

  span {
    display: block;
    text-transform: uppercase;
    margin: 8px 0;
  }

  a {
    text-transform: uppercase;
    font-weight: bold;
    margin-block-start: 8px;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const ArticleCard: React.FC<ArticleCardProps> = props => (
  <ArticleCardStyled {...props}>
    <header>
      {props.image && (
        <figure>
          <img alt={props.image?.title} src={props.image?.src} />
        </figure>
      )}
      {props.title && <h1 className="title">{props.title}</h1>}
    </header>
    {props.tag && <span>{props.tag}</span>}
    {props.summary && <span className="summary">{props.summary}</span>}
    {props.link && <Link to={props.link?.href}>{props.link?.title}</Link>}
    {props.url && <Link to={props.url}>Read more</Link>}
  </ArticleCardStyled>
)
