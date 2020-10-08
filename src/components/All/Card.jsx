import React, { useContext } from 'react';
import { RootContext } from '../../App';
import './Card.css';

function Card(props) {
  const [, , , setDetail, , setIsAll] = useContext(RootContext);

  function clickCard(name) {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDetail(data);
        setIsAll(false);
      })
      .catch(err => console.log("Err :", err))
  }

  return (
    <>
      {props.country
        ? (
            <div className="card" key={props.country.name} onClick={() => clickCard(props.country.name)}>
              <div className="flag"><img src={props.country.flag} alt={props.country.name} /></div>
              <div className="description">
                <div className="countryName">{props.country.name}</div>
                <div className="population"><span className="title">Population: </span>{props.country.population.toLocaleString()}</div>
                <div className="region"><span className="title">Region: </span>{props.country.region}</div>
                <div className="capital"><span className="title">Capital: </span>{props.country.capital}</div>
              </div>
            </div>
          )
        : <></>
      }
    </>
  );
}

export default Card;
