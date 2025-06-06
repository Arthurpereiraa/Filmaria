import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to='/' className="logo">Filmaria</Link>
      <Link to='/favoritos' className="favoritos">Salvos</Link>
    </header>
  );
}
