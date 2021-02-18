import { themeGet } from "@styled-system/theme-get"
import { Link } from "gatsby"
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
      font-weight: 600;
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
  position: ${props => (props.inlineView ? "relative" : "static")};
  border-radius: ${props => (props.desktopFull ? "0px" : "10px")};
  background-color: ${props =>
    props.desktopFull ? "transparent" : themeGet(`colors.${props.color}`)};
  grid-auto-flow: ${props => (props.listView ? "column" : "row")};
  place-items: ${props => (props.listView ? "center" : "unset")};
  img {
    border-radius: ${props => (props.desktopFull ? "10px" : "0px")};
  }
  div {
    color: ${props => (props.inlineView ? "whitesmoke" : "inherit")};
    position: ${props => (props.inlineView ? "absolute" : "static")};
    left: 0;
    right: 0;
    bottom: ${themeGet("space.7")}px;
    padding: ${props => {
      if (props.listView) {
        return "120px"
      } else if (props.desktopFull) {
        return "0px"
      } else return "20px"
    }};
  }
`

export type PromotionalBannerProps = LayoutProps &
  SpaceProps & {
    color: "beige" | "pink" | "lightgreen"
    layout: "inlineView" | "desktopFull" | "listView"
    description: string
    image: {
      alt: string
      src: string
    }
    link: {
      href: string
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
      <div>
        <h1>{title}</h1> <span>{text}</span>
        <Link to={link?.href}>{link?.text}</Link>
      </div>
    </React.Fragment>
  )
  return <PromotionalBannerView {...props}>{content}</PromotionalBannerView>
}
