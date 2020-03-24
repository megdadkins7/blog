import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    html, body {
        width: 100%;
        height: 100vh;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        background: linear-gradient(135deg, rgba(58,58,58,1) 0%, rgba(10,10,10,1) 100%);
        background-attachment: fixed;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale; 
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
