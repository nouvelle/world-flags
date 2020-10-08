import React, { useContext, useState } from 'react';
import { RootContext } from '../../App';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import './Input.css';

function Input() {
  const [inputText, setInputText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [, setCountriesData, , , ,] = useContext(RootContext);

  function searchCountry(name) {
    if(name !== inputText && !isSearching) {
      let url = "";
      (name === "") 
        ? url = "https://restcountries.eu/rest/v2/all"
        : url = `https://restcountries.eu/rest/v2/name/${name}`;
      setInputText(name)
      setIsSearching(true)
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log("data", data);
          if(Array.isArray(data)) setCountriesData(data);
        })
        .catch(err => console.log("Err :", err))
        .finally(i => setIsSearching(false))
    }
  }

  return (
    <>
      <div className="inputBox">
        <i className="fas fa-search searchIcon"></i>
        <input
          className="searchBox"
          onChange={e => {
            searchCountry(e.target.value);
          }}
          type="text"
          placeholder="Search for a country..."/>
        </div>
      </>
  );
}

export default Input;
