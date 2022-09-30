import React from "react";

export default (props) => {
    const randomNumber = Math.floor(Math.random(props.min, props.max));
    return (
    <>
        <h3>{props.min}</h3>
        <h3>{props.max}</h3>
        <h3>{randomNumber}</h3>
    </>
    )

}