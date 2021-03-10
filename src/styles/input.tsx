import { theme } from "../theme"

export const input = `
    input {
        border-radius: ${theme.radii[3]}px;
        border-style: solid;
        font-family: "Quicksand", sans-serif;
        font-size: ${theme.fontSizes[2]}px;
        gap: ${theme.space[3]}px;
        padding: ${theme.space[4]}px ${theme.space[7]}px;

        ${theme.mediaQueries.md} {
            font-size: ${theme.fontSizes[3]}px;
            padding: ${theme.space[4]}px ${theme.space[8]}px;
        }

        &:focus {
            background-color: none;
            box-shadow: none;
            outline: none;
            border: 1px solid ${theme.colors.black};
        }

        &::selection {
            background-color: none;
            box-shadow: none;
            outline: none;
        }

        &[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
      
`
