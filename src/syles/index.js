import { createGlobalStyle } from "styled-components";

import React from 'react'

const GlobalStyle = createGlobalStyle`
    :root {
        --bege: #f4d6cc;
        --red: #581f18;
        --green: #8eaf9d;
        --grey: #4a5859;
        --blue: #415a77;
    }

    body {
        background: var(--bege);
        -webkit-font-smoothing: antialiased;
        font-family: 'Marck Script', cursive, sans-serif;
        color: var(--red);
    }

    * {
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle
