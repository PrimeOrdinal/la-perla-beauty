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
    font-family: "Tiempos";
    font-style: normal;
    font-weight: normal;
    src: url("../fonts/tiempos-text-web-regular.woff2") format("woff2"),
        url("../fonts/tiempos-text-web-regular.woff") format("woff");
    }

    .tiempos {
    font-family: "Tiempos";
    font-weight: 300;
    }
    .quicksand {
    font-family: "Quicksand";
    }

    body {
        color: ${props => (props.theme === "purple" ? "purple" : "white")};
        margin: 0;
    }
`
