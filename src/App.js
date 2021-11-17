import React, { useState, useEffect } from "react";
import './App.css';
import { MenuItem, FormControl, Select } from '@mui/material';
import InfoBox from './InfoBox';


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');


  useEffect(() => {
      
    const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
          .then((response) => response.json())
          .then((data) => {
            const countries = data.map((country) => ({
                name: country.country,
                value: country.countryInfo.iso2,
            }));

            setCountries(countries);

          });
        };
        getCountriesData();
      }, []);
   

const onCountryChange = async (event) => {
  const countryCode = event.target.value;

  console.log('test >>>', countryCode);

  setCountry(countryCode);
};

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country} >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={1234} total={1234} />
        <InfoBox title="Recovered" cases={1234} total={1234} />
        <InfoBox title="Deaths" cases={1234} total={1234} />
    </div>
    </div>
  );
}

export default App;
