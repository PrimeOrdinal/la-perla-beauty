import type {
  Colour as ColourProp,
  BackgroundPosition as BackgroundPositionProp,
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
      ["hero", "overlay"].includes(props.layout) ? "16 / 9" : undefined};
    aspect-ratio: ${props =>
        ["short-hero"].includes(props.layout) ? "21 / 9" : undefined};
    
    ${mediaQueries.md} {
      aspect-ratio: ${props =>
        ["hero", "overlay"].includes(props.layout) ? "2 / 1" : undefined};
      aspect-ratio: ${props =>
          ["short-hero"].includes(props.layout) ? "3 / 1" : undefined};
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
    ["row", "hero"].includes(props.layout)
      ? "transparent"
      : themeGet(
          `colors.${props.colour ? props.colour : themeGet("colors.pink")}`
        )};
  border-radius: ${props =>
    ["hero"].includes(props.layout) ? "unset" : themeGet("radii.4")};
  display: grid;
  grid-auto-flow: ${props => (props.layout === "column" ? "column" : "row")};
  overflow: hidden;
  position: ${props =>
    ["hero", "overlay"].includes(props.layout) ? "relative" : "static"};

  .media {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .content {
    bottom: 0;
    color: ${props =>
      ["hero", "overlay"].includes(props.layout)
        ? themeGet("colors.white")
        : "inherit"};
    display: grid;
    justify-items: start;
    left: 0;
    padding-block: ${props =>
      ["hero", "overlay"].includes(props.layout)
        ? themeGet("space.8")
        : themeGet("space.4")}px;
    padding-inline: ${themeGet("space.12")}px;
    padding-inline: ${props =>
      ["hero"].includes(props.layout)
        ? "var(--app-gutter-x, 4rem)"
        : null};

    position: ${props =>
      ["hero", "overlay"].includes(props.layout) ? "absolute" : "static"};
    right: 0;

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

export const BannerStyled = styled(LayoutStyled)`

`

enum LayoutProp {
  column, // two columns - image & content
  hero, // content overlaid on the background image, no rounded corners
  overlay, // content overlaid on the background image, rounded corners
  row, // two rows - image & content
}

export const getContent: React.FC<BannerProps> = props => (
  <div
    className={clsx(
      "content",
      ["hero", "overlay"].includes(props.layout) && "image-overlay-gradient"
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
    backgroundPosition: BackgroundPositionProp
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
    {getContent(props)}
  </BannerStyled>
)
