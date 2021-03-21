import { theme } from "../theme"

export const picker = `
    .picker {
        font-size: 0.75rem;
        pointer-events: auto;
    
        &::after {
          display: block;
        }
    
        &:not(.active) {
          &::after {
            content: "◯";
          }
        }
    
        &.active {
          &::after {
            content: "⬤";
          }
        }
    }
`

