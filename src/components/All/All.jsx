import React, { useContext } from 'react';
import Card from './Card'
import Input from './Input'
import { RootContext } from '../../App';

import './All.css';

function All() {
  const [countriesData] = useContext(RootContext);

  // console.log(countriesData)
  return (
    <div className="contents">
      <Input />
      <div className="cardWrap">
        {(() => {
          if(countriesData) {
            return countriesData.map((country, i) => {
              // console.log(country);
              return <Card key={i} country={country} />
            })
          }
        })()}
      </div>
    </div>
  );
}

export default All;
