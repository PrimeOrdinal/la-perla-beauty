import type { Colour } from "../../types/theme"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

import { colourClasses } from "../styles/colourClasses"

import { mediaQueries } from "../theme"

import { Link } from "./Button"

export type LeafTwoProps = {
  body: string
  color: Colour
  heading: string
  img?: {
    alt?: string
    src: string
  }
  link: React.ReactNode
}

const LeafWrapperStyled = styled.div`
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
    article {
      position: relative;
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
    div {
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
      h2 {
        margin: 0;
        ${mediaQueries.md} {
          font-size: ${themeGet("fontSizes.6")}px;
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

export const LeafTwo: React.FC<LeafTwoProps> = ({
  body,
  color,
  heading,
  img,
  link,
}) => {
  return (
    <LeafWrapperStyled className="container">
      <div className="leaf-container">
        <article>
          {img && (
            <figure>
              <img src={img.src} alt={img.alt} className="img-bl" />
            </figure>
          )}
          <div className={clsx(color)}>
            {heading && <h2>{heading}</h2>}
            {body && <p>{body}</p>}
            {link && <Link to="#">{link}</Link>}
          </div>
        </article>
      </div>
    </LeafWrapperStyled>
  )
}

export default LeafTwo
