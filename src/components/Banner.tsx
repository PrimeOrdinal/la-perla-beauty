import React, { ReactElement } from "react"
import styled from "styled-components"

const StyledBanner = styled.div`
  background-color: #efeee9;
  display: grid;
  text-align: center;
  grid-auto-flow: column;
`

export const Banner = (): ReactElement => {
  return (
    <StyledBanner>
      <a href="https://laperla.com">Lorem ipsum dolor sit amet</a>
    </StyledBanner>
  )
}

Banner.propTypes = {}

export default Banner
