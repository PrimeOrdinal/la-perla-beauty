import { createGlobalStyle } from "styled-components"

import { accessibility } from "./accessibility"
import { anchor } from "./anchor"
import { aspectRatio } from "./aspectRatio"
import { body } from "./body"
import { blockquote } from "./blockquote"
import { border } from "./border"
import { boxSizing } from "./boxSizing"
import { button } from "./button"
import { container } from "./container"
import { dl } from "./dl"
import { field } from "./field"
import { fonts } from "./fonts"
import { form } from "./form"
import { formCheckboxContainer } from "./formCheckboxContainer"
import { formField } from "./formField"
import { formRadioContainer } from "./formRadioContainer"
import { gradients } from "./gradients"
import { headings } from "./headings"
import { hr } from "./hr"
import { html } from "./html"
import { img } from "./img"
import { input } from "./input"
import { label } from "./label"
import { picker } from "./picker"
import { select } from "./select"
import { svg } from "./svg"
import { table } from "./table"

export const GlobalStyle = createGlobalStyle`
    ${accessibility}
    ${anchor}
    ${aspectRatio}
    ${blockquote}
    ${body}
    ${border}
    ${boxSizing}
    ${button}
    ${container}
    ${dl}
    ${field}
    ${fonts}
    ${form}
    ${formCheckboxContainer}
    ${formField}
    ${formRadioContainer}
    ${gradients}
    ${headings}
    ${hr}
    ${html}
    ${img}
    ${input}
    ${label}
    ${picker}
    ${select}
    ${svg}
    ${table}
`
