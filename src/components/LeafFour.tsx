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

export type LeafFourProps = {
  colour: ColourProp
  image?: ImageProp
  link?: LinkProp
  text: string
  title: string
}

const LeafWrapperStyled = styled.div`
  margin-block-end: ${themeGet("space.11")}px;
  margin-block-start: ${themeGet("space.11")}px;

  ${colourClasses}

  .leaf-container {
    display: flex;
    justify-content: center;
    background-color: ${themeGet("colors.white")} ${mediaQueries.md} {
      padding-block-start: ${themeGet("space.14")}px;
      padding-block-end: ${themeGet("space.14")}px;
    }
    article {
      position: relative;
      ${mediaQueries.md} {
        display: grid;
        grid-auto-flow: column;
        gap: ${themeGet("space.11")}px;
        align-items: center;
      }
      figure {
        margin: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        img {
          height: 215px !important;
          width: 161px !important;
          ${mediaQueries.md} {
            height: 400px !important;
            width: 300px !important;
          }
        }
      }
    }
    .mobileLeaf {
      margin-inline-start: 91px;
      padding-inline-start: ${themeGet("space.14")}px;
      padding-inline-end: ${themeGet("space.9")}px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 18.75rem;
      border-radius: 67px 0 67px 0;
      max-width: 98ch;
      min-width: 255px;
      ${mediaQueries.md} {
        margin-inline-start: 150px;
        padding-inline-start: 207px;
        padding-inline-end: 57px;
        border-radius: 100px 0 100px 0;
        min-height: 486px;
      }
      .mobileContent {
        ${mediaQueries.md} {
          display: none;
        }
        h2 {
          margin: 0;
          ${mediaQueries.md} {
            font-size: var(--font-size-lg, 24px);
          }
        }
        p {
          margin-block-start: 10px;
          margin-block-end: 15px;
          ${mediaQueries.md} {
            margin-block-start: 15px;
            margin-block-end: 20px;
          }
        }
        a {
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }

    .desktopLeaf {
      display: none;
      ${mediaQueries.md} {
        display: block;
      }
      h2 {
        margin: 0;
        ${mediaQueries.md} {
          font-size: var(--font-size-lg, 24px);
        }
      }
      p {
        margin-block-start: 10px;
        margin-block-end: 15px;
        ${mediaQueries.md} {
          margin-block-start: 15px;
          margin-block-end: 20px;
        }
      }
      a {
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`

export const LeafFour: React.FC<LeafFourProps> = ({
  colour,
  image,
  link,
  text,
  title,
}) => {
  return (
    <LeafWrapperStyled className="container">
      <div className="leaf-container">
        <article>
          {image && (
            <figure>
              <img src={image.src} alt={image.alt} className="img-bl" />
            </figure>
          )}
          <div className={clsx(colour, "mobileLeaf")}>
            <div className="mobileContent">
              {title && <h2>{title}</h2>}
              {text && <p>{text}</p>}
              {link && <Link to="#">{link}</Link>}
            </div>
          </div>
          <div className="desktopLeaf">
            <div className="desktopContent">
              {title && <h2>{title}</h2>}
              {text && <p>{text}</p>}
              {link && <Link to={link?.href}>{link?.title}</Link>}
            </div>
          </div>
        </article>
      </div>
    </LeafWrapperStyled>
  )
}

export default LeafFour
