import type {
  Colour as ColourProp,
  Link as LinkProp,
  Image as ImageProp,
} from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

import { colourClasses } from "../styles/colourClasses"

import { mediaQueries } from "../theme"

import { Link } from "./Button"

export type LeafProps = {
  colour: ColourProp
  image?: ImageProp
  layout:
    | "image-and-text-inside"
    | "image-and-text-outside"
    | "text-inside-and-image"
    | "text-outside-and-image"
  link?: LinkProp
  text: string
  title: string
}

const LeafWrapperStyled = styled.div`
  --image-height: clamp(160px, 50vw, 400px);
  --image-width: clamp(120px, 35.7vw, 300px);

  margin-block-end: ${themeGet("space.11")}px;
  margin-block-start: ${themeGet("space.11")}px;

  ${colourClasses}

  .leaf-container {
    display: flex;
    justify-content: center;

    ${mediaQueries.md} {
      background-color: ${themeGet("colors.white")};
      padding-block-start: ${themeGet("space.14")}px;
      padding-block-end: ${themeGet("space.14")}px;
    }
  }

  article {
    display: grid;
    grid-template-columns: calc(var(--image-width,0) * 0.5) 1fr;
  }

  figure {
    height: var(--image-height, 215px);
    margin-block: ${themeGet("space.12")}px;
    margin-inline: unset;
    position: relative;
    width: var(--image-width, 160px);

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  .leaf {
    align-items: center;
    border-radius: 67px 0 67px 0;
    display: flex;
    max-width: 98ch;
    padding-inline-start: calc(var(--image-width, 0) * 0.5);

    ${mediaQueries.md} {
      border-radius: 100px 0 100px 0;
    }
  }

  .content {
    align-content: center;
    display: grid;
    padding-inline: ${themeGet("space.8")}px;

    ${mediaQueries.md} {
      padding-inline: ${themeGet("space.14")}px;
    }
  }

  h2 {
    margin: 0;

    ${mediaQueries.md} {
      font-size: ${themeGet("fontSizes.6")}px;
    }
  }

  p {
    overflow: hidden;
    margin-block-end: 15px;
    margin-block-start: 10px;
    max-height: 16ch;

    ${mediaQueries.md} {
      margin-block-end: 20px;
      margin-block-start: 15px;
    }
  }

  a {
    font-weight: bold;
    text-transform: uppercase;
  }


  &.image-and-text-inside,
  &.text-inside-and-image {
    .outside {
      display: none;
    }
  }

  &.text-inside-and-image,
  &.text-outside-and-image {
    article {
      direction: rtl;
    }

    .content {
      direction: ltr;
    }
  }

  &.image-and-text-outside,
  &.text-outside-and-image {
    .leaf-container {
      background-color: ${themeGet("colors.white")};
    }

    article {
      display: grid;
      grid-auto-flow: column;
    }

    .leaf {
      ${mediaQueries.md} {
        min-width: var(--image-width, 255px);
      }
    }

    .inside {
      ${mediaQueries.md} {
        display: none;
      }
    }

    .outside {
      ${mediaQueries.mdDown} {
        display: none;
      }
    }
  }
`

export const Leaf: React.FC<LeafProps> = ({
  colour,
  image,
  layout,
  link,
  text,
  title,
}) => {
  const content = (
    <React.Fragment>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {link && <Link to={link?.href}>{link?.title}</Link>}
    </React.Fragment>
  )
  return (
    <LeafWrapperStyled className={clsx("container", layout)}>
      <div className={clsx("leaf-container")}>
        <article>
          {image && (
            <figure>
              <img src={image?.src} alt={image?.alt} className="img-bl" />
            </figure>
          )}
          <div className={clsx(colour, "leaf")}>
            <div className={clsx("content", "inside")}>{content}</div>  
          </div>
          <div className={clsx("content", "outside")}>{content}</div>
        </article>
      </div>
    </LeafWrapperStyled>
  )
}

export default Leaf
