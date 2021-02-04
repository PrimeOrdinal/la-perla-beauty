import { theme } from "../theme"

export const input = `
    input {
        border-color: ${theme.border.color};
        border-radius: ${theme.space[2]}rem;
        border-style: solid;
        border-width: ${theme.border.width};
        font-family: "Quicksand";
        font-size: ${theme.fontSizes[0]}rem;
        gap: ${theme.space[3]}rem;
        padding: ${theme.space[4]}rem ${theme.space[7]}rem;

        ${theme.mediaQueries.md} {
            padding: ${theme.space[3]}rem ${theme.space[8]}rem;
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
