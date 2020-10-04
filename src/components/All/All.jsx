import React, { useContext } from 'react';
import Card from './Card'
import Input from './Input'
import Filter from './Filter'
import { RootContext } from '../../App';

import './All.css';

function All() {
  const [countriesData] = useContext(RootContext);

  // console.log(countriesData)
  return (
    <div className="contents">
      <div className="choicesWrap">
        <Input />
        <Filter />
      </div>
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
