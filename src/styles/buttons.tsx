import { mediaQueries } from "../theme"

export const buttons = `
    button {
        appearance: unset;
        background: unset;
        border-radius: 12px;
        border: unset;
        cursor: pointer;
        font-family: 'Quicksand';
        letter-spacing: 1px;
        padding: 0.975rem 1.375rem;
        text-align: center;
        text-transform: uppercase;
        font-size: 0.8125rem;
        &:disabled {
            cursor: not-allowed;
        }
        ${mediaQueries.md}{
            padding: 0.85rem 1.9375rem;
            font-size: 0.875rem;
        }
    }
`
