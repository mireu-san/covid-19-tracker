import React, { useState } from "react";
import './App.css';
import { MenuItem, FormControl, Select } from '@mui/material';

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA']);
  
  return (
    <div className="app">
      <div className="app__header">

      
      <h1>Covid-19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          {
            countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
              ))}
        </Select>
      </FormControl>
      </div>
    </div>
  );
}

export default App;
