import type { Colour } from "../../types/theme"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
import styled from "styled-components"

import { colourClasses } from "../styles/colourClasses"

import { mediaQueries } from "../theme"

import { Link } from "./Button"

export type LeafThreeProps = {
  body: string
  color: Colour
  title: string
  img?: {
    alt?: string
    src: string
  }
  link: string
}

const LeafWrapperStyled = styled.div`
  margin-block-start: ${themeGet("space.11")}px;
  margin-block-end: ${themeGet("space.11")}px;

  ${colourClasses}

  .leaf-container {
    display: flex;
    justify-content: center;

    ${mediaQueries.md} {
      background: #ffff;

      padding-top: ${themeGet("space.14")}px;
      padding-bottom: ${themeGet("space.14")}px;
    }

    article {
      position: relative;
      figure {
        margin: 0;
        position: absolute;
        right: 0;
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
      margin-right: 91px;
      padding-right: ${themeGet("space.14")}px;
      padding-left: ${themeGet("space.9")}px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 18.75rem;
      border-radius: 67px 0 67px 0;
      max-width: 98ch;
      min-width: 255px;
      ${mediaQueries.md} {
        margin-right: 150px;
        padding-right: 207px;
        padding-left: 57px;
        min-height: 486px;
        border-radius: 100px 0 100px 0;
      }
      h2 {
        margin: 0;
        ${mediaQueries.md} {
          font-size: ${themeGet("fontSizes.6")}px;
        }
      }
      p {
        margin-top: 10px;
        margin-bottom: 15px;
        ${mediaQueries.md} {
          margin-top: 15px;
          margin-bottom: 20px;
        }
      }
      a {
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`

export const LeafThree: React.FC<LeafThreeProps> = ({
  img,
  title,
  body,
  link,
  color,
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
            {title && <h2>{title}</h2>}
            {body && <p>{body}</p>}
            {link && <Link>{link}</Link>}
          </div>
        </article>
      </div>
    </LeafWrapperStyled>
  )
}

export default LeafThree
