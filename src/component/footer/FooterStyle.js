import styled from "styled-components";

const sealBrown = "#6D2E0B";
const blackCoffee = "#3E332F";
const camel = "#AC986B";

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 50rem));
    justify-content: center;
    text-align: center;
    gap:1.5rem;
    background: ${camel};
`;

export const Box = styled.div`
    h3{
        padding:.5rem 0;
        font-size: 2.5rem;
        color: ${blackCoffee};
    }

    a{
        display: flex;
        padding:.5rem 0;
        font-size: 1.5rem;
        color: ${blackCoffee};
        justify-content: center;
        align-items: center;
        
        i{
            font-size: 3rem;
            margin-right: 0.5rem;
        }

        :hover{
            color: ${sealBrown};
            font-weight: bolder;
            /* text-decoration: underline; */
        }
    }
`;

export const Credits = styled.div`
    text-align: center;
    /* border-top: .1rem solid rgba(0,0,0,.1); */
    font-size: 2rem;
    color: ${blackCoffee};
    padding:.5rem;
    padding-top: 1.5rem;
    /* margin-top: 1.5rem; */
    background: ${camel};

    span{
        color: ${sealBrown};
    }
`;