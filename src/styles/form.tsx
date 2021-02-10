import { mediaQueries, theme } from "../theme"

export const form = `
form {
    display: grid;
    gap: ${theme.space[4]}px;
    grid-template-columns: 2fr 1fr;

    ${mediaQueries.md} {
      align-items: center;
      gap: ${theme.space[6]}px;
      grid-auto-flow: column;
      grid-template-columns: unset;
      justify-content: end;
      
    }
    &:focus-within button {
      background: ${theme.colors.black};
      color: ${theme.colors.white};
    }
    &:focus-within input {
      border: 1px solid ${theme.colors.black};
    }
    &:focus-within div {
      display: block;
      grid-column: span 2;
      ${mediaQueries.md}{
        display: none;
      }
      p {
        text-align: left;
        font-size: ${theme.fontSizes.small}px;
        font-weight: 300;
        text-transform: unset;
      }
    }
    div {
      display: none;
    }
}
`
