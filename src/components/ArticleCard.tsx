import type { Image as ImageProp, Link as LinkProp } from "../../types/components"

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
    tag: string
    text: string
    title: string
    titlePosition: "bottom" | "top"
  }

const ArticleCardStyled = styled.article`
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

export const ArticleCard: React.FC<ArticleCardProps> = (props) => (
  <ArticleCardStyled>
    {props.titlePosition === "top" && <h2>{props.title}</h2>}
    {props.aspectRatio && (
      <figure aspect-ratio={props.aspectRatio}>
        <img
          src={props.image?.aaa}
          alt="placeholder image"
        />
      </figure>
    )}

    {props.tag && <span>{props.tag}</span>}
    {props.titlePosition === "bottom" && <h2>{props.title}</h2>}
    {props.text && <p>{props.text}</p>}
    {props.link && <Link to={props.link?.href}>{props.link?.title}</Link>}
  </ArticleCardStyled>
)
