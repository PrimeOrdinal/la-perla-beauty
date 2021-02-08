import React from "react"
import { mediaQueries, theme } from "../theme"
import styled from "styled-components"

const ContainerStyled = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  .box {
    min-height: 10rem;
    background: #a94ea9;
  }
  
  .banner {
    min-height: 10rem;
    background: #521952;
    grid-column: span 2;
  }

  ${mediaQueries.md} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    .box {
    }
    .banner {
      grid-column: span 2;
    }
  }
`

export const ProductCardWrapper: React.FC = () => {
  return (
    <ContainerStyled>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="banner"></div>
      <div className="banner"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </ContainerStyled>
  )
}
