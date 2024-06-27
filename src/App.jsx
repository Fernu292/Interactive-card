import React from "react";
import "./styles/App.css";
import Card from "./Components/Card";
import Card_Back from "./Components/Card_back";

import { useState } from "react";

const App = ()=>{

    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
    const [cardName, setCardName] = useState("Jane Appleseed");
    const [cardDateMonth, setCardDateMonth] = useState("00");
    const [cardDateYear, setCardDateYear] = useState("00");
    const [cardCvc, setCardCvc] = useState("000");

    return (
        <div className="App">
            <div className="Img"></div>
            <Card 
                cardNumber={cardNumber}
                cardName={cardName}
                cardDateMonth={cardDateMonth}
                cardDateYear={cardDateYear}
            />
            <Card_Back 
                cvc={cardCvc}
            />
            <div className="Formulario">

                <div className="Formulario_inputs">
                    <p>CARDHOLDER NAME</p>
                    <input 
                        type="text" 
                        placeholder="e.g. Jane Appleseed"
                        onInput={ e => setCardName(e.target.value)}
                    />
                    <p>CARD NUMBER</p>
                    <input 
                        type="text" 
                        placeholder="e.g. 1234 5678 9123 0000"
                        onInput={ e => setCardNumber(e.target.value)}

                    />
                    <div className="Formulario_sub">
                        <div >
                            <p>Exp. date (MM/YY)</p>
                            <div className="Formulario_date">
                                <input 
                                    type="text"
                                    placeholder="MM"
                                    onInput={ e => setCardDateMonth(e.target.value)}

                                />
                                <input 
                                    type="text" 
                                    placeholder="YY"
                                    onInput={ e => setCardDateYear(e.target.value)}

                                />
                            </div>

                        </div>
                        <div className="Formulario_cvc">
                            <p>CVC</p>
                            <input 
                                type="text"
                                placeholder="e.g. 123"
                                onInput={ e => setCardCvc(e.target.value)}

                            />
                        </div>
                    </div>
                    <button className="btn">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default App;