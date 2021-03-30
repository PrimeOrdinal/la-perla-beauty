import type {
  Image as ImageProp,
  Link as LinkProp,
} from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
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

export type BlurCardProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    image: ImageProp
    link: LinkProp
    tag: string
    text: string
    title: string
  }

const BlurCardStyled = styled.article`
  border-radius: ${themeGet("radii.4")}px;
  min-height: 400px;
  overflow: hidden;
  position: relative;

  figure {

  }

  img {
    filter: blur(10px);
  }

  .content {
    align-content: space-between;
    bottom: 0;
    display: grid;
    justify-content: center;
    left: 0;
    padding: ${themeGet("space.11")}px ${themeGet("space.14")}px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    z-index: 5;

    * {
      color: ${themeGet("colors.white")};
    }

    a {
      font-weight: bold;
      text-transform: uppercase;
    }

    .title {
      font-size: var(--font-size-heading-1, 24px);
      margin: 0 auto;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const BlurCard: React.FC<BlurCardProps> = props => (
  <BlurCardStyled {...props}>
    {props.image && (
        <figure aspect-ratio="2/3">
          <img alt={props.image?.title} className="img-bl" src={props.image?.src} />
        </figure>
      )}
    <div className={clsx("content")}>
      {props.link && <Link to={props.link?.href}>{props.link?.title}</Link>}
      {props.title && <h2 className="title">{props.title}</h2>}
      {props.tag && <span className="tag">{props.tag}</span>}
    </div>
  </BlurCardStyled>
)
