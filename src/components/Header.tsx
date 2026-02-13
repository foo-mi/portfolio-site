import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>
        Funmi | Software Engineer 
        <span className="foomi"></span>
      </h1>
      <nav className="nav">
        <Link to="/">home</Link>
        <span>...</span>
        <Link to="/about">about</Link>
        <span>...</span>
        <a href="https://www.linkedin.com/in/funmi-koya/" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <span>..</span>
        <a href="https://github.com/foo-mi" target="_blank" rel="noopener noreferrer">
          github
        </a>
      </nav>
    </header>
  );
};

export default Header;
