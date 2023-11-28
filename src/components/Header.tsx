import React, { Fragment, useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Container, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/Header.scss";

const Header: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Logo = "https://raw.githubusercontent.com/aionlux/.github/main/resources/img/l3.png"

  // Change background color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      let nb = document.getElementById("navbarroot-id") as HTMLDivElement;
      nb.style.background = "#fff";
      nb.style.boxShadow = "0px 3px 3px rgba(27, 51, 78, 0.09)";
    } else {
      let nb = document.getElementById("navbarroot-id") as HTMLDivElement;
      nb.style.background = "transparent";
      nb.style.boxShadow = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  // reponsive options
  const displayResponsive = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    let responsiveBlock = document.getElementById(
      "nav-bar__responsive"
    ) as HTMLDivElement;
    if (responsiveBlock.className === "nav-bar__responsive--none") {
      responsiveBlock.className = "nav-bar__responsive--block";
    } else if (responsiveBlock.className === "nav-bar__responsive--block") {
      responsiveBlock.className = "nav-bar__responsive--none";
    }
  };

  const disableMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let responsiveBlock = document.getElementById(
      "nav-bar__responsive"
    ) as HTMLDivElement;
    if (responsiveBlock.className === "nav-bar__responsive--block") {
      responsiveBlock.className = "nav-bar__responsive--none";
    }
  };

  const enableMenu = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    e.stopPropagation();
    let menu = document.getElementById(
      "nav-bar__responsive-list-id"
    ) as HTMLDivElement;
    menu.style.display = "block";
  };

  return (
    <React.Fragment>
      <nav id="navbarroot-id" className="navbarroot">
        <Container fluid="xxl" className="nav-bar">
          <div className="nav-bar__logo">
            <Link  to={"/"}>
              <img
                className="nav-bar__logo-image"
                src={Logo}
                alt=""
              />
            </Link>
          </div>

          <div
            className="nav-bar__display"
            id="nav-bar__display-id"
            onClick={displayResponsive}
          >
            <img
              className="nav-bar__display-icon"
              src="https://raw.githubusercontent.com/addleonel/ghcenter/59ef2cad24ca811449366d46ee576a8100de17a8/homewc/src/assets/static/icons/bars.svg"
              alt=""
            />
          </div>

          <div className="nav-bar__buttons">
            {/* <Link
              className="nav-bar__buttons-item"
              to=""
            >_NOSOTROS</Link>
             */}
          </div>
           
        </Container>
      </nav>

      <section
        id="nav-bar__responsive"
        className="nav-bar__responsive--none"
        onClick={disableMenu}
      >
        <ul
          id="nav-bar__responsive-list-id"
          className="nav-bar__responsive-list"
          onClick={enableMenu}
        >
          <li className="nav-bar__responsive-li">
            <Link
              id="about-res"
              onClick={disableMenu}
              className="nav-bar__responsive-item"
              to="/about/"
            >
              Sobre Nosotros
            </Link>
          </li>
          <li className="nav-bar__responsive-li">
            <Link
              id="contact-res"
              onClick={disableMenu}
              className="nav-bar__responsive-item"
              to="/contact/"
            >
              Contacto
            </Link>
          </li>
          <hr />
         
        </ul>
      </section>
      
    </React.Fragment>
  );
};

export default Header;
