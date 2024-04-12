import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const ListaLectura = () => {

    const { librosSeleccionados } = useContext(AppContext);    

  return (
    <>
     <div className="list-modal">
      <h1>Lista de Lectura</h1>
      <ul>
        {librosSeleccionados.map((libro, index) => (
                  <li key={index}>
                      <img 
                          className="imagen-libro"
                          src={libro.book.cover} 
                          alt={libro.book.title} />
                  </li>
              ))}  
      </ul>    
  
    </div>
    </>
  )
}
