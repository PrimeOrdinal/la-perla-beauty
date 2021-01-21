import styled from "styled-components"
import {
  color,
  compose,
  layout,
  space,
  variant,
  ColorProps,
  LayoutProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type ButtonProps = ColorProps &
  LayoutProps &
  SpaceProps &
  VariantProps & {
    // bg?: string
    // color?: string
    disabled?: boolean
    // padding?: number
    // space?: number
    // variant?: "primary" | "secondary" | "tertiary"
  }

export const Button: React.FC<ButtonProps> = styled.button`
  appearance: "none";
  background-color: ${props => props.theme.buttons.primary.bg};
  border: none;
  cursor: pointer;
  font-family: "inherit";
  padding: ${props => props.theme.space[2]}px;

  ${variant({
    variants: {
      primary: {
        color: "white",
        bg: "primary",
      },
      secondary: {
        color: "white",
        bg: "secondary",
      },
      tertiary: {
        color: "white",
        bg: "tertiary",
      },
    },
  })}

  ${compose(color, layout, space)}

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }
`
