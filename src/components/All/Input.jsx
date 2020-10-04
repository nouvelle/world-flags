import React, { useContext, useState } from 'react';
import { RootContext } from '../../App';
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
  return (
    <div className="inputBox">
      <input
        className="searchBox"
        onChange={e => {
          setInputText(e.target.value);
          setErrMsg("");
        }}
        type="text"
        placeholder="Search for a country..."/>
      <button onClick={search}>search</button>
      {(() => {
        return (errMsg) ? <p>{errMsg}</p> : <></>
      })()}
    </div>
  );
}

export default Input;
