import { mediaQueries, theme } from "../theme"

export const body = `
    body {
        --font-size-body: ${theme.fontSizes.bodyMobile}px;
        --font-size-heading-1: ${theme.fontSizes.heading1Mobile}px;
        --font-size-heading-2: ${theme.fontSizes.heading2Mobile}px;
        --font-size-heading-3: ${theme.fontSizes.heading3Mobile}px;
        --font-size-heading-4: ${theme.fontSizes.heading4Mobile}px;
        --font-size-small: ${theme.fontSizes.smallMobile}px;

        --font-size-lg: ${theme.fontSizes[5]}px;
        --font-size-xl: ${theme.fontSizes[6]}px;

        --header-min-height: 38px;

        color: ${theme.colors.text};
        font-size: var(--font-size-body, 13px);
        margin: 0;
    
        ${mediaQueries.sm} {
            --font-size-body: ${theme.fontSizes.bodyDesktop}px;
            --font-size-heading-1: ${theme.fontSizes.heading1Desktop}px;
            --font-size-heading-2: ${theme.fontSizes.heading2Desktop}px;
            --font-size-heading-3: ${theme.fontSizes.heading3Desktop}px;
            --font-size-heading-4: ${theme.fontSizes.heading4Desktop}px;
            --font-size-small: ${theme.fontSizes.smallDesktop}px;

            --font-size-lg: ${theme.fontSizes[6]}px;
            --font-size-xl: ${theme.fontSizes[7]}px;
        }

        ${mediaQueries.md} {
         
            --header-min-height: 112px;
        }
    }
`
