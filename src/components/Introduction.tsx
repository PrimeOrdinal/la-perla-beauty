import { themeGet } from "@styled-system/theme-get"
import styled from "styled-components"

export const Introduction = styled.div`
  margin-block-end: ${themeGet("space.10")}px;
  margin-block-start: ${themeGet("space.10")}px;
  max-width: 90ch;
`
