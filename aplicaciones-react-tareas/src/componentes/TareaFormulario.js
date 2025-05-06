import React from "react";
import '../hojas-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';
// uuid es una librería que permite generar identificadores únicos

function TareaFormulario(props) {
  const [input, setInput] = React.useState('');
  // useState es un hook que permite agregar estado a un componente funcional

  const manejarCambio = e => {
    setInput(e.target.value);
    // e.target.value es el valor del input
  };

  const manejarEnvio = e => {
    e.preventDefault();
    // e.preventDefault() evita que se recargue la página al enviar el formulario
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
    setInput('');
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input 
        type="text" 
        className="tarea-input" 
        placeholder="Escribe una tarea"
        value={input}
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;
// El componente TareaFormulario es un componente funcional que representa un formulario para agregar nuevas tareas.