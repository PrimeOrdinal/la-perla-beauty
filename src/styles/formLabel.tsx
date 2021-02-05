import { mediaQueries, theme } from "../theme"

export const formLabel = `
    .form-label {
        align-content: center;
        display: grid;
        text-align: start;
        font-size: ${theme.fontSizes[0]};
        font-family: inherit;
        color: ${theme.colors.primary};
        ${mediaQueries.md}{
            font-size: ${theme.fontSizes[1]};
        }
    }
`
