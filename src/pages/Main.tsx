import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button"
import YouTube from "react-youtube";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar"
import "../assets/styles/Main.css";
import { Link } from "react-router-dom";

const Main: React.FC= () => {
  const [theme, setTheme] = useState("ax-dark-mode");
  const [themeButton, setThemeButton] = useState("ax-btn-dark-mode");
  const ailookLogo = "https://raw.githubusercontent.com/aionlux/.github/main/resources/img/ailook/ailook_full_logo.png"
  const logoWhite = "https://raw.githubusercontent.com/aionlux/.github/main/resources/img/aionlux/full_logo_white.svg"
  const logoBlack = "https://raw.githubusercontent.com/aionlux/.github/main/resources/img/aionlux/full_logo_black.svg"
  const logoWhiteIcon = "https://raw.githubusercontent.com/aionlux/.github/main/resources/img/aionlux/logo_icon_white.svg"
  const logoBlackIcon = "https://raw.githubusercontent.com/aionlux/.github/main/resources/img/aionlux/logo_icon_black.svg"

  const toggleLightTheme = () => {
    setTheme('ax-light-mode');
    setThemeButton('ax-btn-light-mode');
  };

  const toggleDarkTheme = () => {
    setTheme('ax-dark-mode');
    setThemeButton('ax-btn-dark-mode');
  };

  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const toggleSystemTheme = () => {
    if (isDarkMode) {
      setTheme('ax-dark-mode');
      setThemeButton('ax-btn-dark-mode');
    } else {
      setTheme('ax-light-mode');
      setThemeButton('ax-btn-light-mode')
    }
}

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: any) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (isDarkMode) {
      favicon.href = logoWhiteIcon;
      setTheme('ax-dark-mode');
      setThemeButton('ax-btn-dark-mode');
    } else {
      favicon.href = logoBlackIcon;
      setTheme('ax-light-mode');
      setThemeButton('ax-btn-light-mode');
    }
  }, [isDarkMode]);

  const opts = {
    height: '390',
    width: '690',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <React.Fragment>
      <div className={`wrap-index ${theme}`}>
        <div className={`main-index ${theme}`}>
          <nav className={`main-nav ${theme}`}>
            <Menubar className={`main-menubar ${theme}`}>
              <MenubarMenu>
                <Link to="/">
                  {theme == 'ax-dark-mode' ? 
                  <img src={logoWhite} className="aionlux-logo" />
                  :
                  <img src={logoBlack} className="aionlux-logo" />
                  }
                </Link>
              </MenubarMenu>
            </Menubar>
            <Menubar className={theme == 'ax-dark-mode' ? "dark":"light"}>
            <MenubarMenu >
              <MenubarTrigger className={theme == 'ax-dark-mode' ? "dark":"light"}>
                {
                  theme == 'ax-dark-mode' ? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"/></svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"/></svg>
                }
              </MenubarTrigger>
                <MenubarContent className={theme == 'ax-dark-mode' ? "dark":"light"}>
                  <MenubarItem className={theme == 'ax-dark-mode' ? "dark":"light"} onClick={toggleLightTheme}>Claro</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className={theme == 'ax-dark-mode' ? "dark":"light"} onClick={toggleDarkTheme}>Oscuro</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className={theme == 'ax-dark-mode' ? "dark":"light"} onClick={toggleSystemTheme}>Sistema</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            </Menubar>
          </nav>
          <section className={`index-section-m ${theme}`}>
            <div className={`index-section-content ${theme}`}>
              <div className={`index-portal-phrase ${theme}`}>
                  <h1 className={`index-portal-title ${theme}`}>Explorando  la innovación con <span className="gradient-text">Inteligencia Artificial</span></h1>
                  <p className={`index-portal-subtitle ${theme}`}>
                    Bienvenido, explore nuestros proyectos en etapa inicial, experimentamos y aprendemos en el apasionante mundo de la <span className={`index-portal-title-span ${theme}`}>inteligencia artificial.</span>
                  </p>

                  <a className="gradient-link-button" href="#projects">Explora Nuestro Proyectos</a>
              </div>
            </div>
          </section>
          <section id="projects" className={`index-section-m ${theme}`}>
            <div className={`index-section-content ${theme}`}>
              <div className={`index-portal-phrase ${theme}`}>
                  <div className="index-image">
                    <img width={'250px'} src={ailookLogo}/>
                  </div>
                  <p className={`index-portal-subtitle ${theme}`}>
                  Sistema integrado de identificación, 
                  control y monitoreo de vehículos impulsada por <span className="index-portal-title-span">inteligencia artificial.</span>
                  </p>
                  <p className={`index-portal-subtitle ${theme}`}>
                  Con aplicaciones en seguridad vial, gestión de tránsito y estacionamientos.
                  </p>
                  <YouTube className={"index-portal-video"} videoId="lgmiZVk2vzQ" opts={opts} />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={`footer-index ${theme}`}>
        <Footer theme={theme}/>
      </div>
    </React.Fragment>
  );
};

export default Main;
