import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { ReactComponent as WishlistUSP } from "../images/WishlistUSP.svg"
import { ReactComponent as Checkout } from "../images/Checkout.svg"
import { ReactComponent as Diamond } from "../images/Diamond.svg"
import { ReactComponent as Tracking } from "../images/Tracking.svg"

const IconContainerStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: flex-start;
  gap: ${themeGet("space.7")}px;
  .iconWrapper {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    align-items: center;
    h3 {
      font-family: "Quicksand";
      text-transform: uppercase;
      font-size: ${themeGet("fontSizes.heading3Desktop")}px;
      display: ${props => (props.withTitle ? "initial" : "none")};
      text-align: ${props => (props.withTitle ? "center" : "left")};
    }
    span {
      display: ${props => (props.withTitle ? "block" : "initial")};
    }

    svg {
      height: 40px;
    }
    p {
      text-align: ${props => (props.withTitle ? "center" : "left")};
    }
  }
`

export type IconListProps = {
  layout: "withTitle"
}

export const IconList: React.FC<IconListProps> = () => {
  return (
    <IconContainerStyled>
      <div className="iconWrapper">
        <Checkout />
        <h3>Title</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
      </div>
      <div className="iconWrapper">
        <Diamond />
        <h3>Title</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
      </div>
      <div className="iconWrapper">
        <Tracking />
        <h3>Title</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
      </div>
      <div className="iconWrapper">
        <WishlistUSP />
        <h3>Title</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
      </div>
    </IconContainerStyled>
  )
}
