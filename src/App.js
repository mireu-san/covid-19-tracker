import React from "react";
import './App.css';
import { MenuItem, FormControl, Select } from '@mui/material';

function App() {
  return (
    <div className="app">
      <h1>Covid-19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide2</MenuItem>
          <MenuItem value="worldwide">Worldwide3</MenuItem>
          <MenuItem value="worldwide">Worldwide4</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}

export default App;
