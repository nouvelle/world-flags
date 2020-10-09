import React, { useContext } from 'react';
import Card from './Card'
import Input from './Input'
import Filter from './Filter'
import { RootContext } from '../../App';

import './All.scss';

function All() {
  const [countriesData] = useContext(RootContext);

  console.log(countriesData)
  return (
    <div className="container">
      <div className="choicesWrap">
        <Input />
        <Filter />
      </div>
      <div className="cardWrap">
        {countriesData 
          ? (
              countriesData.map((country, i) => {
                return <Card key={i} country={country} />
              })
            )
          : <></>
        }
      </div>
    </div>
  );
}

export default All;
