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
        backgroundColor: themeGet("buttons.primary.backgroundColor", "white"),
        color: themeGet("buttons.primary.color", "black"),
      },
      secondary: {
        backgroundColor: themeGet("buttons.secondary.backgroundColor", "black"),
        color: themeGet("buttons.secondary.color", "white"),
      },
    },
  })}

  ${compose(buttonStyle, color, layout, space)}
`
