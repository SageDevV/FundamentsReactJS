import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho"

export default props => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false)

    const quandoClicar = (nomeParam, idadeParam, nerdParam) => {
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);
    }

    return (
        <div>
            <span>{nome}</span>
            <span>{idade}</span>
            <span>{nerd ? "Filho" : "Não tem filho"}</span>
            <IndiretaFilho quandoClicar={quandoClicar} />
        </div>
    )
}