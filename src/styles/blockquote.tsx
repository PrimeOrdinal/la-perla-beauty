export const blockquote = `
    blockquote {
        margin-inline-end: unset;
        margin-inline-start: unset;

        &:before {
            content: "‟";
            display: inline-block;
        }

        &:after {
            content: "”";
            display: inline-block;
        }
    }
`