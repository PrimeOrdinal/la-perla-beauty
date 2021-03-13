import CloseQuote from "../../static/icons/CloseQuote.svg"
import OpenQuote from "../../static/icons/OpenQuote.svg"

import { mediaQueries, theme } from "../theme"

export const blockquote = `
    blockquote {
        margin-inline: unset;

        &:after {
            content: "”";
            display: inline-block;
        }

        &:before {
            content: "‟";
            display: inline-block;
        }
    }

    blockquote {
        font-family: "Tiempos", serif;
        font-size: var(--font-size-heading-2, 16px);
        line-height: ${theme.space[7]}px;
        margin: 0;
        max-width: ${theme.space[12]}ch;
        padding-block: ${theme.space[6]}px;
        position: relative;
        z-index: 1;
    
        ${mediaQueries.md} {
            font-size: var(--font-size-heading-1, 18px);
            line-height: ${theme.space[8]}px;
        }
    
        &::before,
        &::after {
            background-color: ${theme.colors.lightgrey};
            background-repeat: no-repeat;
            background-size: contain;
            content: "";
            height: 37px;
            mask-size: contain;
            position: absolute;
            width: 51px;
            z-index: -1;

            ${mediaQueries.md} {
                height: 56px;
                transform: translateX(10%) translateZ(10px);
                width: 78px;
            }
        }

        &::before {
            left: 0;
            mask: url(${OpenQuote}) no-repeat top;
            top: 0;
    
            ${mediaQueries.md} {
                left: -10%;
            }
        }

        &::after {
            bottom: 0;
            mask: url(${CloseQuote}) no-repeat bottom;
            right: 0;
    
            ${mediaQueries.md} {
                right: -10%;
            }
        }
    }
`
