import React from "react";
import { Heading } from '../heading/Heading';

export const Contato = () => {

    return(
        <section id="contato">
            <Heading textBefore="Contato"/>
            <div style={{display: "flex", width: "100%", border: "1px solid #666", position: "relative", justifyContent: "center", padding: "1rem", borderRadius: "0.5rem"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.5374120217202!2d-46.229565385014304!3d-23.97679268447834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1ffc6fc00f15f%3A0xf96f0a07fdbb5e66!2sBarbearia%20Mr.Alfa!5e0!3m2!1spt-BR!2sbr!4v1639602127658!5m2!1spt-BR!2sbr" width="600" height="450" style={{border: 0}} allowfullscreen loading="lazy"></iframe>
                <div style={{background: "#7C6235", width: "50rem", borderRadius: "0 0.5rem 0.5rem 0"}}>
                    <h1>endereço</h1>
                </div>
            </div>
        </section>
    )
}