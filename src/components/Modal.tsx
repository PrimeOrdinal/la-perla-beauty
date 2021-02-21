import React from "react"
import ReactModal from "react-modal"
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
  }

  .title {
    text-align: center;
  }

  ${compose(color, grid, layout, position, space)}
`

export type ModalProps = ColorProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    closeModal: React.DispatchWithoutAction
    modalIsOpen: boolean
  }

function afterOpenModal() {
  ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)"
  ReactModal.defaultStyles.overlay.zIndex = "99999"
}

export const Modal = ({
  children,
  closeModal,
  contentLabel,
  isOpen = false,
  ...props
}) => {
  return (
    <ReactModal
      contentLabel={contentLabel}
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={ModalOverlayStyle}
    >
      <WrapperStyled {...props}>
        <Button className="close-button" onClick={closeModal}>
          <Close />
        </Button>

        {children}
      </WrapperStyled>
    </ReactModal>
  )
}
