import type { Colour } from "../../types/theme"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"
import { compose, layout, space, LayoutProps, SpaceProps } from "styled-system"

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
    h1 {
      color: inherit;
      font-size: 20px;

      ${mediaQueries.md} {
        font-size: 24px;
      }
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
  ${compose(layout, space)}
`

const PromotionalBannerView = styled(LayoutBase)`
  background-color: ${props =>
    ["desktopFull", "hero"].includes(props.layout)
      ? "transparent"
      : themeGet(`colors.${props.color}`)};
  border-radius: ${props =>
    ["desktopFull", "hero"].includes(props.layout) ? "unset" : "10px"};
  grid-auto-flow: ${props => (props.layout === "listView" ? "column" : "row")};
  place-items: ${props => (props.layout === "listView" ? "center" : "unset")};
  position: ${props =>
    ["hero", "inlineView"].includes(props.layout) ? "relative" : "static"};

  img {
    border-radius: ${props =>
      props.layout === "desktopFull" ? "10px" : "unset"};
  }

  div {
    bottom: ${themeGet("space.7")}px;
    color: ${props =>
      ["hero", "inlineView"].includes(props.layout)
        ? themeGet("colors.white")
        : "inherit"};
    left: 0;
    padding: ${props => {
      if (props.layout === "listView") {
        return "120px"
      } else if (["hero", "inlineView"].includes(props.layout)) {
        return undefined
      } else {
        return "20px"
      }
    }};
    position: ${props =>
      ["hero", "inlineView"].includes(props.layout) ? "absolute" : "static"};
    right: 0;
  }
`

enum Layout {
  desktopFull, // The reusable hero component used on other pages
  hero, // When text is inside image, no rounded corners
  inlineView, // When text is inside image
  listView, // The promo banner that spans full width. Is two columns - img & content
  undefined, // The default style is the column that spans two which has pink bg with image above
}

export type PromotionalBannerProps = LayoutProps &
  SpaceProps & {
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
