import { useEffect, useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ( {children} ) => {

    const [genero, setGenero] = useState("Todos");
    const [paginas, setPaginas] = useState(1200);
    const [libros, setLibros] = useState([]);
    const [librosFiltrados, setLibrosFiltrados] = useState([]);
    const [cuentaLibros, setCuentaLibros] = useState(0);
    const [librosSeleccionados, setLibrosSeleccionados] = useState([]);
  
   


	const cargarDatos = async () => { 
            try {
                    const response = await fetch("./books.json") 
                    const data = await response.json() 
                    console.log(data)
                    setLibros(data.library) 
            } catch (error) { 
                    console.error(error) 
            }
            
        }

        useEffect( () => { /*nos servirá para que se ejecute solamente una vez, sin ninguna dependencia*/
            cargarDatos()
        }, [])

        
        /******* */
        useEffect(() => {
        if ( genero === 'Todos') {
        setLibrosFiltrados(libros.filter(libro => paginas >= libro.book.pages));

        } else {
        const librosFiltrados = libros.filter(libro => libro.book.genre === genero && paginas >= libro.book.pages);
        setLibrosFiltrados(librosFiltrados);
        }}, [genero , libros, paginas]);

		/***/ 
        useEffect(() => {
            setCuentaLibros(librosFiltrados.length);
        }, [librosFiltrados]);

        const handleChar = (libro) =>{
            
            // Verificar si el libro ya está en la lista de seleccionados
            const estaSeleccionado = librosSeleccionados.some(
                (lib) => lib.book.title === libro.book.title);

            // Si no está seleccionado, agregarlo a la lista
            if (!estaSeleccionado) {
                setLibrosSeleccionados([...librosSeleccionados, libro]);
            }
           
        }

            
		const contextValue = {
			genero,
			setGenero,
			paginas,
			setPaginas,
			libros,
			librosFiltrados,
			cuentaLibros, 
            librosSeleccionados,
            handleChar
                       
		};

	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	)
}