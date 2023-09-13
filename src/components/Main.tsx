import React, { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import YouTube from "react-youtube";
import Footer from "./Footer";
import Header from "./Header";
import "../assets/styles/Main.scss";

const Main: React.FC= () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const opts = {
    height: '390',
    width: '690',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <React.Fragment>
          <div className="wrap">
            <Header />
            <div className="main">
              <section className="section-m section-1">
                <video className="video-background" controls={false} autoPlay muted loop>
                  <source src="https://aionlux.com/videos/bg-2.mp4" type="video/mp4"/>
                </video>
                <div className="section-1-content">
                  <div className="portal-phrase">
                    <h1 className="portal-title">
                    Sistema integrado de identificación, 
                    control y monitoreo de vehículos impulsada por <span className="portal-title-span">inteligencia artificial.</span>
                    </h1>
                    <p className="portal-subtitle">
                    Con aplicaciones en seguridad vial, gestión de tránsito y estacionamientos.
                    </p>
                    <button
                      className="principal__message-button"
                      onClick={handleShow}
                    >
                      _avances
                    </button>
                    {/* <YouTube videoId="J9t-6mN1FAw" opts={opts} /> */}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
    </React.Fragment>
  );
};

export default Main;