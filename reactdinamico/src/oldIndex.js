import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';

const Counter = ({number}) => {
  return <h1>{number}</h1>
}


const App = (props) => {
  const [contador, setContador] = useState(0)

  const handleClick = () =>{
    setContador(contador + 1)
  }

  const handleReset = () =>{
    setContador(0)
  }

  return (
  <div>
    <p>El valor del contador es: </p>
    <Counter number={contador}></Counter>
    <button onClick={handleClick}>Incrementar el contador</button>
    <button onClick={handleReset}>Reseteo del contador</button>
  </div>
  );
  

}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
