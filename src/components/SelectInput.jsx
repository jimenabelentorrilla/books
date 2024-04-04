import { useContext } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { AppContext } from '../context/AppProvider';

export const SelectInput = () => {

  const { genero, setGenero } = useContext(AppContext);

  return (
    <>
        <FormControl>
              <InputLabel id="demo-simple-select-label">Género</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genero}
                label="Genero"
                onChange={e => setGenero(e.target.value)}
                >
                <MenuItem value="Todos">Todos</MenuItem>
                <MenuItem value="Fantasía">Fantasía</MenuItem>
                <MenuItem value="Ciencia ficción">Ciencia Ficción</MenuItem>
                <MenuItem value="Zombies">Zombies</MenuItem>
                <MenuItem value="Terror">Terror</MenuItem>
              </Select>
            </FormControl>
    </>
  );
}
