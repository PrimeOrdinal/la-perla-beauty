import React from "react"
import styled from "styled-components"

import OpenQuote from "../images/OpenQuote.svg"
import CloseQuote from "../images/CloseQuote.svg"

const BlockQuoteStyled = styled.div`
  display: flex;
  justify-content: center;
  &::before {
    content: "";
    background: url(${OpenQuote});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    width: 78px;
  }
  &::after {
    content: "";
    background: url(${CloseQuote});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    width: 78px;
  }
  blockquote {
    font-family: "Tiempos";
    font-size: 18px;
    padding-left: 26px;
    max-width: 60ch;
    &::before {
      content: "";
    }
    &::after {
      content: "";
    }
  }
`

export const BlockQuote: React.FC = ({ children }) => {
  return (
    <BlockQuoteStyled>
      <blockquote>{children}</blockquote>
    </BlockQuoteStyled>
  )
}

export default BlockQuote
