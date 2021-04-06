import { mediaQueries, theme } from "../theme"

export const form = `
  form,
  .form-column,
  .form-fields,
  .form-row,
  .form-section {
      align-items: start;
      display: grid;
      gap: ${theme.space[4]}px;

      ${mediaQueries.md} {
        gap: ${theme.space[6]}px;
        column-gap: ${theme.space[10]}px;
      }
  }

  .form-fields,
  .form-row {
    ${mediaQueries.md} {
      grid-auto-flow: column;
    }
  }

  .error {
    color: ${theme.colors.red};
  }
`
