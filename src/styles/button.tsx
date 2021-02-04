import { theme } from "../theme"

export const button = `
    button {
        appearance: unset;
        background: unset;
        border-radius: 12px;
        border: unset;
        cursor: pointer;
        font-family: "Quicksand";
        font-size: ${theme.fontSizes.body}rem;
        letter-spacing: 1px;
        padding: ${theme.space[4]}rem ${theme.space[6]}rem;
        text-align: center;
        text-transform: uppercase;
        
        &:disabled {
            cursor: not-allowed;
        }
        
        ${theme.mediaQueries.md} {
            padding: ${theme.space[3]}rem ${theme.space[4]}rem;
        }
    }
`
