import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    :root {
        --background: #FAFAFA;
        --color-background: #212529;
        --background-header: rgba(255, 255, 255, 0.96);
        --color-box-shadow-header: rgba(0, 0, 0, 0.25);
        --red: #c53030;
        --background-input: #E9ECEF;
        --gray: #868E96;
        --button-todos: #FFF8F4;
        --button-panificadora: #FFF7F4;
        --button-frutas: #FFF1F4;
        --button-bebidas: #F3EEF5;
        --button-principal: #FF2253;
        --button-principal-hover: #c43756;
        --background-cart: #F8F9FA;
        --white: #FFF;
        --border-input: #DEE2E6;
        --background-modal: rgba(0, 0, 0, 0.5);
    }

    body {
        background: var(--white);
        color: var(--color-background);
    }

    input, button {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`
