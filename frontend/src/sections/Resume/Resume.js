import React from 'react';
import { Title } from '../../components/common/Title/Title';
import { Resume } from '../../components/Sections/Resume/Resume';
import MasterIsolation from '../../assets/images/Resume/Experience/MI-logo.jpg';
import Netone from '../../assets/images/Resume/Experience/netone.jpeg';
import Freelance from '../../assets/images/Resume/Experience/freelance.jpg';
import Morocco from '../../assets/images/Flags/morocco.svg';
import USA from '../../assets/images/Flags/usa.png';
import Germany from '../../assets/images/Flags/germany.png';

export const ResumeSection = () => {
    const educationList = [
        {
            Flag: Morocco,
            Program: 'HIGHSCHOOL DEGREE',
            Degree: 'MATHEMATICAL SCIENCE A',
            DegreeDetails: 'My high school education in Morocco, majoring in Science Mathematics, laid a solid foundation for my journey into computer science by fostering critical thinking and problem-solving abilities essential for technical fields.',
            DegreeFrom: 'IBNOU CHOHAID QUALIFICATION',
            Date: '2018-2021'
        },
        {
            Flag: USA,
            Program: 'BACHELOR DEGREE',
            Degree: 'COMPUTER SCIENCE',
            DegreeDetails: 'During my time at Minnesota State University, I gained valuable insights and practical skills in computer science, enriching my understanding of programming languages and software development methodologies.',
            DegreeFrom: 'Minnesota State University',
            Date: '2022-2023'
        },
        {
            Flag: Germany,
            Program: 'Intensive German Course',
            Degree: 'Language Certificate B1',
            DegreeDetails: 'At Evolanguage School in Frankfurt, I have immersed myself in intensive German language studies, enhancing my proficiency and communication skills to navigate effectively in a German-speaking environment.',
            DegreeFrom: 'Evolanguage School',
            Date: '2023-2024'
        }
    ];

    const experienceList = [
        {
            Flag: MasterIsolation,
            Company: 'Master Isolation',
            Position: 'Software Engineer',
            Location: 'Casablanca, Morocco',
            Responsibilities: 'My experience at Master Isolation as a web developer provided me with hands-on experience collaborating within a team to develop an ecommerce website, honing my skills in coding, and project management in a real-world setting.',
            Date: '2021-2024'

        },
        {
            Flag: Netone,
            Company: 'Netone',
            Position: 'Frontend Developer',
            Location: 'Casablanca, Morocco',
            Responsibilities: 'During my tenure at NetOne as a frontend developer, I contributed to the development of various projects, sharpening my expertise in crafting user-friendly interfaces and enhancing my proficiency in frontend',
            Date: '2022-2023'

        },
        {
            Flag: Freelance,
            Company: 'Freelance',
            Position: 'Full Stack Developer',
            Location: 'World Wide',
            Responsibilities: 'Through my freelance work on platforms like Fiverr, I have cultivated a diverse skill set by tackling a range of projects, This experience has not only broadened my technical expertise but also refined my ability to deliver',
            Date: '2018-2024'

        }
    ];

    return(
        <section id='resume'>
            <Title
                Title='My'
                SpanTitle='Resume'
                Description='My parkour'
            />
            <div className="resume-main-container">
                <div className="resume">
                    <div className="resume-subtitle">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="bi bi-mortarboard-fill" 
                            viewBox="0 0 16 16"
                        >
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                        </svg>
                        <h1>Education</h1>
                    </div>

                    <div className="resume-list">
                        {educationList.map((edu, index) => (
                            <Resume 
                                key={index}
                                Flag={edu.Flag} 
                                Program={edu.Program} 
                                Degree={edu.Degree} 
                                DegreeDetails={edu.DegreeDetails} 
                                DegreeFrom={edu.DegreeFrom} 
                                Date={edu.Date}
                            />
                        ))}
                    </div>
                </div>
                <div className="resume">
                    <div className="resume-subtitle">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="bi bi-briefcase" 
                            viewBox="0 0 16 16"
                        >
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        <h1>Experience</h1>
                    </div>

                    <div className="resume-list">
                        {experienceList.map((exp, index) => (
                            <Resume 
                                key={index}
                                Flag={exp.Flag} 
                                Program={exp.Company} 
                                Degree={exp.Position} 
                                DegreeDetails={exp.Responsibilities} 
                                DegreeFrom={exp.Location} 
                                Date={exp.Date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}