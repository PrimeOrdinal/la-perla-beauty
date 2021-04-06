import { themeGet } from "@styled-system/theme-get"
import { Link as GatsbyLink } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import {
  buttonStyle,
  color, 
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  variant,
  ButtonStyleProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { styles as buttonStyles } from "../styles/button"

export type ButtonProps = React.HTMLProps<HTMLButtonElement> &
  ButtonStyleProps &
  ColorProps & FlexboxProps & GridProps &
  LayoutProps & PositionProps &
  SpaceProps &
  VariantProps & {
    active: "active" | "inactive"
  }

  export type LinkProps = React.HTMLProps<HTMLAnchorElement> &
  ButtonStyleProps &
  ColorProps &
  GridProps &
  LayoutProps &
  SpaceProps &
  VariantProps

export const baseStyles = css`
  &:disabled {
    color: ${themeGet("colors.disabled", "grey")};
  }

  svg,
  svg * {
    ${props => props.active && 
      `fill: ${props.active === "active" ? themeGet("colors.black") : themeGet("colors.lightgrey", "lightgrey")} !important;`
    }
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

  ${compose(buttonStyle, color, flexbox, grid, layout, position, space)}
`

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const LinkContextual = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        activeClassName="active"
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

export const Anchor: React.FC<LinkProps> = styled.a`
  ${baseStyles}

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const Button: React.FC<ButtonProps> = styled.button`
  ${buttonStyles}
  ${baseStyles}

  ${compose(buttonStyle, color, flexbox, grid, layout, position, space)}
`

export const ButtonUnstyled: React.FC<ButtonProps> = styled.button`
  ${baseStyles}

  ${compose(buttonStyle, color, flexbox, grid, layout, position, space)}
`

export const Link: React.FC<LinkProps> = styled(LinkContextual)`
  ${baseStyles}

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const LinkButton: React.FC<LinkProps> = styled(LinkContextual)`
  ${buttonStyles}
  ${baseStyles}

  ${compose(color, flexbox, grid, layout, position, space)}
`