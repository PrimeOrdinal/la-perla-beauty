import React from "react"
import { mediaQueries } from "../theme"
import styled from "styled-components"
import { Button } from "./Button"
import { ReactComponent as Close } from "../images/Close.svg"

const ContainerStyled = styled.div`
  border: 1px solid;
  background: white;
  border-radius: 13px;
  padding-block-end: 1rem;
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  width: 100%;
  position: absolute;
  bottom: 0px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block-end: 1rem;
    padding-block-start: 1rem;
  }

  .close {
    padding: 0;
    height: 20px;
    object-fit: contain;
    svg,
    svg * {
      fill: black;
    }
  }
`

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 50vh;
  position: relative;
`

export const AddToBagMobile: React.FC = () => {
  return (
    <Backdrop>
      <ContainerStyled className="container">
        <div className="title">
          <span>ITEM ADDED TO BAG</span>
          <button className="close">
            <Close />
          </button>
        </div>

        <Button variant="primary">View bag</Button>
        <Button variant="tertiary">Continue shopping</Button>
      </ContainerStyled>
    </Backdrop>
  )
}
