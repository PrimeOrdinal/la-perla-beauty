import { themeGet } from "@styled-system/theme-get"
import { Link as GatsbyLink } from "gatsby"
import React from "react"
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
        : themeGet("colors.lightgrey", "lightgrey")} !important;
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

  ${compose(buttonStyle, color, flexbox, layout, space)}
`

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export const AnchorStyled: React.FC<ButtonProps> = styled.a`
  ${styles}
  ${baseStyles}
`

export const Button: React.FC<ButtonProps> = styled.button`
  ${styles}
  ${baseStyles}
`

export const LinkStyled: React.FC<ButtonProps> = styled(Link)`
  ${styles}
  ${baseStyles}
`