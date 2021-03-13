import type { Colour as ColourProp, BackgroundPosition as BackgroundPositionProp, Image as ImageProp, Link as LinkProp } from "../../types/components"

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

import { mediaQueries } from "../theme"

import { Link } from "./Button"

const LayoutBase = styled.aside`
  background-color: ${props =>
    props.colour ? themeGet(`colors.${props.colour}`) : themeGet("colors.pink")};
  display: grid;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;

    @supports (aspect-ratio: 1) {
      aspect-ratio: 21 / 14;

      ${mediaQueries.md} {
        aspect-ratio: 2 / 1;
      }
    }

    @supports not (aspect-ratio: 1) {
      height: calc(80vw - 2rem);

      ${mediaQueries.md} {
        height: calc(50vw - 2rem);
      }

      ${mediaQueries.lg} {
        height: calc(25vw - 2rem);
      }
    }
  }

  div {
    display: grid;

    .title {
      font-size: var(--font-size-lg, 18px);
      margin-block-start: unset;
    }

    .tag {
      font-family: "Quicksand", sans-serif;
      font-size: var(--font-size-sm, 12px);
      order: -1;
      text-transform: uppercase;
    }

    span {
      color: inherit;
      font-size: 13px;

      ${mediaQueries.md} {
        font-size: 14px;
      }
    }

    a {
      color: inherit;
      display: block;
      font-size: 13px;
      font-weight: bold;
      margin-block-start: ${themeGet("space.6")}px;
      padding-block-end: ${themeGet("space.6")}px;
      text-decoration: unset;
      text-transform: uppercase;

      ${mediaQueries.md} {
        font-size: 14px;
      }
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

const BannerView = styled(LayoutBase)`
  --content-padding: ${themeGet("space.4")};

  align-items: ${props => (props.layout === "column" ? "center" : "unset")};  
  background-color: ${props =>
    ["row", "hero"].includes(props.layout)
      ? "transparent"
      : themeGet(`colors.${props.colour}`)};
  border-radius: ${props =>
    ["hero", "row"].includes(props.layout) ? "unset" : "10px"};
  grid-auto-flow: ${props => (props.layout === "column" ? "column" : "row")};
  position: ${props =>
    ["hero", "overlay"].includes(props.layout) ? "relative" : "static"};

  img {
    border-radius: ${props => (props.layout === "row" ? "10px" : "unset")};
  }

  .content {
    bottom: 0;
    color: ${props =>
      ["hero", "overlay"].includes(props.layout)
        ? themeGet("colors.white")
        : "inherit"};
    justify-items: start;
    left: 0;
    padding-block: ${props => ["hero", "overlay"].includes(props.layout) ? themeGet("space.8") : themeGet("space.4")}px;
    margin-inline: ${props => ["column", "overlay", "row"].includes(props.layout) ? themeGet("space.8") : 0}px;
    padding-inline: ${props => ["column", "overlay", "row"].includes(props.layout) ? "unset" : "var(--app-gutter-x, 4rem)"};

    position: ${props =>
      ["hero", "overlay"].includes(props.layout) ? "absolute" : "static"};
    right: 0;
  }
`

enum LayoutProp {
  column, // two columns - image & content
  hero, // content overlaid on the background image, no rounded corners
  overlay, // content overlaid on the background image, rounded corners
  row, // two rows - image & content
}

export type BannerProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    backgroundPosition: BackgroundPositionProp
    colour: ColourProp
    image: ImageProp
    layout: LayoutProp
    link: LinkProp
    tag: String
    text: string
    title: String
  }

export const Banner: React.FC<BannerProps> = (props) => (
  <BannerView {...props}>
    {props?.image && (
      <img
        alt={props?.image?.alt as string}
        className="img-bl"
        src={props?.image?.src as string}
        title={props?.image?.title as string}
      />
    )}
    <div className={clsx("content", props?.layout === "hero" && "container", ["hero", "overlay"].includes(props.layout) && "image-overlay-gradient")}>
      {props?.title && <h1 className="title">{props?.title}</h1>}
      {props?.tag && <h2 className="tag">{props?.tag}</h2>}
      {props?.text && <span>{props?.text}</span>}
      {props?.link && (
        <Link to={props?.link?.href}>
          {props?.link?.title}
        </Link>
      )}
    </div>
  </BannerView>
)
