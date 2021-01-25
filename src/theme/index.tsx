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

export const theme: DefaultTheme = {
  borderRadius: "5px",
  // buttons: {
  //   danger: {
  //     color: "white",
  //     backgroundColor: "red",
  //   },
  //   outline: {
  //     color: "primary",
  //     bg: "transparent",
  //     boxShadow: "inset 0 0 0 2px",
  //   },
  //   primary: {
  //     color: "background",
  //     bg: "primary",
  //     "&:hover": {
  //       bg: "text",
  //     },
  //   },
  //   secondary: {
  //     color: "background",
  //     bg: "secondary",
  //   },
  //   tertiary: {
  //     color: "background",
  //     bg: "tertiary",
  //   },
  // },
  buttons: {
    primary: {
      color: "whitesmoke",
      backgroundColor: "primary",
      // "&:disabled": {
      //   backgroundColor: "tertiary",
      //   cursor: "not-allowed",
      // },
      "&:hover": {
        // color: "text",
      },
    },
    secondary: {
      color: "#363139",
      backgroundColor: "secondary",
      "&:hover": {
        color: "background",
      },
    },
    tertiary: {
      color: "text",
      backgroundColor: "tertiary",
      "&:hover": {
        color: "background",
      },
    },
  },
  colors: {
    banner: "#000",
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
