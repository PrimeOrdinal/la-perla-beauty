import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"

export type LeafWrapperProps = {
  children?: React.ReactNode
}

const StyledLeafWrapper = styled.section`
  background: none;
  ${mediaQueries.md} {
    padding-top: 87px;
    background-image: url("https://picsum.photos/600/500?grayscale");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
  }
`

export const LeafWrapper: React.FC<LeafWrapperProps> = ({ children }) => {
  return <StyledLeafWrapper>{children}</StyledLeafWrapper>
}

export default LeafWrapper
