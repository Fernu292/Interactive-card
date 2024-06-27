import React from "react";

const Card_Back = ({cvc="000"})=> {
    return (
        <div className="Card_Back">
            <p className="Cvc">{cvc}</p>
        </div>
    )
}

export default Card_Back;