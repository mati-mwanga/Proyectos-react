import './App.css';
import CodeNovaLogo from './imagenes/codenova.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const calcularResultado = () => {
    if (input){
      try {
        const resultado = evaluate(input);
        if (!isFinite(resultado)) {
          setInput('Math Error');
          return;
        }
        setInput(resultado.toString());
      } catch (error) {
        setInput('Error');
        console.error('Error en el cálculo:', error);
      } 
    } else {
      alert ("Por favor ingrese valores para realizar los cálculos.");
    }

  };

  const agregarInput = val => {
    // Si hay un mensaje de error, limpiarlo cuando el usuario comienza a ingresar
    if (input.startsWith('Error')) {
      setInput(val);
    } else {
      setInput(input + val);
    }
  };

  return (
    <div className="App">
      <div className='codenova-logo-contenedor'>
        <img
          src={CodeNovaLogo}
          className='codenova-logo'
          alt='logo de CodeNova' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarClic={() => setInput('')}>
          Clear
        </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
