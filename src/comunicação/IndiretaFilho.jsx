import React from "react";

export default props => {
    
    const cb = props.quandoClicar;
    let min = 50;
    let max = 100;
    const gerarIdade = () => parseInt(Math.random() * (min)) + max;
    const gerarNerd = () => Math.Random > 10;

    return (
        <div>
            <button onClick={
                _ => {
                    props.quandoClicar("João", gerarIdade, gerarNerd)
                }
            }
            >Fornecer informações</button>
        </div>
    )
}