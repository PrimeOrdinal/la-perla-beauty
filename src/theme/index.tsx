import baseTheme from "gatsby-plugin-theme-ui"
export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#111",
    background: "#fff",
    primary: "#ff0000",
    secondary: "#0000ff",
    gray: "#f6f6ff",
  },
  buttons: {
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 2px",
    },
    primary: {
      color: "background",
      // bg: 'primary',
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
  },
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
}
