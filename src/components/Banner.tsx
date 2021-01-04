import PropTypes, { InferProps } from "prop-types"
import React, { ReactElement } from "react"
import styled from "styled-components"

const StyledBanner = styled.div`
  background-color: #efeee9;
  display: grid;
  text-align: center;
  grid-auto-flow: column;
`

export const Banner = ({}: InferProps<
  typeof Banner.propTypes
> = {}): ReactElement => {
  return (
    <StyledBanner className="banner">
      <a href="https://laperla.com">Lorem ipsum dolor sit amet</a>
    </StyledBanner>
  )
}

Banner.propTypes = {}

export default Banner
