import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"
import { themeGet } from "@styled-system/theme-get"

import OpenQuote from "../../static/icons/OpenQuote.svg"
import CloseQuote from "../../static/icons/CloseQuote.svg"

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

    &::before {
      background-position: top;
      background-repeat: no-repeat;
      background-size: contain;
      background: url(${OpenQuote});
      content: "";
      height: 37px;
      left: 0px;
      position: absolute;
      top: 0;
      width: 51px;
      z-index: -1;

      ${mediaQueries.md} {
        height: 56px;
        width: 78px;
        left: -10%;
        transform: translateX(10%);
      }
    }
    &::after {
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: contain;
      background: url(${CloseQuote});
      bottom: 0;
      content: "";
      height: 37px;
      position: absolute;
      right: 0;
      width: 51px;
      z-index: -1;

      ${mediaQueries.md} {
          height: 56px;
          right: -10%;
          transform: translateX(10%);
          width: 78px;
      }
    }
  }
`

export const BlockQuote: React.FC = ({ children }) => {
  return (
    <BlockQuoteStyled className="container">
      <blockquote className="container">{children}</blockquote>
    </BlockQuoteStyled>
  )
}

export default BlockQuote
