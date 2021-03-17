import CloseQuote from "../../static/icons/CloseQuote.svg"
import OpenQuote from "../../static/icons/OpenQuote.svg"

import { mediaQueries, theme } from "../theme"

export const blockquote = `
    --blockquote-symbol-height: 37px;
    --blockquote-symbol-width: 50px;

    ${mediaQueries.md} {
        --blockquote-symbol-height: 56px;
        --blockquote-symbol-width: 78px;
    }

    blockquote {
        --background-color: ${theme.colors.lightgrey};

        font-family: "Tiempos", serif;
        font-size: var(--font-size-heading-2, 16px);
        line-height: ${theme.space[7]}px;
        margin: unset;
        padding-block-end: var(--blockquote-symbol-height, 37px);
        padding-block-start: var(--blockquote-symbol-height, 37px);
        padding-inline-end: calc(var(--blockquote-symbol-width, 50px) * 1.5);
        padding-inline-start: calc(var(--blockquote-symbol-width, 50px) * 1.5);
        max-width: ${theme.space[12]}ch;
        position: relative;
        z-index: 1;
    
        ${mediaQueries.md} {
            font-size: var(--font-size-heading-1, 18px);
            line-height: ${theme.space[8]}px;
        }
    
        &::before,
        &::after {
            background-color: var(--background-color, ${theme.colors.lightgrey});
            background-repeat: no-repeat;
            background-size: contain;
            content: "";
            height: var(--blockquote-symbol-height, 37px);
            mask-repeat: no-repeat;
            mask-size: contain;
            position: absolute;
            transform: translateX(10%);
            width: var(--blockquote-symbol-width, 50px);
            z-index: -1;
        }

        &::before {
            left: 0;
            mask-image: url(${OpenQuote});
            mask-position: top;
            top: 15%;
        }

        &::after {
            bottom: 15%;
            mask-image: url(${CloseQuote});
            mask-position: bottom;
            right: 0;
        }
    }
`
