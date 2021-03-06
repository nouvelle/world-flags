import React, { useContext, useState } from 'react';
import { RootContext } from '../../App';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import './Filter.scss';

function Filter() {
  const [, setCountriesData, , , ,] = useContext(RootContext);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Filter by Region");

  function openList() {
    (!isOpen) ? setIsOpen(true) : setIsOpen(false);
  }

  function handleChange(e) {
    const region = e.target.innerText;
    let url = ""
    region === "All"
    ? url = "https://restcountries.eu/rest/v2/all"
    : url = `https://restcountries.eu/rest/v2/region/${region}`
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountriesData(data);
      })
      .catch(err => console.log("Err :", err))
    setTitle(region)
    setIsOpen(false)
  }

  return (
    <div className="FilterBox">
      <div className="selectTitle"
        onClick={openList}
      >{title}</div>
      <i className="fas fa-angle-down downIcon"></i>
      { isOpen 
        ? (
            <ul className="selectList" onClick={handleChange}>
              <li data-value="All">All</li>
              <li data-value="Africa">Africa</li>
              <li data-value="Americas">Americas</li>
              <li data-value="Asia">Asia</li>
              <li data-value="Europe">Europe</li>
              <li data-value="Oceania">Oceania</li>
            </ul>
          )
        : <></>
      }
    </div>
  );
}

export default Filter;