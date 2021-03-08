import { theme } from "../theme"

export const img = `
    img {
      max-width: 100%;

      &:not(.img-bl){
        border-radius: ${theme.radii[4]}px;
      }
    }
`
