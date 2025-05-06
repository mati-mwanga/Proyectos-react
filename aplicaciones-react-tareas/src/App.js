import ListaDeTareas from './componentes/ListaDeTareas.js';
import CodeNovaLogo from './logo/codenova.png';
import './App.css';

function App() {
  return (
    <div className='aplicacion-tareas'>
        <div className='logo-contenedor'>
          <img
          src={CodeNovaLogo}
          className='codenova-logo' />
        </div>
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
    </div>
  );
}

export default App;
