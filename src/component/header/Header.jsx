import React, { useState } from 'react';
import { Container, Logo, MenuBar, NavBar } from './HeaderStyle';

export const Header = (props) =>{
    const [activeMenu, setActiveMenu] = useState("fa-bars");
    const [activeNavBar, setActiveNavBar] = useState("");

    const menu = [
        {
            href: "#home",
            value: "home"
        },
        {
            href: "#sobre",
            value: "Sobre nós"
        },
        {
            href: "#barbeiros",
            value: "Barbeiros"
        },
        {
            href: "#servicos",
            value: "Serviços"
        },
        {
            href: "#galeria",
            value: "Galeria"
        },
        {
            href: "#avaliacoes",
            value: "Avaliações"
        },
        {
            href: "#contato",
            value: "Contato"
        }
    ]

    window.onscroll = () =>{if(activeMenu !== "fa-bars") troca()}

    function troca( ){
        activeMenu === "fa-bars"?setActiveMenu("fa-times"):setActiveMenu("fa-bars");
        activeMenu === "fa-bars"?setActiveNavBar("active"):setActiveNavBar("");
    }
    
    return(
        <Container>
            
            <Logo ><i className="fab fa-wolf-pack-battalion"></i>Mr Alfa</Logo>

            <MenuBar onClick={troca}><i className={`fas ${activeMenu}`}></i></MenuBar>

            <NavBar className={activeNavBar}>
                {menu.map((item, index) =>(
                    <a key={index} href={item.href}>{item.value}</a>
                ))}
            </NavBar>
        </Container>
    )
}