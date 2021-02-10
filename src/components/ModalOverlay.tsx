import React, { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

import DownArrow, {
  ReactComponent as DownArrowComponent,
} from "../images/DownArrow.svg"
import { ReactComponent as Close } from "../images/Close.svg"

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

const BtnStyled = styled.button`
  padding: 0;
  svg {
    height: ${themeGet("space.3")}px;
    object-fit: contain;
    margin-left: ${themeGet("space.2")}px;
  }
`

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  .close-button {
    align-self: end;
    padding: 0;
    svg {
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
    .select {
      appearance: none;
      padding: 0.75rem 0.5rem;
      border-radius: ${themeGet("radii.3")}px;
      border: 1px solid ${themeGet("colors.black")};
      background-image: url(${DownArrow});
      background-repeat: no-repeat;
      background-position: right 0.75rem top 50%;
      width: 100%;
      font-size: ${themeGet("fontSizes.heading4Desktop")}px;
      &:focus {
        outline: none;
      }
      option {
        font-size: ${themeGet("fontSizes.heading4Desktop")}px;
      }
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
      background: ${themeGet("colors.black")};
      color: ${themeGet("colors.white")};
      font-size: ${themeGet("fontSizes.heading4Desktop")}px;
      padding: 0.75rem 0.5rem;
      width: 100%;
      margin-block-start: 1.5rem;
    }
  }
`

const ModalOverlay = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)"
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <BtnStyled onClick={openModal}>
        UK | ENGLISH | £
        <DownArrowComponent />
      </BtnStyled>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Country Selector"
        style={ModalOverlayStyle}
      >
        <WrapperStyled>
          <button className="close-button" onClick={closeModal}>
            <Close />
          </button>
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
            <button className="button">Continue Shopping</button>
          </form>
        </WrapperStyled>
      </Modal>
    </div>
  )
}

export default ModalOverlay
