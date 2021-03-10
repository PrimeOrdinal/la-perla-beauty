import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { ReactComponent as CloseIcon } from "../../static/icons/Close.svg"

import { Button } from "./Button"

const ContainerStyled = styled.div`
  background-color: ${themeGet("colors.white")};
  border-radius: ${themeGet("radii.3")}px
  border-style: solid;
  bottom: 0px;
  display: grid;
  gap: 1rem;
  grid-auto-flow: row;
  padding-block-end: 1rem;
  position: absolute;
  width: 100%;

  .title {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-block-end: 1rem;
    padding-block-start: 1rem;
  }

  .close {
    height: 20px;
    object-fit: contain;
    padding: 0;
  }
`

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 50vh;
  position: relative;
`

export const AddToBagMobile: React.FC = () => (
  <Backdrop>
    <ContainerStyled className="container">
      <div className="title">
        <span>ITEM ADDED TO BAG</span>
        <button className="close">
          <CloseIcon />
        </button>
      </div>

      <Button variant="primary">View bag</Button>
      <Button variant="tertiary">Continue shopping</Button>
    </ContainerStyled>
  </Backdrop>
)
