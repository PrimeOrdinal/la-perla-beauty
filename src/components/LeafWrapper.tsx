import React from "react"
import styled from "styled-components"

import { mediaQueries } from "../theme"

export type LeafWrapperProps = {
  children?: React.ReactNode
}

const StyledLeafWrapper = styled.section`
  background-color: none;

  ${mediaQueries.md} {
    background-image: url("https://picsum.photos/600/500?grayscale");
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    padding-block-start: 87px;
  }
`

export const LeafWrapper: React.FC<LeafWrapperProps> = ({ children }) => <StyledLeafWrapper>{children}</StyledLeafWrapper>

export default LeafWrapper
