import { DefaultTheme } from "styled-components"

type BreakpointsProp = Array<string> & {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

type FontSizesProp = Array<number> & {
  small?: number
  body?: number
  heading1Desktop?: number
  heading2Desktop?: number
  heading3Desktop?: number
  heading4Desktop?: number
  heading1Mobile?: number
  heading2Mobile?: number
  heading3Mobile?: number
  heading4Mobile?: number
}

export const breakpoints: BreakpointsProp = ["40em", "52em", "64em", "80em"]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const fontSizeBase = 16;

export const fontSizes: FontSizesProp = [(11/fontSizeBase), (12/fontSizeBase), (13/fontSizeBase), 14/fontSizeBase, 16/fontSizeBase, 18/fontSizeBase, 24/fontSizeBase, 32/fontSizeBase]

fontSizes.small = fontSizes[0]
fontSizes.body = fontSizes[1]
fontSizes.heading4Desktop = fontSizes[2]
fontSizes.heading3Desktop = fontSizes[3]
fontSizes.heading2Desktop = fontSizes[4]
fontSizes.heading1Desktop = fontSizes[5]
fontSizes.heading4Mobile = fontSizes[0]
fontSizes.heading3Mobile = fontSizes[3]
fontSizes.heading2Mobile = fontSizes[4]
fontSizes.heading1Mobile = fontSizes[5]

export const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
}

export const theme: DefaultTheme = {
  borderRadius: "5px",
  breakpoints,
  colors: {
    black: "#363139",
    white: "#ffffff",
    lightgrey: "#efeee9",
    lilac: "#d3cbd6",
    pink: "#d3cbd6",
    lightgreen: "#d3cbd6",
    beige: "#debf9b",
    red: "#b74539",
    darkgrey: "#858585",
    disabled: "#ccc",
    text: "#363139",
    background: "#f5f5f5",
    modes: {
      dark: {
        text: "#ffffff",
        background: "#000000",
        primary: "#0cf",
        secondary: "#90c",
      },
      light: {
        text: "#000000",
        background: "#ffffff",
        primary: "#0cf",
        secondary: "#90c",
      }
    },
  },
  fonts: {
    body: '"Quicksand", Helvetica, Arial, sans-serif',
    heading: "inherit",
  },
  fontSizes,
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  mediaQueries,
  space: [0, 4/16, 8/16, 12/16, 14/16, 16/16, 20/16, 24/16, 32/16, 48/16, 64/16, 80/16, 96/16, 128/16],
}

theme.border = {
  color: theme.colors.lightgrey,
  width: "1px",
}

theme.buttons = {
  primary: {
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    "&:disabled": {},
    "&:hover": {
      color: "background",
    },
  },
  secondary: {
    backgroundColor: theme.colors.lightgrey,
    color: theme.colors.darkgrey,
    "&:disabled": {},
    "&:hover": {
      color: "background",
    },
  },
}

theme.banner = {
  background: theme.colors.pink,
  color: theme.colors.text,
}

theme.leaf = {
  primary: {
    backgroundColor: theme.colors.lightgreen,
    color: theme.colors.white,
  },
  secondary: {
    backgroundColor: theme.colors.lilac,
    color: theme.colors.white,
  },
}