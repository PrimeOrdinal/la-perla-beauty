import type * as CSS from 'csstype';

import React from "react"
import ReactModal from "react-modal"
import styled from "styled-components"
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { theme } from "../theme"

import { ReactComponent as Close } from "../../static/icons/Close.svg"

import { Button } from "./Button"

const ModalOverlayStyleDefault: CSS.Properties = {
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: theme.radii[4],
  inset: "180px 40px",
  overflow: "auto",
  padding: "20px 30px",
  position: "absolute",
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

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ModalProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    closeModal: React.DispatchWithoutAction
    contentLabel: string
    isOpen: boolean
    ModalOverlayStyleCustom?: CSS.Properties
  }

function afterOpenModal() {
  ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)"
  ReactModal.defaultStyles.overlay.zIndex = "99999"
}

export const Modal: React.FC<ModalProps> = ({
  children,
  closeModal,
  ModalOverlayStyleCustom,
  ...props
}) => {
  return (
    <ReactModal
      contentLabel={props.contentLabel}
      isOpen={props.isOpen ? props.isOpen : false}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={{
        content: { ...ModalOverlayStyleDefault, ...ModalOverlayStyleCustom },
      }}
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
