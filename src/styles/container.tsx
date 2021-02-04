import { mediaQueries } from "../theme"

export const container = `
    .container {
        margin-inline-end: auto;
        margin-inline-start: auto;
        max-width: 21rem;
        ${mediaQueries.sm}{
            max-width: 52rem;
        }
        ${mediaQueries.md} {
            max-width: 64rem;
        }

        ${mediaQueries.lg} {
            max-width: 80rem;
        }
    }
`
