import { mediaQueries } from "../theme"

export const container = `
    .container,
    .container-compact {
        --app-gutter-x: 1rem;

        margin-inline-end: auto;
        margin-inline-start: auto;
        max-width: 36rem;
        padding-inline-end: var(--app-gutter-x, .75rem);
        padding-inline-start: var(--app-gutter-x, .75rem);
    }

    .container {
        ${mediaQueries.sm} {
            --app-gutter-x: 2rem;
            max-width: 56rem;
        }

        ${mediaQueries.md} {
            --app-gutter-x: 2rem;
            max-width: 68rem;
        }

        ${mediaQueries.lg} {
            --app-gutter-x: 3rem;
            max-width: 96rem;
        }

        ${mediaQueries.xl} {
            --app-gutter-x: 4rem;
            max-width: 120rem;
        }
    }

    .container-compact {
        ${mediaQueries.sm} {
            max-width: 48rem;
        }
    }
`
