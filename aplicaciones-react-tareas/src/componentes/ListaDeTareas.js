import React from "react";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import '../hojas-estilo/ListaDeTareas.css';

function ListaDeTareas() {
  // useState es un hook que permite agregar estado a un componente funcional
  const [tareas, setTareas] = React.useState([]);
  // useState([]) inicializa el estado tareas como un array vacío

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      // setTareas([...tareas, tarea]); // Otra forma de agregar la tarea
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
// El componente ListaDeTareas es un componente funcional que utiliza el hook useState para manejar el estado de las tareas.
// El estado inicial es un array vacío.
// La función agregarTarea agrega una nueva tarea al estado, asegurándose de que el texto no esté vacío.
// La función eliminarTarea elimina una tarea del estado filtrando el array de tareas.
// La función completarTarea marca una tarea como completada o no completada.
// El componente renderiza un formulario para agregar tareas y una lista de tareas utilizando el componente Tarea.
