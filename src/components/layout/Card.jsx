import React from "react";

import "../../styles/Card.css";



export default (props) => {
    
    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00"
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">Desafios</div>
            <div className="Content">{props.titulo}
                {props.children}
            </div>
        </div>
    )

}