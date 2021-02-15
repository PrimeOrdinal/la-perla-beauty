import { createGlobalStyle } from "styled-components"

import { body } from "./body"
import { border } from "./border"
import { boxSizing } from "./boxSizing"
import { button } from "./button"
import { container } from "./container"
import { field } from "./field"
import { fonts } from "./fonts"
import { form } from "./form"
import { formCheckboxContainer } from "./formCheckboxContainer"
import { formField } from "./formField"
import { formRadioContainer } from "./formRadioContainer"
import { headings } from "./headings"
import { html } from "./html"
import { input } from "./input"
import { label } from "./label"
import { select } from "./select"
import { svg } from "./svg"

export const GlobalStyle = createGlobalStyle`
    ${html}
    ${body}
    ${border}
    ${boxSizing}
    ${button}
    ${container}
    ${field}
    ${fonts}
    ${form}
    ${formField}
    ${label}
    ${headings}
    ${input}
    ${select}
    ${svg}
    ${formRadioContainer}
    ${formCheckboxContainer}
`
