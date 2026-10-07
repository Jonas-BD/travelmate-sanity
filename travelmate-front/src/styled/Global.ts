import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
    }

    img {
        display: block;
        width: 100%;
    }
`