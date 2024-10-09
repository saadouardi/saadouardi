import { Resume } from '../components/Sections/Resume/Resume';

import MasterIsolation from '../assets/images/Resume/Experience/MI-logo.jpg';
import Netone from '../assets/images/Resume/Experience/netone.jpeg';
import Freelance from '../assets/images/Resume/Experience/freelance.jpg';

import Morocco from '../assets/images/Flags/morocco.svg';
import USA from '../assets/images/Flags/usa.png';
import Germany from '../assets/images/Flags/germany.png';

export const ResumeSection = ()=>{
    return(
        <section>
            <div class="section__title_div Title">
                <h1 class="section__title">MY <span class="span__title">RESUME</span></h1>
                <h6 class="section__title_description">My parkour</h6>
            </div>

            <div class="resume-global__container">
                <div class="Education resume">
                    <div class="resume__subtitle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/><path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/></svg>
                        <h1>Education</h1>
                    </div>

                    <div class="resume__list">
                        <Resume 
                            Flag={Morocco} Program='HIGHSCHOOL DEGREE' 
                            Degree='MATHEMATICAL SCIENCE A' 
                            DegreeDetails='My high school education in Morocco, majoring in Science Mathematics, laid a solid foundation for my journey into computer science by fostering critical thinking and problem-solving abilities essential for technical fields.' 
                            DegreeFrom='IBNOU CHOHAID QUALIFICATION' 
                            Date='2018-2021'/>

                        <Resume 
                            Flag={USA} Program='BACHELOR DEGREE' 
                            Degree='COMPUTER SCIENCE' 
                            DegreeDetails='During my time at Minnesota State University, I gained valuable insights and practical skills in computer science, enriching my understanding of programming languages and software development methodologies.' 
                            DegreeFrom='Minnesota State University' 
                            Date='2022-2023'/>

                        <Resume 
                            Flag={Germany} Program='Intensive German Course' 
                            Degree='Language Certificate B1' 
                            DegreeDetails='At Evolanguage School in Frankfurt, I have immersed myself in intensive German language studies, enhancing my proficiency and communication skills to navigate effectively in a German-speaking environment.' 
                            DegreeFrom='Evolanguage School' 
                            Date='2023-2024'/>
                    </div>
                </div>

                <div class="Experience resume">
                    <div class="resume__subtitle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/></svg>
                        <h1>Experience</h1>
                    </div>

                    <div class="resume__list">
                        <Resume 
                            Flag={MasterIsolation} Program='MASTER ISOLATION' 
                            Degree='WEB DEVELOPER' 
                            DegreeDetails='My experience at Master Isolation as a web developer provided me with hands-on experience collaborating within a team to develop an ecommerce website, honing my skills in coding, problem-solving, and project management in a real-world setting.' 
                            DegreeFrom='Casablanca, Morocco' 
                            Date='2021-2024'/>

                        <Resume 
                            Flag={Netone} Program='NETONE' 
                            Degree='FRONTEND DEVELOPER' 
                            DegreeDetails='During my tenure at NetOne as a frontend developer, I contributed to the development of various projects, sharpening my expertise in crafting user-friendly interfaces and enhancing my proficiency in frontend technologies, which further fueled my passion' 
                            DegreeFrom='Casablanca, Morocco' 
                            Date='2022-2023'/>

                        <Resume 
                            Flag={Freelance} Program='Freelance' 
                            Degree='SOFTWARE DEVELOPER' 
                            DegreeDetails='Through my freelance work on platforms like Fiverr, I have cultivated a diverse skill set by tackling a range of projects, This experience has not only broadened my technical expertise but also refined my ability to delive' 
                            DegreeFrom='World Wide' 
                            Date='2018-2024'/>
                    </div>
                </div>
            </div>
        </section>
    )
}