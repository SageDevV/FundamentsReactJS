import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return(
        <div>
            <DiretaFilho nome="Pedro" idade={23} nerd={true}/>
            <DiretaFilho nome="André" idade={23} nerd={false}/>
        </div>
    )
}