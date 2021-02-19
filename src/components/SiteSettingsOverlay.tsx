import { themeGet } from "@styled-system/theme-get"
import React from "react"
import Modal from "react-modal"
import styled from "styled-components"
import {
  color,
  compose,
  grid,
  layout,
  position,
  space,
  ColorProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from "styled-system"

import { ReactComponent as Close } from "../images/Close.svg"

import { Button } from "./Button"

const ModalOverlayStyle = {
  content: {
    position: "absolute",
    inset: "180px 40px",
    border: "1px solid rgb(114, 114, 114)",
    background: "rgb(255, 255, 255) none repeat scroll 0% 0%",
    overflow: "auto",
    borderRadius: "10px",
    outline: "currentcolor none medium",
    padding: "20px 30px",
  },
}

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;

  .close-button {
    align-self: end;
    align-self: flex-end;
    padding: 0;

    svg {
      color: ${themeGet("colors.black")};
      height: ${themeGet("space.7")}px;
      object-fit: contain;
    }
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
    margin-block-end: 2rem;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 0.75rem;
    grid-template-areas:
      "shipping language currency"
      "shipping-option language-option currency-option"
      " . button .";
    .label {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${themeGet("fontSizes.heading4Desktop")}px;
    }

    .shipping-label {
      grid-area: shipping;
    }

    .shipping-selection {
      grid-area: shipping-option;
    }

    .language-label {
      grid-area: language;
    }

    .language-selection {
      grid-area: language-option;
    }

    .currency-label {
      grid-area: currency;
    }

    .currency-selection {
      grid-area: currency-option;
    }

    .button {
      grid-area: button;
    }
  }

  ${compose(color, grid, layout, position, space)}
`

export type SiteSettingsOverlayProps = ColorProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    closeModal: React.DispatchWithoutAction
    modalIsOpen: boolean
  }

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)"
  Modal.defaultStyles.overlay.zIndex = "99999"
}

export const SiteSettingsOverlay = ({
  closeModal,
  modalIsOpen = false,
  ...props
}) => {
  return (
    <Modal
      contentLabel="Country Selector"
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={ModalOverlayStyle}
    >
      <WrapperStyled {...props}>
        <Button className="close-button" onClick={closeModal}>
          <Close />
        </Button>

        <h1>Lorem Ipsum</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi</p>

        <form>
          <label className="shipping-label label" htmlFor="shipping">
            Select shipping destination
          </label>
          <select className="shipping-selection select" name="shipping" id="">
            <option value="">United Kingdom</option>
          </select>
          <label className="language-label label" htmlFor="language">
            Select your language
          </label>
          <select className="language-selection select" name="language" id="">
            <option value="">English</option>
          </select>
          <label className="currency-label label" htmlFor="currency">
            Select your currency
          </label>
          <select className="currency-selection select" name="currency" id="">
            <option value="">GBP £</option>
          </select>
          <Button className="button" variant="primary">
            Continue Shopping
          </Button>
        </form>
      </WrapperStyled>
    </Modal>
  )
}
