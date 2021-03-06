import React, { createContext, useState, useEffect } from 'react';
import Header from './components/Header'
import All from './components/All/All'
import Detail from './components/Detail/Detail'
import './App.scss';
import './darkmode.scss';

export const RootContext = createContext();

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [isAll, setIsAll] = useState(true);
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => {
        setCountriesData(data);
      })
  }, []);

  return (
    <div className={`app ${colorMode}`}>
      <RootContext.Provider value={[countriesData, setCountriesData, detail, setDetail, isAll, setIsAll, colorMode, setColorMode]}>
      <Header />
      <div className="contents">
        {isAll ? <All /> : <Detail />}
      </div>
      </RootContext.Provider>
    </div>
  );
}

export default App;
