import React, { useContext, useState } from 'react';
import { RootContext } from '../../App';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import './Input.css';

function Input() {
  const [inputText, setInputText] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [, setCountriesData, , , ,] = useContext(RootContext);

  function search(){
    console.log("click", inputText)
    if(!inputText) return;
    const url = `https://restcountries.eu/rest/v2/name/${inputText}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        if(data.status && data.status === 404){
          setErrMsg("No data");
        } else {
          setCountriesData(data);
        }
      })
      .catch(err => console.log("Err :", err))
  }
  function clear() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
      setCountriesData(data);
    })
  }

  return (
    <div className="inputBox">
      <i class="fas fa-search searchIcon"></i>
      <input
        className="searchBox"
        onChange={e => {
          setInputText(e.target.value);
          setErrMsg("");
        }}
        type="text"
        placeholder="Search for a country..."/>
        <button onClick={search}>search</button>
        <button onClick={clear}>clear</button>
        {(() => {
          return (errMsg) ? <p>{errMsg}</p> : <></>
        })()}
      </div>
  );
}

export default Input;
