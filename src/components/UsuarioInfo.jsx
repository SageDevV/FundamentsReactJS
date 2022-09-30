import React from "react";
import If, { Else } from "../condicional/if";

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If teste={ usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
                <Else>
                    Seja bem vindo <strong>Desconhecido!</strong>
                </Else>
            </If>
        </div>
    )
}