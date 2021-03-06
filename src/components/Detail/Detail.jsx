import React, { useContext, useState, useEffect } from 'react';
import { RootContext } from '../../App';

import './Detail.scss';

function Detail() {
  const [borders, setBorders] = useState("");
  const [, , detail, setDetail, , setIsAll] = useContext(RootContext);
  let countryInfo = {};

  // border Countries のデータ取得
  useEffect(() => {
    let borderCountries = []
    getBorderCountryData();

    async function getBorderCountryData() {
      if(detail[0].borders.length > 0){
        console.log(detail[0].borders)
  
        for(let i = 0; i < detail[0].borders.length; i++) {
          const url = `https://restcountries.eu/rest/v2/alpha/${detail[0].borders[i]}`;
          await fetch(url)
          .then(res => res.json())
          .then(data => borderCountries.push(data))
          .catch(err => console.log("Err :", err))
        }
        console.log(borderCountries)
        setBorders(borderCountries)
    }
    }
  }, [detail]);

  countryInfo = {
    nativeName: detail[0].nativeName ? detail[0].nativeName : "",
    population: detail[0].population ? detail[0].population.toLocaleString() : "",
    region: detail[0].region ? detail[0].region : "",
    subregion: detail[0].subregion ? detail[0].subregion : "",
    capital: detail[0].capital ? detail[0].capital : "",
    topLevelDomain: detail[0].topLevelDomain ? detail[0].topLevelDomain.map(dmain => dmain + ", ") : "",
    currencies: detail[0].currencies ? detail[0].currencies.map(obj => obj.name + ", ") : "",
    languages: detail[0].languages ? detail[0].languages.map(obj => obj.name + ", ") : "",
  }

  function clickBorderCountry(name) {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDetail(data);
      })
      .catch(err => console.log("Err :", err))
  }

  function changeView(){
    setIsAll(true);
  }

  return (
    <div className="container">
      <button onClick={changeView} className="backBtn">← Back</button>
      <div className="wrapDetail">
        <div className="leftFlag">
          <img src={detail[0].flag} alt={detail[0].name} />
        </div>
        <div className="rightDetail">
          <div className="countryName">{detail[0].name}</div>
          <div className="wrapInsideDetail">
            <div className="leftInsideDetail">
              <div className="nativeName"><span className="title">Native Name: </span>{countryInfo.nativeName}</div>
              <div className="population"><span className="title">Population: </span>{countryInfo.population}</div>
              <div className="region"><span className="title">Region: </span>{countryInfo.region}</div>
              <div className="subRegion"><span className="title">Sub Region: </span>{countryInfo.subregion}</div>
              <div className="capital"><span className="title">Capital: </span>{countryInfo.capital}</div>
            </div>
            <div className="rightInsideDetail">
              <div className="domain"><span className="title">Top Level Domain: </span>{countryInfo.topLevelDomain}</div>
              <div className="currencies"><span className="title">Currencies: </span>{countryInfo.currencies}</div>
              <div className="languages"><span className="title">Languages: </span>{countryInfo.languages}</div>
            </div>
          </div>
          <div className="borderCountries"><span className="title">Border Countries: </span>
            <div className="wrapBorderCountries">
              {borders
                ? (
                    borders.map((country, i) => {
                      return (
                        <div 
                          key={i}
                          className="borderCountry"
                          onClick={() => clickBorderCountry(country.name)}
                        >{country.name}</div>
                      )
                    })
                  )
                : <></>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
