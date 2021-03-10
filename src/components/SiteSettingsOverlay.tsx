import { themeGet } from "@styled-system/theme-get"
import React from "react"
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

import { Button } from "./Button"
import { Modal } from "./Modal"

const WrapperStyled = styled.div`
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
      font-size: var(--font-size-heading-4, 13px);
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

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type SiteSettingsOverlayProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    closeModal: React.DispatchWithoutAction
    modalIsOpen: boolean
  }

export const SiteSettingsOverlay = ({
  closeModal,
  modalIsOpen = false,
  ...props
}) => {
  return (
    <Modal
      closeModal={closeModal}
      contentLabel="Country Selector"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <WrapperStyled {...props}>
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
            Continue shopping
          </Button>
        </form>
      </WrapperStyled>
    </Modal>
  )
}
