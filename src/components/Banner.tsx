import type {
  Colour as ColourProp,
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

import { mediaQueries } from "../theme"

import { Link } from "./Button"

export const LayoutStyled = styled.aside`
  --content-padding: ${themeGet("space.4")};

  @supports (aspect-ratio: 1) {
    aspect-ratio: ${props =>
      ["hero", "overlay", "video"].includes(props.layout) ? "16/9" : undefined};
    aspect-ratio: ${props =>
      ["short-hero"].includes(props.layout) ? "21/9" : undefined};
    aspect-ratio: ${props =>
        ["image"].includes(props.layout) ? "3/4" : undefined};

    ${mediaQueries.md} {
      aspect-ratio: ${props =>
        ["hero", "overlay"].includes(props.layout) ? "2/1" : undefined};
      aspect-ratio: ${props =>
        ["short-hero"].includes(props.layout) ? "3/1" : undefined};
      aspect-ratio: ${props =>
        ["image"].includes(props.layout) ? "3/4" : undefined};
    }
  }

  @supports not (aspect-ratio: 1) {
    padding-top: 56.25%;

    ${mediaQueries.md} {
      padding-top: 50%;
    }
  }

  align-items: ${props => (props.layout === "column" ? "center" : "unset")};
  background-color: ${props =>
    ["column", "row"].includes(props.layout)
      ? themeGet(
          `colors.${props.colour ? props.colour : themeGet("colors.pink")}`
        ) : "transparent"};
  border-radius: ${props =>
    ["hero"].includes(props.layout) ? "0" : themeGet("radii.4")}px;
  display: grid;
  grid-auto-flow: ${props => (props.layout === "column" ? "column" : "row")};
  overflow: hidden;
  position: relative;

  .media {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: ${props => ["hero", "image", "overlay", "video"].includes(props.layout) ? "absolute" : "static"};
    top: 0;
    width: 100%;
  }

  .content {
    align-items: end;
    bottom: 0;
    color: ${props =>
      ["hero", "image", "overlay", "video"].includes(props.layout)
        ? themeGet("colors.white")
        : "inherit"};
    display: grid;
    justify-items: start;
    left: 0;
    min-height: 20%;
    padding-block-end: ${themeGet("space.4")}px;
    padding-block-start: ${themeGet("space.4")}px;
    padding-inline-end: ${themeGet("space.9")}px;
    padding-inline-start: ${themeGet("space.9")}px;
    pointer-events: none;
    position: ${props =>
      ["hero", "overlay", "video"].includes(props.layout) ? "absolute" : "static"};
    right: 0;

    ${mediaQueries.md} {
      padding-block-end: ${props =>
        ["hero", "overlay", "video"].includes(props.layout)
          ? themeGet("space.8")
          : themeGet("space.4")}px;
      padding-block-start: ${props =>
        ["hero", "overlay", "video"].includes(props.layout)
          ? themeGet("space.8")
          : themeGet("space.4")}px;
      padding-inline-end: ${props =>
        ["hero", "overlay", "video"].includes(props.layout)
          ? themeGet("space.12")
          : themeGet("space.9")}px;
      padding-inline-start: ${props =>
        ["hero", "overlay", "video"].includes(props.layout)
          ? themeGet("space.12")
          : themeGet("space.9")}px;
      padding-inline-end: ${props =>
        ["hero"].includes(props.layout) ? "var(--app-gutter-x, 4rem)" : null};
      padding-inline-start: ${props =>
        ["hero"].includes(props.layout) ? "var(--app-gutter-x, 4rem)" : null};
    }

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

    .text {
      color: inherit;
      font-size: ${themeGet("fontSizes.2")}px;

      ${mediaQueries.md} {
        font-size: ${themeGet("fontSizes.3")}px;
      }
    }

    a {
      color: inherit;
      display: block;
      font-size: ${themeGet("fontSizes.2")}px;
      font-weight: bold;
      margin-block-start: ${themeGet("space.6")}px;
      padding-block-end: ${themeGet("space.6")}px;
      pointer-events: auto;
      text-decoration: unset;
      text-transform: uppercase;

      ${mediaQueries.md} {
        font-size: ${themeGet("fontSizes.3")}px;
      }
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const BannerStyled = styled(LayoutStyled)``

enum LayoutProp {
  column, // two columns - image & content
  hero, // content overlaid on the background image, no rounded corners
  image, // background image, rounded corners
  overlay, // content overlaid on the background image, rounded corners
  row, // two rows - image & content
  video, // content overlaid on the background video
}

export const getContent: React.FC<BannerProps> = props => (
  <div
    className={clsx(
      "content",
      ["hero", "overlay", "video"].includes(props.layout) && "image-overlay-gradient"
    )}
  >
    {props?.title && <h1 className="title">{props?.title}</h1>}
    {props?.tag && <h2 className="tag">{props?.tag}</h2>}
    {props?.text && <span className="text">{props?.text}</span>}
    {props?.link && <Link to={props?.link?.href}>{props?.link?.title}</Link>}
  </div>
)

export type BannerProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    colour: ColourProp
    image: ImageProp
    layout: LayoutProp
    link: LinkProp
    tag: String
    text: string
    title: String
  }

export const Banner: React.FC<BannerProps> = props => (
  <BannerStyled {...props}>
    {props?.image && (
      <img
        alt={props?.image?.alt as string}
        className={clsx("img-bl", "media")}
        src={props?.image?.src as string}
        title={props?.image?.title as string}
      />
    )}
    {((props?.tag ||
      props?.text ||
      props?.title ||
      props?.link) && getContent(props))}
  </BannerStyled>
)
