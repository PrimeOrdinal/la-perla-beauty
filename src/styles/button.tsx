import { themeGet } from "@styled-system/theme-get"

import { theme } from "../theme"

export const button = `
    button {
        appearance: unset;
        background: unset;
        border-radius: ${themeGet("radii.3")}px;
        border: unset;
        cursor: pointer;
        font-family: "Quicksand";
        font-size: ${theme.fontSizes.body}px;
        letter-spacing: 1px;
        padding: ${theme.space[4]}px ${theme.space[6]}px;
        text-align: center;
        text-transform: uppercase;
        
        &:disabled {
            cursor: not-allowed;
        }
        
        ${theme.mediaQueries.md} {
            padding: ${theme.space[3]}px ${theme.space[4]}px;
        }
    }
`
