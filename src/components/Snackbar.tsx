import { themeGet } from "@styled-system/theme-get"
import React, { useContext } from "react"
import styled from "styled-components"
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  variant,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { Button } from "./Button"

import { ReactComponent as CloseIcon } from "../../static/icons/Close.svg"

export type SnackbarProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    labelText: string
  }
export const SnackbarStyled: React.FC<SnackbarProps> = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: ${props => (props.labelText ? "grid" : "none")};
  left: 0;
  place-items: center;
  position: fixed;
  right: 0;
  top: 0;
`

const PanelStyled: React.FC<SnackbarProps> = styled.div`
  --snackbar-height: 200px;
  --snackbar-width: 400px;

  background-color: ${themeGet("colors.pink")};
  border-radius: ${themeGet("radii.4")}px;
  color: ${themeGet("colors.black")};
  display: grid;
  grid-template-columns: 1fr auto;
  height: var(--snackbar-height, 200px);
  padding: ${themeGet("space.3")}px ${themeGet("space.4")}px;
  place-items: center;
  text-align: center;
  text-transform: uppercase;
  width: var(--snackbar-width, 400px);

  svg {
    width: 12px;
  }

  ${variant({
    variants: {
      primary: {
        backgroundColor: "lilac",
        color: "black",
      },
      secondary: {
        backgroundColor: "pink",
        color: "black",
      },
      tertiary: {
        backgroundColor: "beige",
        color: "black",
      },
    },
  })}

  ${compose(color, flexbox, grid, layout, position, space)}
`

const CloseButtonStyled = styled(Button)`
  align-self: start;
  justify-self: start;
`

export const Snackbar: React.FC<SnackbarProps> = ({
  setSnackbar,
  ...props
}) => (
  <SnackbarStyled {...props}>
    <PanelStyled {...props}>
    {props.labelText && <span>{props.labelText}</span>}
    <CloseButtonStyled onClick={() => setSnackbar(undefined)}>
      <span className="sr-only">Close</span>
      <CloseIcon />
    </CloseButtonStyled>
    </PanelStyled>
  </SnackbarStyled>
)

export const SnackbarContext = React.createContext({
  labelText: undefined,
  setSnackbar: labelText => {
    console.log(labelText)
  },
} as {
  labelText: string | undefined
  setSnackbar: (labelText: string | undefined) => void
})
