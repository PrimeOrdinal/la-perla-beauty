import { mediaQueries, theme } from "../theme"

export const formLabel = `
    label {
        align-content: center;
        display: grid;
        gap: ${theme.space[5]}px;
        text-align: start;
        font-size: ${theme.fontSizes[0]}px;
        font-weight: bold;
        text-transform: uppercase;
        font-family: inherit;

        color: ${theme.colors.primary};
        ${mediaQueries.md}{
            font-size: ${theme.fontSizes[1]}px;
        }
    }
`
