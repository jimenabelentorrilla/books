import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const Libros = () => {

    const { librosFiltrados, handleChar} = useContext(AppContext);


  return (
    <>
        <ul className="box-libros">
            {librosFiltrados.map((libro, index) => (
                <li key={index} onClick={() => handleChar(libro)}>
                    <img 
                        className="imagen-libro"
                        src={libro.book.cover} 
                        alt={libro.book.title} />
                </li>
            ))}
        </ul>       
    </>
  )
}
