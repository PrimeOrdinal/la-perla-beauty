import { theme } from "../theme"

export const headings = `
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Tiempos", Times, serif;
    }

    .heading1 {
        font-size: ${theme.fontSizes.heading1Desktop}px;
        letter-spacing: 0.5px;
        line-height: 30px;
    }

    .heading2 {
        font-size: ${theme.fontSizes.heading2Desktop}px;
        letter-spacing: 0.7px;
        line-height: 15px;
    }

    .heading3 {
        font-size: ${theme.fontSizes.heading3Desktop}px;
        letter-spacing: 0.7px;
        line-height: 15px;
    }

    .heading4 {
        font-size: ${theme.fontSizes.heading4Desktop}px;
        letter-spacing: 0.7px;
        line-height: 15px;
    }
`
