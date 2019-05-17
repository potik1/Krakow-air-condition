import React from 'react';
import './Header.css';
import logo from '../../assets/LogoBlue.svg';

const Header = () => (
  <div className="header">
    <div>
        KRAKÓW AIR CONDITION BASED ON &nbsp;
      <img src={logo} alt="logo" />
        &nbsp; STATIONS
    </div>
  </div>
);

export default Header;
