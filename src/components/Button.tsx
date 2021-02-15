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
    },
  })}

  ${compose(buttonStyle, color, layout, space)}
`
