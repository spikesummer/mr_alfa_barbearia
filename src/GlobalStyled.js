import { createGlobalStyle } from "styled-components";

// const coyoteBrown = "#7C6235";
// const sealBrown = "#6D2E0B";
const blackCoffee = "#3E332F";
// const goldFusion = "#888252";
// const camel = "#AC986B";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Nunito', sans-serif;
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: none; 
        border:none;
        text-decoration: none;
        text-transform: capitalize;
        transition: all .2s linear;

        ::selection{
            background:${blackCoffee};
            color:#fff;
        }
    }

    html{
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
        scroll-padding-top: 6rem;

        @media(max-width:1050px){
            font-size: 55%;
        }

        @media(max-width:450px){
            font-size: 50%;
        }
    }

    body{
        background:#f7f7f7;
    }

    section{
        padding:2rem 9%;
    }

`;