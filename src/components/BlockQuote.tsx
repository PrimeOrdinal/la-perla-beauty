import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"
import { themeGet } from "@styled-system/theme-get"

import type { Colour } from "../../types/theme"

import OpenQuote from "../../static/icons/OpenQuote.svg"
import CloseQuote from "../../static/icons/CloseQuote.svg"

export type BlockQuoteProps = {
  color: Colour
}

const BlockQuoteStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-block-start: ${themeGet("space.8")}px;
  margin-block-end: ${themeGet("space.8")}px;

  blockquote {
    font-family: "Tiempos", serif;
    font-size: ${themeGet("fontSizes.heading2Mobile")}px;
    line-height: ${themeGet("space.7")}px;
    margin: 0;
    max-width: ${themeGet("space.12")}ch;
    padding-bottom: ${themeGet("space.6")}px;
    padding-top: ${themeGet("space.6")}px;
    position: relative;

    ${mediaQueries.md} {
      font-size: ${themeGet("fontSizes.heading1Desktop")}px;
      line-height: ${themeGet("space.8")}px;
    }

    &::before,
    &::after {
      background-repeat: no-repeat;
      background-size: contain;
      content: "";
      height: 37px;
      position: absolute;
      z-index: -1;
      width: 51px;
    }
    &::before {
      background-color: ${props =>
        props.color
          ? themeGet(`colors.${props.color}`)
          : themeGet(`colors.lightgrey`)};
      mask: url(${OpenQuote}) no-repeat top;
      mask-size: contain;
      left: 0;
      top: 0;

      ${mediaQueries.md} {
        height: 56px;
        width: 78px;
        left: -10%;
        transform: translateX(10%);
      }
    }
    &::after {
      background-color: ${props =>
        props.color
          ? themeGet(`colors.${props.color}`)
          : themeGet(`colors.lightgrey`)};
      mask: url(${CloseQuote}) no-repeat bottom;
      mask-size: contain;
      bottom: 0;
      right: 0;

      ${mediaQueries.md} {
        height: 56px;
        right: -10%;
        transform: translateX(10%);
        width: 78px;
      }
    }
  }
`

export const BlockQuote: React.FC<BlockQuoteProps> = ({
  children,
  ...props
}) => {
  return (
    <BlockQuoteStyled className="container" {...props}>
      <blockquote className="container">{children}</blockquote>
    </BlockQuoteStyled>
  )
}

export default BlockQuote
