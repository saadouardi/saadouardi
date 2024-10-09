import React from "react";
import { Header } from '../src/components/common/Header/Header';
import { MainSection } from "./sections/Main";
import { AboutSection } from "./sections/About";
import { SkillSection } from "./sections/Skills";
import { ServicesSection } from "./sections/Services";
import { ResumeSection } from "./sections/Resume";
import { PortfolioSection } from "./sections/Portfolio";
import { ContactSection } from "./sections/Contact";
import { Footer } from '../src/components/common/Footer/Footer';
import { TakeMeUp } from '../src/components/common/TakeMeUp/TakeMeUp';

const App = () => {
  return (
    <>
      <main>
        <Header/>
        <MainSection/>
        <div id="about">
          <AboutSection/>
        </div>
        <div id="skills">
          <SkillSection/>
        </div>
        <div id='services'>
          <ServicesSection/>
        </div>
        <div id='resume'>
          <ResumeSection/>
        </div>
        <div id='portfolio'>
          <PortfolioSection/>
        </div>
        <div id='contact'>
          <ContactSection/>
        </div>
        <Footer/>
        <TakeMeUp/>
      </main>
    </>
  );
};

export default App;
