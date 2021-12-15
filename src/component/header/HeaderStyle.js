import styled from 'styled-components'

const sealBrown = "#6D2E0B"; /* rgba(123, 42, 29, 0.2) */
const blackCoffee = "#3E332F";

export const Container = styled.div`
    position: fixed;
    top:0; left: 0; right:0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(124, 98, 53, 0.8);
    padding:2rem 9%;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);

    @media(max-width:991px){
        padding:2rem;
    }

`;

export const Logo = styled.a`
    font-size: 2.8rem;
    font-weight: bolder;
    color: ${blackCoffee};

    i{
        padding-right: .5rem;
        color: ${sealBrown};
        font-size: 4rem;
    }
`;

export const MenuBar = styled.div`
    font-size: 3rem;
    cursor: pointer;
    color:${blackCoffee};
    border:.1rem solid ${blackCoffee};
    border-radius: .3rem;
    padding:.5rem 1.5rem;
    display: none;

    @media(max-width:800px){
        display: initial;
    }
`;

export const NavBar = styled.nav`
    
    a{
        font-size: 2rem;
        margin-left: 2rem;
        color:${blackCoffee};
        font-weight: bolder;
    }

    a:hover{
        color:${sealBrown};
    }

    @media(max-width:800px){
        position: absolute;
        top:100%; left: 0; right:0;
        background: rgba(255, 255, 255, 0.4);
        border-top: .1rem solid rgba(0,0,0,.1);
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

        &.active{
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        a{
            margin: 1.5rem;
            padding:1.5rem;
            display: block;
            border:.2rem solid rgba(0,0,0,.1);
            border-left:.5rem solid ${sealBrown};
            background:#fff;
        }
    }
`;