import React, { useContext } from 'react';
import { RootContext } from '../../App';
import './Card.css';

function Card(props) {
  const [, , , setDetail, , setIsAll] = useContext(RootContext);
  

  function clickCard(name) {
    console.log("click", name)
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        setDetail(data);
        setIsAll(false);
      })
      .catch(err => console.log("Err :", err))
  }

  return (
    <>
      {(() => {
        if(props.country){
          const data = props.country;
          return (
            <div className="card" key={data.name} onClick={() => clickCard(data.name)}>
              <div className="flag"><img src={data.flag} alt={data.name} /></div>
              <div className="description">
                <div className="countryName">{data.name}</div>
                <div><span className="title">Popilation: </span>{data.population.toLocaleString()}</div>
                <div><span className="title">Region: </span>{data.region}</div>
                <div><span className="title">Capital: </span>{data.capital}</div>
              </div>
            </div>
          );
        }
      })()}
    </>
  );
}

export default Card;
