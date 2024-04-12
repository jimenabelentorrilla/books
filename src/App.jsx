import { useContext } from 'react';
import './App.css';
import { Libros } from './components/Libros';
import { Slider } from '@mui/material';
import { SelectInput } from "./components/SelectInput";
import { AppContext } from './context/AppProvider';
import { ListaLectura } from './components/ListaLectura';


/**TO DO: 
     * -- Hacer una carpeta  de Hooks y pasar algunos fragmentos de codigo */
    /* -- Hacer una seccion de favoritos*/
    /**-- Utilizar React Router para abrir una ventana con los detalles de c/ libro */


function App() {

  const { setPaginas, cuentaLibros } = useContext(AppContext);
  
  return (
    <>
    <div className="cont-flex">
      <div>
      <h1>{cuentaLibros} libros disponibles</h1>
      <div className="container">
        <SelectInput />
        <div>
          <h3>Filtrar por páginas</h3>
            <div className='sp'>
              <span>-</span>
              <Slider 
              min={43}
              max={1200}
              aria-label="Default"
              defaultValue={1200} 
              valueLabelDisplay="auto"
              onChange={e => setPaginas(e.target.value)} />
              <span>+</span>
            </div>
        </div>
      </div>
      <Libros />
    </div>
      <ListaLectura />
    
    </div>
    
  </>
  );
}

export default App;
