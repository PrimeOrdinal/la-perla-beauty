import { themeGet } from "@styled-system/theme-get"
import { Link } from "./Button"
import React from "react"
import styled from "styled-components"
import { compose, layout, space, LayoutProps, SpaceProps } from "styled-system"

import { mediaQueries } from "../theme"

const LayoutBase = styled.aside`
  background-color: ${props =>
    props.color ? themeGet(`colors.${props.color}`) : themeGet("colors.pink")};
  border-radius: ${themeGet("radii.4")}px;
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
      font-size: 13px;
      color: inherit;

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
  //prop: inlineView = When text is inside image
  //prop: desktopFull = The reusable hero component used on other pages
  //prop: listView = The promo banner that spans full width. Is two columns - img & content
  //default style is the column that spans two which has pink bg with image above
  background-color: ${props => props.desktopFull ? "transparent" : themeGet(`colors.${props.color}`)};
  border-radius: ${props => (props.desktopFull ? "0px" : "10px")};
  grid-auto-flow: ${props => (props.listView ? "column" : "row")};
  place-items: ${props => (props.listView ? "center" : "unset")};
  position: ${props => (props.inlineView ? "relative" : "static")};

  img {
    border-radius: ${props => (props.desktopFull ? "10px" : "0px")};
  }

  div {
    bottom: ${themeGet("space.7")}px;
    color: ${props => (props.inlineView ? "whitesmoke" : "inherit")};
    left: 0;
    position: ${props => (props.inlineView ? "absolute" : "static")};
    right: 0;
    padding: ${props => {
      if (props.listView) {
        return "120px"
      } else if (props.desktopFull) {
        return "unset"
      } else {
        return undefined
      }
    }};
  }
`

export type PromotionalBannerProps = LayoutProps &
  SpaceProps & {
    color: "beige" | "lightgreen" | "pink"
    layout: "desktopFull" | "inlineView" | "listView"
    description: string
    image: {
      alt: string
      src: string
    }
    link: {
      attributes?: {
        href: string
        title: string
      }
      text: string
    }
    name: string
    showImage: boolean
  }

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  image,
  link,
  showImage = true,
  text,
  title,
  ...props
}) => {
  const content = (
    <React.Fragment>
      {showImage && (
        <img
          alt={image?.description as string}
          src={image?.url as string}
          title={image?.title as string}
        />
      )}
      <div className="container">
        {title && <h1>{title}</h1>}
        {link && <Link title={link?.attributes?.title} to={link?.attributes?.href}>{link?.text}</Link>}
        {text && <span>{text}</span>}
      </div>
    </React.Fragment>
  )
  return <PromotionalBannerView {...props}>{content}</PromotionalBannerView>
}
