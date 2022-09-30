import "./styles/App.css"
import "./styles/Index.css"

import React from "react";

import Input from "./components/Input";
import Card from "./components/layout/Card";
import Aleatorio from "./components/Aleatorio";
import Familia from "./components/Familia";
import FamiliaMembro from "./components/FamiliaMembro";
import ListaAlunos from "./repetição/ListaAlunos";
import TabelaProdutos from "./repetição/TabelaProdutos";
import ParOuImpar from "./components/ParOuImpar";
import UsuarioInfo from "./components/UsuarioInfo";
import DiretaPai from "./comunicação/DiretaPai";
import IndiretaPai from "./comunicação/IndiretaPai";
import Contador from "./contador/Contador";
import Mega from "./components/Mega";


export default () => {
    return (
        <div className="App">

            <h1>Fundamentos React</h1>
            <div className="Cards">

                <Card titulo="#1 Aleatório" color="#080">
                    <Aleatorio min={1} max={30} />
                </Card>

                <Card titulo="#2 Familia" color="#335BFF">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro " />
                        <FamiliaMembro nome="André " />
                    </Familia>
                </Card>

                <Card titulo="#3 Repetição alunos" color="#FF33E6">
                    <ListaAlunos />
                </Card>

                <Card titulo="#4 repetição produtos" color="#00FF7F">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#5 Renderização condicional" color="#191970">
                    <ParOuImpar numero={20} />
                </Card>

                <Card titulo="#5.2 Renderização condicional 2" color="#808000">
                    <UsuarioInfo usuario={{ nome: "Pedro" }} />
                </Card>

                <Card titulo="#6 Comunicação direta" color="#FF0000">
                    <DiretaPai />
                </Card>

                <Card titulo="#7 Comunicação indireta" color="#FFD700">
                    <IndiretaPai />
                </Card>

                <Card titulo="#8 Componente controlado" color="#696969">
                    <Input/>
                </Card>

                <Card titulo="#9 Contador" color="#4682B4">
                    <Contador numeroInicial={100}/>
                </Card>

                <Card titulo="#9 Mega" color="#00CED1">
                    <Mega qtde={5}/>
                </Card>
            </div>
        </div>
    )
}