import React, { useContext } from 'react';
import { RootContext } from '../../App';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import './Filter.css';

function Filter() {
  const [, setCountriesData, , , ,] = useContext(RootContext);

  function handleChange(e){
    console.log("filter")
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
      <div className="selectTitle"
        onChange={handleChange}
      >Filter by Region</div>
      <i className="fas fa-angle-down downIcon"></i>
      <ul className="selectList">
        <li data-value="All">All</li>
        <li data-value="Africa">Africa</li>
        <li data-value="Americas">Americas</li>
        <li data-value="Asia">Asia</li>
        <li data-value="Europe">Europe</li>
        <li data-value="Oceania">Oceania</li>
      </ul>
      {/* <select
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
      </select> */}
    </div>
  );
}

export default Filter;

{/* <select
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
</select> */}