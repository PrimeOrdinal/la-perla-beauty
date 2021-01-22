import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Tiempos";
        font-style: normal;
        font-weight: 300;
        src: url("../fonts/tiempos-fine-web-light.woff2") format("woff2"),
            url("../fonts/tiempos-fine-web-light.woff") format("woff");
    }

    @font-face {
        font-family: "Tiempos", sans-serif;
        font-style: normal;
        font-weight: normal;
        src: url("../fonts/tiempos-text-web-regular.woff2") format("woff2"),
            url("../fonts/tiempos-text-web-regular.woff") format("woff");
    }

    body {
        font-family: "Quicksand", Helvetica, Arial, sans-serif;
        font-size: 13px;
        letter-spacing: 1px;
        line-height: 17px;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Tiempos", Times, serif;
    }

    .tiempos {
        font-family: "Tiempos";
        font-weight: 300;
    }

    .quicksand {
        font-family: "Quicksand";
    }
`
