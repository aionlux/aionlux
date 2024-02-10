import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";

interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <React.Fragment>
      <div className={`footer-container ${theme}`}>
        <div className="home-footer">
          <ul className="home-footer__ul">
            <li className="home-footer__li">
              <Link to="/about/" className="home-footer__link">
                _Nosotros
              </Link>
            </li>
            <li className="home-footer__li">
              <Link to="/contact/" className="home-footer__link">
                _Contacto
              </Link>
            </li>
          </ul>
        </div>
        <p className="home-footer__copyright">
          2024 &#169; AIONLUX - Todos los derechos reservados
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;