export const fonts = `
    @font-face {
        font-family: "Tiempos", serif;
        font-style: normal;
        font-weight: lighter;
        src: url("../fonts/tiempos-fine-web-light.woff2") format("woff2"),
            url("../fonts/tiempos-fine-web-light.woff") format("woff");
    }

    small,
    .small {
        font-size: var(--font-size-sm, 12px);
        letter-spacing: 0.7px;
    }

    .tiempos {
        font-family: "Tiempos", serif;
        font-weight: lighter;
    }

    .quicksand {
        font-family: "Quicksand", sans-serif;
    }
`
