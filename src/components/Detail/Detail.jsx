import React, { useContext } from 'react';
import { RootContext } from '../../App';

import './Detail.css';

function Detail() {
  const [countriesData, detail, setDetail, isAll, setIsAll] = useContext(RootContext);
  console.log(detail)
  return (
    <div className="contents">
      Detail
    </div>
  );
}

export default Detail;
