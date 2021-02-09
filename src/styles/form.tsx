import { mediaQueries, theme } from "../theme"

export const form = `
form {
    display: grid;
    gap: ${theme.space[4]}px;
    grid-auto-flow: column;

    ${mediaQueries.md} {
      align-items: center;
      gap: ${theme.space[6]}px;
      grid-auto-flow: column;
      grid-template-columns: unset;
      justify-content: end;
    }
}
`
