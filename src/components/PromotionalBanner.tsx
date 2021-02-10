import { themeGet } from "@styled-system/theme-get"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { compose, layout, space, LayoutProps, SpaceProps } from "styled-system"

import { mediaQueries } from "../theme"

const PromotionalBannerStyled = styled.aside`
  background-color: ${themeGet("colors.pink")};
  border-radius: ${themeGet("radii.4")}px;
  display: grid;
  grid-auto-flow: row;
  overflow: hidden;

  img {
    aspect-ratio: 21 / 14;
    object-fit: cover;
    width: 100%;

    ${mediaQueries.md} {
      aspect-ratio: 23 / 8;
    }
  }

  div {
    padding-block-end: ${themeGet("space.9")}px;
    padding-block-start: ${themeGet("space.9")}px;
    padding-inline-end: ${themeGet("space.9")}px;
    padding-inline-start: ${themeGet("space.9")}px;
  }
  
  .heading {
    margin-block-start: unset;
    padding-block-end: ${themeGet("space.4")}px;
  }

  span {
    display: block;
    margin-block-end: ${themeGet("space.5")}px;
  }

  .link {
    color: inherit;
    text-decoration: unset;
    text-transform: uppercase;
  }

  ${compose(layout, space)}
`

export type PromotionalBannerProps = LayoutProps &
  SpaceProps & {
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
}) => (
  <PromotionalBannerStyled
    {...props}
  >
    {showImage && (
      <img
        alt={image?.description as string}
        src={image?.url as string}
        title={image?.title as string}
      />
    )}
    <div>
      <h1 className="heading">{title}</h1>
      <span>{text}</span>
      <Link to={link?.href} className="link">{link?.text}</Link>
    </div>
  </PromotionalBannerStyled>
)