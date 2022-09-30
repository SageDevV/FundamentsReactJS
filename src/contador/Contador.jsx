import React, { Component } from "react";
import "../styles/Contador.css"
import Botoes from "./Botoes";
import Display from "./Display";
import PassoForm from "./PassoForm";

export default class Contador extends Component {

    constructor(props){
        super(props);

        this.state = {
            numero: this.props.numeroInicial || 0,
            passo: this.props.passoInicial || 0
        }
    }

    inc = _ => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = _ => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = novoPasso => {
        this.setState({
            passo:  this.state.passo = novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h3>Contador</h3>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes onIncrement={this.inc} onDecrement={this.dec}/>
            </div >
        )
    }

}
