import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    :root {
        font-family : "NEXON Lv1 Gothic OTF"; 
    }
`