import { theme } from "../theme"

export const border = `
    *,
    *:before,
    *:after {
        border-color: ${theme.border.color};
        border-width: ${theme.border.width};
    }
`
