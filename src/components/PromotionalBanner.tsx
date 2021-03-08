import type { Colour } from "../../types/theme"

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
    props.color ? themeGet(`colors.${props.color}`) : themeGet("colors.pink")};
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

      ${mediaQueries.md} {
        font-size: 24px;
      }
    }

    h2 {
      font-size: var(--font-size-small, 12px);
      order: -1;
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

const PromotionalBannerView = styled(LayoutBase)`
  background-color: ${props =>
    ["row", "hero"].includes(props.layout)
      ? "transparent"
      : themeGet(`colors.${props.color}`)};
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

enum Layout {
  column, // two columns - image & content
  hero, // content overlaid on the background image, no rounded corners
  overlay, // content overlaid on the background image, rounded corners
  row, // two rows - image & content
  undefined, // default style is the column that spans two which has pink bg with image above
}

export type PromotionalBannerProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    color: Colour
    description: string
    image: {
      alt: string
      src: string
    }
    layout: Layout
    link: {
      attributes?: {
        href: string
        title: string
      }
      text: string
    }
    showImage: boolean
    text: string
    title: String
    titlePrimary: String
    titleSecondary: String
  }

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  image,
  link,
  showImage = true,
  text,
  title,
  titlePrimary,
  titleSecondary,
  ...props
}) => (
  <PromotionalBannerView {...props}>
    {showImage && (
      <img
        alt={image?.description as string}
        className="img-bl"
        src={image?.url as string}
        title={image?.title as string}
      />
    )}
    <div className={clsx(props.layout === "hero" && "container")}>
      {title && <h1>{title}</h1>}
      {titlePrimary && <h1>{titlePrimary}</h1>}
      {titleSecondary && <h2>{titleSecondary}</h2>}
      {link && (
        <Link title={link?.attributes?.title} to={link?.attributes?.href}>
          {link?.text}
        </Link>
      )}
      {text && <span>{text}</span>}
    </div>
  </PromotionalBannerView>
)
