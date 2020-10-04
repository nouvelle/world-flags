import React, { createContext, useState, useEffect } from 'react';
import Header from './components/Header'
import All from './components/All/All'
import Detail from './components/Detail/Detail'
import './App.css';

export const RootContext = createContext();
// export const RootContext = createContext({
//   countriesData: [],
//   detail: [],
//   addDetail: () => {},
//   isAll: true,
//   addView: () => {}
// });

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [isAll, setIsAll] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => {
        setCountriesData(data);
      })
  }, []);

  return (
    <div className="app">
      <Header />
      <RootContext.Provider value={[countriesData, setCountriesData, detail, setDetail, isAll, setIsAll]}>
        {(() => {
          return isAll ? <All /> : <Detail />;
        })()}
        
      </RootContext.Provider>
    </div>
  );
}

export default App;
