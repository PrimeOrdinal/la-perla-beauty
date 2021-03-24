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
    aspectRatio: string
    image: ImageProp
    link: LinkProp
    tag: string
    text: string
    title: string
    titlePosition: "bottom" | "top"
  }

const BlurCardStyled = styled.article`
  border-radius: ${themeGet("radii.4")}px;
  min-height: 400px;
  overflow: hidden;
  position: relative;

  figure {
    img {
      filter: blur(10px);
    }
  }

  .content {
    color: ${themeGet("colors.white")};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${themeGet("space.7")}px;
    position: absolute;
    text-align: center;

    a {
      font-weight: bold;
      text-transform: uppercase;
    }

    h2 {
      font-size: 32px;
      margin: 0 auto;
    }

    span {
      display: block;
      text-transform: uppercase;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const BlurCard: React.FC<BlurCardProps> = props => (
  <BlurCardStyled>
    {props.image && (
        <figure>
          <img alt={props.image?.title} src={props.image?.src} />
        </figure>
      )}
    <div className={clsx("content")}>
      {props.link && <Link to={props.link?.href}>{props.link?.title}</Link>}
      {props.title && <h2 className="title">{props.title}</h2>}
      {props.summary && <span className="summary">{props.summary}</span>}
    </div>
  </BlurCardStyled>
)
