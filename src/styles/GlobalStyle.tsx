import { createGlobalStyle } from "styled-components"

import { body } from "./body"
import { boxSizing } from "./boxSizing"
import { buttons } from "./buttons"
import { fonts } from "./fonts"
import { form } from "./form"
import { formField } from "./formField"
import { formLabel } from "./formLabel"
import { headings } from "./headings"
import { html } from "./html"
import { input } from "./input"

export const GlobalStyle = createGlobalStyle`
    ${html}
    ${body}
    ${boxSizing}
    ${buttons}
    ${fonts}
    ${form}
    ${formField}
    ${formLabel}
    ${headings}
    ${input}
`
