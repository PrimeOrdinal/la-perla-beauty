import { theme } from "../theme"

export const input = `
    input {
        border-color: ${theme.border.color};
        border-radius: ${theme.radii[2]}px;
        border-style: solid;
        border-width: ${theme.border.width};
        font-family: "Quicksand";
        font-size: ${theme.fontSizes[0]}px;
        gap: ${theme.space[3]}px;
        padding: ${theme.space[4]}px ${theme.space[7]}px;

        ${theme.mediaQueries.md} {
            padding: ${theme.space[3]}px ${theme.space[8]}px;
            min-width: 14rem;
            font-size: ${theme.fontSizes[2]}px;

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
