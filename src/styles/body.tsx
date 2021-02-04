import { mediaQueries, theme } from "../theme"

export const body = `
    body {
        --font-size-body: 13px;

        color: ${theme.colors.text};
        font-size: var(--font-size-body, 13px);
        margin: 0;
    
        ${mediaQueries.sm} {
            --font-size-body: 14px;
        }
    
        /*
        ${mediaQueries.md} {
            --font-size-body: 16px;
        }
    
        ${mediaQueries.lg} {
            --font-size-body: 18px;
        }
    
        ${mediaQueries.xl} {
            --font-size-body: 20px;
        }
        */
    }
`
