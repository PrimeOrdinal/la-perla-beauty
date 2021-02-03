import { themeGet } from "@styled-system/theme-get"
import styled from "styled-components"
import {
  buttonStyle,
  color,
  compose,
  layout,
  space,
  variant,
  ButtonStyleProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type ButtonProps = React.HTMLProps<HTMLButtonElement> &
  ButtonStyleProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  VariantProps

export const Button: React.FC<ButtonProps> = styled.button`
  &:disabled {
    color: ${themeGet("colors.disabled", "grey")};
  }

  ${variant({
    prop: "buttons",
    variants: {
      primary: {
        color: "white",
        bg: themeGet("colors.primary", "grey"),
      },
      secondary: {
        color: "white",
        bg: themeGet("colors.secondary", "grey"),
      },
      tertiary: {
        color: "white",
        bg: themeGet("colors.tertiary", "grey"),
      },
      quaternary: {
        color: "white",
        bg: themeGet("colors.quaternary", "grey"),
      },
    },
  })}

  ${compose(buttonStyle, color, layout, space)}
`
