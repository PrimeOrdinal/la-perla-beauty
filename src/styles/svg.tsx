export const svg = `
    svg:global(.feather) {
        &[fill],
        *[fill] {
            fill-opacity: initial;
        }

        &[fill='none'],
        *[fill='none'] {
            fill-opacity: 0;
        }
    }
`