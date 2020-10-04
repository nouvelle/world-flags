import React, { useContext } from 'react';
import { RootContext } from '../../App';
import './Filter.css';

function Filter() {
  const [, setCountriesData, , , ,] = useContext(RootContext);

  function handleChange(e){
    const region = e.target.value;
    let url = ""
    region === "All"
      ? url = "https://restcountries.eu/rest/v2/all"
      : url = `https://restcountries.eu/rest/v2/region/${region}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        setCountriesData(data);
      })
      .catch(err => console.log("Err :", err))
  }

  return (
    <div className="FilterBox">
      <select
        name="region"
        onChange={handleChange}
        defaultValue={'DEFAULT'}
      >
        <option value="DEFAULT" disabled>Filter by Region</option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
