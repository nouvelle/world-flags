import React, { useContext } from 'react';
import { RootContext } from '../../App';

import './Detail.css';

function Detail() {
  const [countriesData, detail, setDetail, isAll, setIsAll] = useContext(RootContext);
  console.log(detail)

  function changeView(){
    setIsAll(true);
  }

  return (
    <div className="contents">
      <button onClick={changeView}>← Back</button>
      <div className="wrapDetail">
        <div className="leftFlag">
          <img src={detail[0].flag} alt={detail[0].name} />
        </div>
        <div className="rightDetail">
          <div className="countryName">{detail[0].name}</div>
          <div><span className="title">Native Name: </span>{detail[0].nativeName}</div>
          <div><span className="title">Popilation: </span>{detail[0].population.toLocaleString()}</div>
          <div><span className="title">Region: </span>{detail[0].region}</div>
          <div><span className="title">Sub Region: </span>{detail[0].subregion}</div>
          <div><span className="title">Capital: </span>{detail[0].capital}</div>
          <div><span className="title">Top Level Domain: </span>{detail[0].topLevelDomain[0]}</div>
          <div><span className="title">Currencies: </span>{detail[0].borders[0].name}</div>
          <div><span className="title">Languages: </span>{detail[0].languages[0]}</div>
          <div><span className="title">Border Countries: </span></div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
