export const fonts = `
    @font-face {
        font-family: "Tiempos";
        font-style: normal;
        font-weight: 300;
        src: url("../fonts/tiempos-fine-web-light.woff2") format("woff2"),
            url("../fonts/tiempos-fine-web-light.woff") format("woff");
    }

    small,
    .small {
        font-size: var(--font-size-small, 12px);
        letter-spacing: 0.7px;
        line-height: 15px;
    }

    .tiempos {
        font-family: "Tiempos";
        font-weight: 300;
    }

    .quicksand {
        font-family: "Quicksand";
    }
`
