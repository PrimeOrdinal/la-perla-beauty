import React from "react"
import styled from "styled-components"
import { ReactComponent as WishlistUSP } from "../images/WishlistUSP.svg"
import { ReactComponent as Checkout } from "../images/Checkout.svg"
import { ReactComponent as Diamond } from "../images/Diamond.svg"
import { ReactComponent as Tracking } from "../images/Tracking.svg"

const IconContainerStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: flex-start;
  gap: 1rem;
  .iconWrapper {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    align-items: center;
    svg {
      height: 40px;
    }
  }
`

export const IconList: React.FC = () => {
  return (
    <IconContainerStyled>
      <div className="iconWrapper">
        <Checkout />
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
      </div>
      <div className="iconWrapper">
        <Diamond />
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
      </div>
      <div className="iconWrapper">
        <Tracking />
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
      </div>
      <div className="iconWrapper">
        <WishlistUSP />
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
      </div>
    </IconContainerStyled>
  )
}
