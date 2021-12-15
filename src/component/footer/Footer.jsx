import React from "react";
import { BoxContainer, Box, Credits } from "./FooterStyle";

export const Footer = () => {

    return(
        <>

            <BoxContainer>

                <Box>
                    <h3>links</h3>
                    <a href="#home">home</a>
                    <a href="#sobre">Sobre nós</a>
                    <a href="#barbeiros">barbeiros</a>
                    <a href="#serviços">serviços</a>
                    <a href="#galeria">galeria</a>
                    <a href="#avaliacoes">avaliações</a>
                    <a href="#contato">contato</a>
                </Box>

                <Box>
                    <h3>redes sociais</h3>
                    <a href="https://www.facebook.com/profile.php?id=100028195435633" rel="noreferrer" target="_blank"><i className="fab fa-facebook"></i>facebook</a>
                    <a href="https://www.instagram.com/mr.alfaoficial/" rel="noreferrer" target="_blank"> <i className="fab fa-instagram"></i>instagram</a>
                </Box>

            </BoxContainer>

            <Credits> copyright @ 2021 <span> criado por Adriano S. Costa</span></Credits>

        </>
    )
}