import React, { useState } from "react"
import "../styles/Mega.css"

export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min)) + min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }
    
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce(nums => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

    const [qtde, setqtde] = useState(props.qtde || 6)
    const [number, setNumber] = useState(gerarNumeros(qtde));


    return (
        <div className="Mega">
            <h3>Número gerado: {number.join(" ")} </h3>
            <div>
                <label htmlFor="Qtde de Números"></label>
                <input type="number" 
                value={qtde} 
                onChange={ e => setqtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumber(gerarNumeros(qtde)) }>Gerar</button>
        </div>
    )
}