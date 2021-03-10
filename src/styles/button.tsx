import { theme } from "../theme"

export const styles = `
    align-items: center;
    appearance: unset;
    background-color: unset;
    border-radius: ${theme.radii[3]}px;
    border: unset;
    cursor: pointer;
    display: flex;
    font-family: "Quicksand", sans-serif;
    font-size: var(--font-size-body, 13px);
    justify-content: center;
    justify-items: center;
    letter-spacing: 1px;
    padding: ${theme.space[4]}px ${theme.space[6]}px;
    text-align: center;
    text-transform: uppercase;

    &:disabled {
        cursor: not-allowed;
    }

    ${theme.mediaQueries.md} {
        padding: ${theme.space[5]}px ${theme.space[4]}px;
    }

    svg {
        margin-inline-start: ${theme.space[2]}px;
        object-fit: contain;
        width: ${theme.space[6]}px;

        ${theme.mediaQueries.md} {
            margin-inline-start: ${theme.space[3]}px;
        }
    }
`

export const button = `
    button,
    .button {
        ${styles}
    }
`
