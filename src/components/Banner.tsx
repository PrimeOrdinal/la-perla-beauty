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

    h1 {
      font-size: 20px;
      margin-block-start: unset;

      ${mediaQueries.md} {
        font-size: 24px;
      }
    }

    h2 {
      font-family: "Quicksand", sans-serif;
      font-size: var(--font-size-small, 12px);
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
  background-color: ${props =>
    ["row", "hero"].includes(props.layout)
      ? "transparent"
      : themeGet(`colors.${props.colour}`)};
  border-radius: ${props =>
    ["hero", "row"].includes(props.layout) ? "unset" : "10px"};
  grid-auto-flow: ${props => (props.layout === "column" ? "column" : "row")};
  place-items: ${props => (props.layout === "column" ? "center" : "unset")};
  position: ${props =>
    ["hero", "overlay"].includes(props.layout) ? "relative" : "static"};

  img {
    border-radius: ${props => (props.layout === "row" ? "10px" : "unset")};
  }

  div {
    bottom: ${themeGet("space.7")}px;
    color: ${props =>
      ["hero", "overlay"].includes(props.layout)
        ? themeGet("colors.white")
        : "inherit"};
    left: 0;
    padding: ${props => {
      if (props.layout === "column") {
        return "120px"
      } else if (props.layout === "row") {
        return "20px"
      } else {
        return undefined
      }
    }};
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
  undefined, // default style is the column that spans two which has pink bg with image above
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

export const Banner: React.FC<BannerProps> = ({
  backgroundPosition,
  colour,
  image,
  layout,
  link,
  tag,
  text,
  title,
  ...props
}) => (
  <BannerView {...props}>
    {image && (
      <img
        alt={image?.alt as string}
        className="img-bl"
        src={image?.src as string}
        title={image?.title as string}
      />
    )}
    <div className={clsx(layout === "hero" && "container")}>
      {title && <h1>{title}</h1>}
      {tag && <h2>{tag}</h2>}
      {link && (
        <Link to={link?.href}>
          {link?.title}
        </Link>
      )}
      {text && <span>{text}</span>}
    </div>
  </BannerView>
)
