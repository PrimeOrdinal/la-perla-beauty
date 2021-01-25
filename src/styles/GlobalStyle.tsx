import { createGlobalStyle } from "styled-components"

import { body } from "./body"
import { boxSizing } from "./boxSizing"
import { button } from "./button"
import { fonts } from "./fonts"
import { headings } from "./headings"

export const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${boxSizing}
    ${body}
    ${headings}
    ${button}
`
