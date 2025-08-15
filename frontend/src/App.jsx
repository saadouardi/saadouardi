import React, { useState, useEffect } from "react";
import { Header } from '../src/components/common/Header/Header';
import { Main } from "./sections/Main/Main";
import { About } from "./sections/About/About";
import { SkillSection } from "./sections/Skills/Skills";
import { ServicesSection } from "./sections/Services/Services";
import { ResumeSection } from "./sections/Resume/Resume";
import { Portfolio } from "./sections/Portfolio/Portfolio";
import { ContactSection } from "./sections/Contact/Contact";
import { Footer } from '../src/components/common/Footer/Footer';
import { TakeMeUp } from '../src/components/common/TakeMeUp/TakeMeUp';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") || "bright");

  useEffect(() => {
    const onStorage = () => {
      setCurrentTheme(localStorage.getItem("theme") || "bright");
    };
    window.addEventListener("storage", onStorage);
    // Also update theme if changed in this tab
    const themeInterval = setInterval(onStorage, 0);

    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(themeInterval);
    };
  }, []);

  return (
    <>
      <Header/>
      <main className={currentTheme === 'dark' ? 'dark-theme' : 'light-theme'}>
        <Main/>
        <About/>
        <SkillSection/>
        <ServicesSection/>
        <ResumeSection/>
        <Portfolio/>
        <ContactSection/>
        <Footer/>
        <TakeMeUp/>
      </main>
    </>
  );
};

export default App;
