import { theme } from "../theme"

export const button = `
    button {
        align-items: center;
        appearance: unset;
        background: unset;
        border-radius: ${theme.radii[3]}px;
        border: unset;
        cursor: pointer;
        display: flex;
        font-family: "Quicksand";
        font-size: var(--font-size-body, 13px);
        gap: ${theme.space[2]}px;
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
            gap: ${theme.space[3]}px;
            padding: ${theme.space[3]}px ${theme.space[4]}px;
        }

        svg {
            width: ${theme.space[7]}px;
            object-fit: contain;
        }

        svg,
        svg * {
            fill: ${theme.colors.lightgrey};
        }
    }
`
