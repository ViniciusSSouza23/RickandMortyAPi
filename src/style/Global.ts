import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
    :root{
        --background-body: #000000;
        --bg-header-footer:#232526;
        --title: #00FF31;
    }
    *{
        margin: 0;
        padding: 0;
        
        
    }
    body{
        font-family: 'Sedgwick Ave', cursive;
        background: var(--background-body);
        -webkit-font-smoothing: antialiased;
        color: white;
    }
    html{
        scroll-behavior: smooth;
        @media(max-width:1080px)
        {
            font-size: 93.75%;
        }
        @media(max-width:720px)
        {
            font-size: 82.5%;
        }
    }
    button{
        cursor: pointer;
    }
    h1,h2,h3,h3,h5,h6,strong{
        font-weight: 600;
    }
`;