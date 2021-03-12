import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"
import { themeGet } from "@styled-system/theme-get"

import type { Colour as ColourProp } from "../../types/components"

import OpenQuote from "../../static/icons/OpenQuote.svg"
import CloseQuote from "../../static/icons/CloseQuote.svg"

export type BlockquoteProps = {
  children: React.ReactNode
  colour: ColourProp
}

const BlockquoteStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-block-start: ${themeGet("space.8")}px;
  margin-block-end: ${themeGet("space.8")}px;

  blockquote {
    font-family: "Tiempos", serif;
    font-size: var(--font-size-heading-2, 16px);
    line-height: ${themeGet("space.7")}px;
    margin: 0;
    max-width: ${themeGet("space.12")}ch;
    padding-block-end: ${themeGet("space.6")}px;
    padding-block-start: ${themeGet("space.6")}px;
    position: relative;

    ${mediaQueries.md} {
      font-size: var(--font-size-heading-1, 18px);
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

export const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  ...props
}) => {
  return (
    <BlockquoteStyled className="container" {...props}>
      <blockquote className="container">{children}</blockquote>
    </BlockquoteStyled>
  )
}

export default Blockquote
