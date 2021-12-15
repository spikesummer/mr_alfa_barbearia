import React, { useState } from "react";
import {GlobalStyle} from '../GlobalStyled';
import { Header } from "../component/header/Header";
import { Home } from "../component/home/Home";
import { Sobre } from "../component/sobre/Sobre";
import { Barbeiros } from "../component/barbeiros/Barbeiros";
import { Servicos } from "../component/servicos/Servicos";
import { Galeria } from "../component/galeria/Galeria";
import { Avaliacoes } from "../component/avaliacoes/Avaliacoes";
import { Contato } from "../component/contato/Contato";
import { Footer } from "../component/footer/Footer";
import { ScrollTop } from "../component/scrollTop/ScrollTop";
import { Loader } from "../component/loader/Loader";

export const App = () => {

    const [mudaActive, setMudaActive] = useState("");
    const [loadOut, setloadOut] = useState("");

    window.onload = () => fadeOut();
    window.onscroll = () => {
        window.scrollY > 60?setMudaActive("active"):setMudaActive("")
    }

    function fadeOut(){
        setInterval(()=>setloadOut("fade-out"), 3000);
    }

    return(
        <>
            <GlobalStyle/>
            <Header/>
            <Home/>
            <Sobre/> 
            <Barbeiros/>
            <Servicos/>
            <Galeria/>
            <Avaliacoes/>
            <Contato/>
            <Footer/>
            <ScrollTop active={mudaActive}/>
            <Loader fade={loadOut}/>
        </>
    )
}