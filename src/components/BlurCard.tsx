import type {
  Image as ImageProp,
  Link as LinkProp,
} from "../../types/components"

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
import clsx from "clsx"

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
  background-color: beige;
  background-image: url(${`https://picsum.photos/405/712?${
    Math.floor(Math.random() * 10) + 1
  }`});
  border-radius: 10px;
  padding-inline-start: 78px;
  padding-inline-end: 78px;
  padding-block-start: 50px;
  padding-block-end: 50px;
  text-align: center;
  min-height: 400px;
  display: inline-grid;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      text-transform: uppercase;
      font-weight: bold;
    }

    h2 {
      font-size: 32px;
      max-width: 9ch;
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
    <div className={clsx("content")}>
      <Link>Click to watch</Link>
      <h2>What's behind the scent?</h2>
      <span>The signature fragrance</span>
    </div>
  </BlurCardStyled>
)
