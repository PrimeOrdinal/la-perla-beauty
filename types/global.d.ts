import type { SxStyleProp } from "theme-ui"

declare global {
  namespace react {
    export interface ReactDOMAttributes {
      sx: SxStyleProp
    }
  }
}