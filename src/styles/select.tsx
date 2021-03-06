import { theme } from "../theme"

import ChevronIcon from "../../static/icons/Chevron.svg"

export const select = `
    select {
        appearance: none;
        background-image: url(${ChevronIcon});
        background-position: right ${theme.space[4]}px top 50%;
        background-repeat: no-repeat;
        border-radius: ${theme.radii[3]}px;
        border: 1px solid ${theme.colors.black};
        font-size: ${theme.fontSizes.heading4Desktop}px;
        padding: ${theme.space[4]}px ${theme.space[3]}px;
        width: 100%;

        &:focus {
            outline: none;
        }

        option {
            font-size: ${theme.fontSizes.heading4Desktop}px;
        }
    }
`
