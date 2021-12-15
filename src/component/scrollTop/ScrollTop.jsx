import React from 'react';
import styled from 'styled-components';

const goldFusion = "#888252";
const blackCoffee = "#3E332F";

const ScrollLink = styled.a`
   
        position: fixed;
        top:-120%;
        right:2rem;
        padding:.5rem 1.5rem;
        font-size: 4rem;
        background: ${goldFusion};
        opacity: 0.7;
        color: ${blackCoffee};
        border-radius: .5rem;
        transition: 1s linear;
        z-index: 1000;
        animation:float 3s linear infinite;

        &.active{
            top:calc(100% - 12rem);
        }

        &:hover{
            opacity: 1;
        }

        @keyframes float{
            0%, 100%{
                transform: translateY(0rem);
            }
            50%{
                transform: translateY(2rem);
            }
        }
      
`;

export const ScrollTop = (props) => {
 
    return(
        <ScrollLink href="#" className={`${props.active} fas fa-angle-up`} />
    )
}