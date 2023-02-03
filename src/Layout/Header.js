import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <span className="header-logo">
        <img src="./logo192.png" alt="logo" className="logo" />
        <label>Design Match Challenge</label>
      </span>
      <nav>Nav Bar</nav>
    </header>
  );
}
