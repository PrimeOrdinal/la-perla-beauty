import { mediaQueries, theme } from "../theme"

export const input = `
    input {
        border-radius: ${theme.space[2] / 16}rem;
        border: 1px solid ${theme.colors.tertiary};
        font-family: "Quicksand";
        font-size: ${theme.fontSizes[0]}rem;
        gap: ${theme.space[3]}px;
        padding: 0.875rem 1.375rem;

        ${mediaQueries.md} {
            padding: 0.75rem 1.9375rem;
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
