import React from "react";
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
  return (
    <>
      <main>
        <Header/>
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
