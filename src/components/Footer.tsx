import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-badges">
        {/* Template badges - in a real implementation, these would be images <span className="badge" title="Funmi Orekoya Badge"></span>*/}
        

      </div>

      <nav className="footer-nav">
        <Link to="/">home</Link>
        <span>..</span>
        <Link to="/about">about</Link>
        <span>..</span>
        <a href="https://www.linkedin.com/in/funmi-koya/" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <span>..</span>
        <a href="https://github.com/foo-mi" target="_blank" rel="noopener noreferrer">
          github
        </a>
        
      </nav>

      <div className="copyright">
        foo-mi © {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
