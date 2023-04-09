import React from 'react';
import { useState } from "react";
import  ReactDOM  from "react-dom";
const App = () => {
    //const [left, setLeft] = useState(0);
    //const [right, setRight] = useState(0);

    const [counters, setCounters] = useState({
        right: 0,
        left: 0,
        clicks: 0,
        mensaje: 'Probando el operador sped ...'
    });

    const handleClickLeft = () =>{
        setCounters({
            ...counters,
            left: counters.left +1,
            clicks: counters.clicks + 1
        })
    }

    const handleClickRight = () =>{
        setCounters({
            ...counters,
            right: counters.right + 1,
            clicks: counters.clicks + 1
        }) 
    }

    return (

        <div>
            {counters.left}
            <button onClick={handleClickLeft}>left</button>

            <button onClick={handleClickRight}>right</button>
            {counters.right}
            <p>Los clics que has dado son: {counters.clicks}</p>
            <p>{counters.mensaje}</p>
        </div>

    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
