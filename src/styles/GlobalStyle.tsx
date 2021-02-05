import { createGlobalStyle } from "styled-components"

import { body } from "./body"
import { border } from "./border"
import { boxSizing } from "./boxSizing"
import { button } from "./button"
import { container } from "./container"
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
    ${border}
    ${boxSizing}
    ${button}
    ${container}
    ${fonts}
    ${form}
    ${formField}
    ${formLabel}
    ${headings}
    ${input}
`
