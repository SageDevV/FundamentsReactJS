import React, { useState } from "react";
import "../styles/Input.css";

export default props => {

    const [valor, setValor] = useState("");

    return (
        <div className="Input">
            <h3>Valor: {valor}</h3>

            <input value={valor} onChange={e => {
                setValor(e.target.value)
            }} />

            <input value={valor} readOnly />

            <input value={undefined} />
        </div>
    )
}