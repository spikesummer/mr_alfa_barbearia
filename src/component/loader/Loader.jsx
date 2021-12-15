import React from "react";
import styled from "styled-components";

const sealBrown = "#6D2E0B";

const Container = styled.div`
    position: fixed;
    top:0; left:0;
    z-index: 10000;
    background:#fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100%;
    width:100%;

    &.fade-out{
       top:-120%;
    }

    i{
        font-size: 25rem;
        color: ${sealBrown};
    }
    span{
        font-size: 10rem;
        margin-top: 1rem;
        color: ${sealBrown};
    }
`;

export const Loader = (props) => {

    return(
        <Container className={props.fade}>
            <i className="fab fa-wolf-pack-battalion"></i>
            <span>Mr Alfa</span>
        </Container>
    )
}