import React from "react"
import styled from "styled-components"

import { Link } from "./Button"

export type BlurCardProps = {
  link: string
  heading: string
  subheading: string
}

export const BlurCardStyled = styled.article`
  min-height: 370px;
  border-radius: 10px;
  background: #f6c5c5;
  display: inline-grid;
  grid-auto-flow: row;
  place-items: center;
  text-align: center;
  padding: 2rem;
  a {
    text-transform: uppercase;
    font-weight: bold;
  }
  h2 {
      
  }
`

export const BlurCard: React.FC<BlurCardProps> = ({
  link,
  heading,
  subheading,
}) => {
  return (
    <BlurCardStyled>
      <Link>{link}</Link>
      <h2>{heading}</h2>
      <span>{subheading}</span>
    </BlurCardStyled>
  )
}

export default BlurCard
