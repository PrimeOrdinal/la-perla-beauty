import { DefaultTheme } from "styled-components"

type BreakpointsProp = Array<string> & {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

type FontSizesProp = Array<number> & {
  small?: number
  bodyDesktop?: number
  bodyMobile?: number
  heading1Desktop?: number
  heading2Desktop?: number
  heading3Desktop?: number
  heading4Desktop?: number
  heading1Mobile?: number
  heading2Mobile?: number
  heading3Mobile?: number
  heading4Mobile?: number
  smallDesktop?: number
  smallMobile?: number
}

export const breakpoints: BreakpointsProp = [
  "640px",
  "960px",
  "1280px",
  "1440px",
]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export const fontSizes: FontSizesProp = [11, 12, 13, 14, 16, 18, 24, 32]

fontSizes.small = fontSizes[0]
fontSizes.smallDesktop = fontSizes[1]
fontSizes.smallMobile = fontSizes[0]
fontSizes.bodyDesktop = fontSizes[3]
fontSizes.bodyMobile = fontSizes[2]
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
  smDown: `@media screen and (max-width: calc(${breakpoints[1]} - 1px))`,
  mdDown: `@media screen and (max-width: calc(${breakpoints[2]} - 1px))`,
  lgDown: `@media screen and (max-width: calc(${breakpoints[3]} - 1px))`,
}

export const theme: DefaultTheme = {
  breakpoints,
  colors: {
    black: "#363139",
    white: "#ffffff",
    lightgrey: "#efeee9",
    lilac: "#d3cbd6",
    pink: "#fde7d5",
    lightgreen: "#b2c594",
    beige: "#debf9b",
    orange: "#feebdd",
    red: "#b74539",
    darkgrey: "#858585",
    disabled: "#ccc",
    text: "#363139",
    background: "#ffffff",
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
      },
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
  radii: [0, 2, 5, 10, 20],
  space: [0, 2, 4, 8, 12, 14, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
}

theme.border = {
  color: theme.colors.lightgrey,
  width: "1px",
}

// theme.banners = {
//   primary: {
//     backgroundColor: theme.colors.pink,
//     color: theme.colors.darkgrey,
//   },
//   secondary: {
//     backgroundColor: theme.colors.lilac,
//     color: theme.colors.darkgrey,
//   },
// }

theme.buttons = {
  primary: {
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    "&:active": {
      color: theme.colors.lightgrey,
    },
    "&:disabled": {},
    "&:hover": {},
  },
  secondary: {
    backgroundColor: theme.colors.lightgrey,
    color: theme.colors.darkgrey,
    "&:active": {
      color: theme.colors.black,
    },
    "&:disabled": {},
    "&:hover": {},
  },
  tertiary: {
    backgroundColor: theme.colors.orange,
    color: theme.colors.darkgrey,
    "&:active": {
      color: theme.colors.black,
    },
    "&:disabled": {},
    "&:hover": {},
  },
  transparent: {
    color: theme.colors.text,
    "&:active": {
      color: theme.colors.black,
    },
    "&:disabled": {},
    "&:hover": {},
  },
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
