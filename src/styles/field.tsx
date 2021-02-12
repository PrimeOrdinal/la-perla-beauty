import { mediaQueries, theme } from "../theme"

export const field = `
    .field {
        column-gap: ${theme.space[4]}px;
        display: grid;
        grid-template-columns: 2fr 1fr;

        ${mediaQueries.md} {
            align-items: center;
            gap: ${theme.space[6]}px;
            grid-auto-flow: column;
            grid-template-columns: unset;
            justify-content: start;
        }
    }
`
