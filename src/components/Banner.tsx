import React from "react"
import styled from "styled-components"

const StyledBanner = styled.div`
  background-color: #efeee9;
  display: grid;
  text-align: center;
  grid-auto-flow: column;
  padding: ${props => props.theme.space[2]}px;
`

export const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <a href="https://laperla.com">Lorem ipsum dolor sit amet</a>
    </StyledBanner>
  )
}
