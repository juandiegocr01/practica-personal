import React from 'react';
import { useState } from "react";
import  ReactDOM  from "react-dom";
const App = () => {
    //const [left, setLeft] = useState(0);
    //const [right, setRight] = useState(0);

    const [counters, setCounters] = useState({
        right: 0,
        left: 0,
        mensaje: 'Probando el operador spread ...'
    });

    const [clicks, setClicks] = useState([])

    const handleClickLeft = () =>{
       const newCountersState = {
            ...counters,
            left: counters.left +1
        
    }

    setCounters(newCountersState);
    setClicks(prevClicks =>{
        return [...prevClicks, 'L']
    })
   }

    const handleClickRight = () =>{
        setCounters({
            ...counters,
            right: counters.right + 1
        })
        setClicks(prevClicks =>{
            return [...prevClicks, 'R']
        }) 
    }

    return (

        <div>
            {counters.left}
            <button onClick={handleClickLeft}>left</button>

            <button onClick={handleClickRight}>right</button>
            {counters.right}
            <p>Los clics que has dado son: {clicks.length}</p>
            <p>{counters.mensaje}</p>
        </div>

    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
