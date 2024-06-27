import React from "react";
import Cardlogo from "../images/card-logo.svg";

const Card = ({
    cardNumber="",
    cardName="",
    cardDateYear="",
    cardDateMonth=""
})=>{

    return (
        <div className="Card">
            <img src={Cardlogo} className="Card_Logo"/>
            <div className="Card_info">
                <p className="Card_number">{cardNumber}</p>
                <div className="Card_data">
                    <p>{cardName}</p>
                    <p>{cardDateMonth}/{cardDateYear}</p>
                </div>
            </div>

        </div>
    )
};

export default Card;