import React from "react";

export const Avaliacoes = () => {

    return(
        <section id="avaliacoes">
            <form action="">

                <div className="inputBox">
                    <div className="input">
                        <span>Nome</span>
                        <input type="text" placeholder="Digite seu nome"/>
                    </div>
                </div>
                
                <div className="inputBox">
                    <div className="input">
                        <span>Comentário</span>
                        <textarea name="" placeholder="Digite seu comentário" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>

                <input type="submit" value="enviar" className="btn"/>

            </form>
        </section>
    )
}