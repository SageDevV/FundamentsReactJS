import React from "react";
import produtos from "../data/produtos";
import "../styles/Tabela.css";

export default _ => {

    const produtosArray = produtos.map((produto, i) => {
        return (
            <tr key={produto.id}
                className={i % 2 === 0 ? 'Par' : ''}>
                <td>{produto.id}</td>
                <td>{produto.nomeProduto}</td>
                <td>{produto.setorProduto}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome do produto</th>
                        <th>Setor do produto</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosArray}
                </tbody>
            </table>
        </div>
    )
}