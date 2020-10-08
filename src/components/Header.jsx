import React, { useContext } from 'react';
import { RootContext } from '../App';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
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
      <p onClick={changeMord}>
        <i className="fas fa-moon moonIcon"></i>
        Dark Mord
        </p>
    </header>
  );
}

export default Header;
