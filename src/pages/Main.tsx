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

const Main: React.FC= () => {
  const [theme, setTheme] = useState("ax-dark-mode");
  const [themeButton, setThemeButton] = useState("ax-btn-dark-mode");
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
                {theme == 'ax-dark-mode' ? 
                <img src={logoWhite} className="aionlux-logo" />
                :
                <img src={logoBlack} className="aionlux-logo" />
                }
              </MenubarMenu>
            </Menubar>
            <Menubar className={theme == 'ax-dark-mode' ? "dark":"light"}>
            <MenubarMenu >
              <MenubarTrigger className={theme == 'ax-dark-mode' ? "dark":"light"}>
              Tema
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
          <section className={`index-section-m index-section-1 ${theme}`}>
            <div className={`index-section-1-content ${theme}`}>
              <div className={`index-portal-phrase ${theme}`}>
                  <p className={`index-portal-title ${theme}`}>
                    Bienvenido, explore nuestros proyectos en etapa inicial, experimentamos y aprendemos en el apasionante mundo de la <span className={`index-portal-title-span ${theme}`}>inteligencia artificial.</span>
                  </p>
              </div>
            </div>
          </section>
          <section className="index-section-m index-section-1">
            <div className="index-section-1-content">
                <div className="index-portal-phrase">
                  <h1 className="index-portal-title">
                  Sistema integrado de identificación, 
                  control y monitoreo de vehículos impulsada por <span className="index-portal-title-span">inteligencia artificial.</span>
                  </h1>
                  <p className="index-portal-subtitle">
                  Con aplicaciones en seguridad vial, gestión de tránsito y estacionamientos.
                  </p>
                  <YouTube className={"index-portal-video"} videoId="lgmiZVk2vzQ" opts={opts} />
                </div>
            </div>
          </section>
        </div>
        <div className={`footer-index ${theme}`}>
          <Footer theme={theme}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
