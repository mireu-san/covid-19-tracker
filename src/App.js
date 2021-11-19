import React, { useState, useEffect } from "react";
import './App.css';
import { MenuItem, FormControl, Select, Card, CardContent, } from '@mui/material';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import { sortData } from './util';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  // to display the data as soon as accessing the page
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        });
  }, []); // [this blank square backet] allows - only execute itself only when I load App.js


  useEffect(() => {
      
    const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
          .then((response) => response.json())
          .then((data) => {
            const countries = data.map((country) => ({
                name: country.country,
                value: country.countryInfo.iso2,
            }));

            const sortedData = sortData(data);
            setTableData(sortedData);
            setCountries(countries);

          });
        };
        getCountriesData();
      }, []);
   
// GET API START
// async and await fetch
const onCountryChange = async (event) => {
  const countryCode = event.target.value;
  // console.log('test >>>', countryCode);
  setCountry(countryCode);

  const url = 
    countryCode === "worldwide"
  ? 'https://disease.sh/v3/covid-19/all' 
  : `https://disease.sh/v3/covid-19/countries/${countryCode}` // /v3/covid-19/countries/{country}/ -> get 'countryCode' specifically from it

  await fetch(url)
  .then(response => response.json())
  .then(data => {
    setCountry(countryCode);
    setCountryInfo(data);
  })

  // https://disease.sh/v3/covid-19/all
  // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]
};

console.log("country info >>>" , countryInfo);

// GET API section END

  return (
    <div className="app">
      <div className="app__left">
      <div className="app__header">
        <h1>Covid-19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select 
          variant="outlined" 
          onChange={onCountryChange} 
          value={country} 
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox 
          title="Coronavirus Cases" 
          cases={countryInfo.todayCases} 
          total={countryInfo.cases} />
        <InfoBox 
          title="Recovered" 
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered} />
        <InfoBox 
          title="Deaths" 
          cases={countryInfo.todayDeaths} 
          total={countryInfo.deaths} />
    </div>

      <Map />
    </div>

    <Card className="app__right">
      <CardContent>
        <h3>Live cases by country</h3>
        <Table countries={tableData} />
        <h3>Worldwide new cases</h3>
      </CardContent>
    </Card>

  </div>
  );
}

export default App;
