import { themeGet } from "@styled-system/theme-get"
import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"
import {
  buttonStyle,
  color,
  compose,
  layout,
  space,
  flexbox,
  variant,
  ButtonStyleProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { styles } from "../styles/button"

export type ButtonProps = React.HTMLProps<HTMLButtonElement> &
  ButtonStyleProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  VariantProps

export const baseStyles = css`
  &:disabled {
    color: ${themeGet("colors.disabled", "grey")};
  }

  svg,
  svg * {
    fill: ${props =>
      props.active
        ? themeGet("colors.black", "black")
        : themeGet("colors.lightgrey", "lightgrey")};
  }

  ${variant({
    scale: "buttons",
    variants: {
      primary: {
        backgroundColor: "black",
        color: "white",
      },
      secondary: {
        backgroundColor: "lightgrey",
        color: "darkgrey",
      },
      tertiary: {
        backgroundColor: "orange",
        color: "darkgrey",
      },
    },
  })}

  ${compose(buttonStyle, color, layout, space, flexbox)}
`

export const Button: React.FC<ButtonProps> = styled.button`
  ${baseStyles}
`


export const Link: React.FC<ButtonProps> = styled(GatsbyLink)`
  ${styles}
  ${baseStyles}
`
