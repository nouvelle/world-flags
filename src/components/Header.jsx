import React, { useContext } from 'react';
import { RootContext } from '../App';
import './Header.css';

function Header() {
  const [, , , , , setIsAll, colorMode, setColorMode] = useContext(RootContext);

  function goHome() {
    setIsAll(true);
  }
  function changeMord() {
    (colorMode === "light") ? setColorMode("dark") : setColorMode("light")
  }

  return (
    <header className="header">
      <p onClick={goHome}>Where in the world?</p>
      <p onClick={changeMord}>Dark Mord</p>
    </header>
  );
}

export default Header;
