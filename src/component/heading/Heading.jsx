import React from 'react';
import styled from 'styled-components';

const sealBrown = "#6D2E0B";
const blackCoffee = "#3E332F";

const Container = styled.h1`
    text-align: center;
    font-size: 3.5rem;
    padding:1rem;
    color: ${blackCoffee};

    span{
        color: ${sealBrown};
    }
`;

export const Heading = (props)=>{

    return(
        <Container>
            {props.textBefore}
            
            {props.span?<span>
                            {` ${props.span} `}
                        </span>:""
            }
            {props.textAfter}
        </Container>
    );
}