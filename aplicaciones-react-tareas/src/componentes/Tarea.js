import React from "react";
import '../hojas-estilo/Tareas.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'; 
// El icono de cerrar

// El componente Tarea es un componente funcional que representa una tarea individual en la lista de tareas.
function Tarea({ id, texto, completada,completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className="tarea-texto"
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div 
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;