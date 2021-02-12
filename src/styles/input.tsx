import { theme } from "../theme"

export const input = `
    input {
        border-radius: ${theme.radii[3]}px;
        border-style: solid;
        font-family: "Quicksand";
        font-size: ${theme.fontSizes[0]}px;
        gap: ${theme.space[3]}px;
        padding: ${theme.space[4]}px ${theme.space[7]}px;

        ${theme.mediaQueries.md} {
            font-size: ${theme.fontSizes[2]}px;
            padding: ${theme.space[3]}px ${theme.space[8]}px;
        }

        &:focus {
            background: none;
            box-shadow: none;
            outline: none;
        }

        &::selection {
            background: none;
            box-shadow: none;
            outline: none;
        }
    }   
`
