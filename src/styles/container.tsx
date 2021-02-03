import { mediaQueries } from "../theme"

export const container = `
    .container {
        margin-inline-end: auto;
        margin-inline-start: auto;

        ${mediaQueries.md} {
            max-width: 64rem;
        }

        ${mediaQueries.lg} {
            max-width: 80rem;
        }
    }
`
