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
  appearance: "none";
  border: none;
  cursor: pointer;

  &:disabled {
    color: "disabled";
    cursor: "not-allowed";
  }

  ${variant({
    scale: "buttons",
    variants: {
      primary: {
        // color: "white",
        // bg: "primary",
        // "&:disabled": {
        //   bg: "tertiary",
        //   cursor: "not-allowed",
        // },
      },
      secondary: {
        // color: "white",
        // bg: "secondary",
      },
      tertiary: {
        // color: "white",
        // bg: "tertiary",
      },
    },
  })}

  ${compose(buttonStyle, color, layout, space)}
`
