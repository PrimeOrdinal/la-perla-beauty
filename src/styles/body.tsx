import { mediaQueries } from "../theme"
export const body = `
    body {
        font-family: "Quicksand", Helvetica, Arial, sans-serif;
        font-size: 13px;
        letter-spacing: 1px;
        line-height: 17px;
        margin: 0;

        ${mediaQueries.medium} {
            color: blue;
          }
    }
`