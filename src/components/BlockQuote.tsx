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
    font-family: "Tiempos";
    font-size: ${themeGet("fontSizes.heading2Mobile")}px;
    max-width: ${themeGet("space.12")}ch;
    position: relative;
    margin: 0;
    padding-top: ${themeGet("space.6")}px;
    padding-bottom: ${themeGet("space.6")}px;
    line-height: ${themeGet("space.7")}px;
    ${mediaQueries.md} {
      font-size: ${themeGet("fontSizes.heading1Desktop")}px;
      line-height: ${themeGet("space.8")}px;
    }
    &::before {
      content: "";
      background: url(${OpenQuote});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: top;
      height: 37px;
      width: 51px;
      position: absolute;
      top: 0;
      left: 0px;
      z-index: -1;
      ${mediaQueries.md} {
        height: 56px;
        width: 78px;
        left: -10%;
        transform: translateX(10%);
      }
    }
    &::after {
      content: "";
      background: url(${CloseQuote});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      height: 37px;
      width: 51px;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -1;
      ${mediaQueries.md} {
        height: 56px;
        width: 78px;
        right: -10%;
        transform: translateX(10%);
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
