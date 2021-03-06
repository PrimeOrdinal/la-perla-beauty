import { theme } from "../theme"
import { themeGet } from "@styled-system/theme-get"

export const input = `
    input {
        border-radius: ${theme.radii[3]}px;
        border-style: solid;
        font-family: "Quicksand";
        font-size: ${theme.fontSizes[2]}px;
        gap: ${theme.space[3]}px;
        padding: ${theme.space[4]}px ${theme.space[7]}px;

        ${theme.mediaQueries.md} {
            font-size: ${theme.fontSizes[3]}px;
            padding: ${theme.space[4]}px ${theme.space[8]}px;
        }

        &:focus {
            background: none;
            box-shadow: none;
            outline: none;
            border: 1px solid ${themeGet("colors.black")};
        }

        &::selection {
            background: none;
            box-shadow: none;
            outline: none;
        }
    }
      
`
