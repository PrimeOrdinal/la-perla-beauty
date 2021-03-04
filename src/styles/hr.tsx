import { theme } from "../theme"

export const hr = `
    hr {
        border-style: none;
        border-block-end-style: solid;
        margin-block-end: ${theme.space[10]}px;
        margin-block-start: ${theme.space[10]}px;

        &.black {
            border-color: ${theme.colors.black};
        }
    }  
`