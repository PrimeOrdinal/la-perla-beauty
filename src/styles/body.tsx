import { mediaQueries, theme } from "../theme"

export const body = `
    body {
        --font-size-body: ${theme.fontSizes.bodyMobile}px;
        --font-size-small: ${theme.fontSizes.smallMobile}px;
        --header-min-height: 38px;

        color: ${theme.colors.text};
        font-size: var(--font-size-body, 13px);
        margin: 0;
    
        ${mediaQueries.sm} {
            --font-size-body: ${theme.fontSizes.bodyDesktop}px;
            --font-size-small: ${theme.fontSizes.smallDesktop}px;
        }
    
        ${mediaQueries.md} {
            --header-min-height: 112px;
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
