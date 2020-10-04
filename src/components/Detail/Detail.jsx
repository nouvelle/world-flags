import React, { useContext } from 'react';
import { RootContext } from '../../App';

import './Detail.css';

function Detail() {
  const [countriesData, detail, setDetail, isAll, setIsAll] = useContext(RootContext);
  console.log(detail)

  const countryInfo = {
    nativeName: detail[0].nativeName ? detail[0].nativeName : "",
    population: detail[0].population ? detail[0].population.toLocaleString() : "",
    region: detail[0].region ? detail[0].region : "",
    subregion: detail[0].subregion ? detail[0].subregion : "",
    capital: detail[0].capital ? detail[0].capital : "",
    topLevelDomain: detail[0].topLevelDomain ? detail[0].topLevelDomain.map(dmain => dmain + ", ") : "",
    currencies: detail[0].currencies ? detail[0].currencies.map(obj => obj.name + ", ") : "",
    languages: detail[0].languages ? detail[0].languages.map(obj => obj.name + ", ") : "",
    borders: detail[0].borders ? detail[0].borders.map(name => name + ", ") : "",
  }
  function changeView(){
    setIsAll(true);
  }

  return (
    <div className="contents">
      <button onClick={changeView} className="backBtn">← Back</button>
      <div className="wrapDetail">
        <div className="leftFlag">
          <img src={detail[0].flag} alt={detail[0].name} />
        </div>
        <div className="rightDetail">
          <div className="countryName">{detail[0].name}</div>
          <div><span className="title">Native Name: </span>{countryInfo.nativeName}</div>
          <div><span className="title">Popilation: </span>{countryInfo.population}</div>
          <div><span className="title">Region: </span>{countryInfo.region}</div>
          <div><span className="title">Sub Region: </span>{countryInfo.subregion}</div>
          <div><span className="title">Capital: </span>{countryInfo.capital}</div>
          <div><span className="title">Top Level Domain: </span>{countryInfo.topLevelDomain}</div>
          <div><span className="title">Currencies: </span>{countryInfo.currencies}</div>
          <div><span className="title">Languages: </span>{countryInfo.languages}</div>
          <div><span className="title">Border Countries: </span>{countryInfo.borders}</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
