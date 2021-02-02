import { DefaultTheme } from "styled-components"

type BreakpointsProp = Array<string> & {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

export const breakpoints: BreakpointsProp = ["40em", "52em", "64em", "80em"]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
}

export const theme: DefaultTheme = {
  borderRadius: "5px",
  buttons: {
    primary: {
      color: "whitesmoke",
      backgroundColor: "#363139",
      "&:disabled": {},
      "&:hover": {
        color: "background",
      },
    },
    secondary: {
      color: "#363139",
      backgroundColor: "#FEEBDD",
      "&:disabled": {},
      "&:hover": {
        color: "background",
      },
    },
    tertiary: {
      color: "text",
      backgroundColor: "#EFEEE9",
      "&:disabled": {},
      "&:hover": {
        color: "background",
      },
    },
  },
  colors: {
    banner: {
      background: "#D3CBD6",
      text: "#363139",
    },
    disabled: "#ccc",
    text: "#000",
    background: "#f5f5f5",
    primary: "#363139",
    secondary: "#FEEBDD",
    tertiary: "#EFEEE9",
    quarternary: "#D3CBD6",
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
        primary: "#0cf",
        secondary: "#90c",
        tertiary: "#c09",
      },
    },
  },
  fonts: {
    body: '"Quicksand", Helvetica, Arial, sans-serif',
    heading: "inherit",
  },
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  space: [0, 4, 8, 16, 32, 64],
  breakpoints,
  // mediaQueries: {
  //   small: `@media screen and (min-width: ${breakpoints[0]})`,
  //   medium: `@media screen and (min-width: ${breakpoints[1]})`,
  //   large: `@media screen and (min-width: ${breakpoints[2]})`,
  // },
}
