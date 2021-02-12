import { mediaQueries, theme } from "../theme"

export const label = `
    label {
        align-content: center;
        color: ${theme.colors.black};
        display: grid;
        font-family: inherit;
        font-size: ${theme.fontSizes[0]}px;
        font-weight: bold;
        gap: ${theme.space[5]}px;
        text-align: start;
        text-transform: uppercase;

        ${mediaQueries.md}{
            font-size: ${theme.fontSizes[3]}px;
        }
    }
`
