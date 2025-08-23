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
        Program: 'High School Degree',
        Degree: 'Mathematical Sciences A',
        DegreeDetails:
        'Completed secondary education in Morocco with a focus on Mathematical Sciences, developing strong analytical and problem-solving skills. This foundation sparked my interest in computer science and prepared me for further studies in technology.',
        DegreeFrom: 'Ibnou Chohaid Qualification',
        Date: '2018 - 2021'
    },
    {
        Flag: USA,
        Program: 'Bachelor Studies',
        Degree: 'Computer Science',
        DegreeDetails:
        'Studied Computer Science at Minnesota State University for two semesters, gaining hands-on practice in programming, algorithms, and software design. The international setting strengthened my technical skills and adaptability.',
        DegreeFrom: 'Minnesota State University, Mankato',
        Date: '2022 - 2023'
    },
    {
        Flag: Germany,
        Program: 'German Language Studies',
        Degree: 'TELC B1 Certificate',
        DegreeDetails: 'Completed an intensive German course at Evolanguage School in Frankfurt, achieving the TELC B1 Certificate. This training improved my communication and enables effective integration in German academic and professional settings.',
        DegreeFrom: 'Evolanguage School, Frankfurt',
        Date: '2023 - 2024'
    }
    ];

    const experienceList = [
        {
            Flag: MasterIsolation,
            Company: 'Master Isolation',
            Position: 'Software Engineer',
            Location: 'Casablanca, Morocco',
            Responsibilities: 'Developed the company’s official website (www.masterisolation.com) from end to end, including frontend, backend, database design, and hosting. Collaborated with management to translate business requirements into scalable digital solutions.',
            Date: '2021 - 2024'
        },
        {
            Flag: Netone,
            Company: 'NetOne',
            Position: 'Frontend Developer',
            Location: 'Casablanca, Morocco',
            Responsibilities: 'Contributed to multiple client projects by building modern, user-friendly interfaces with React and Tailwind. Improved website performance and accessibility while working closely with designers and backend developers.',
            Date: '2022 - 2023'
        },
        {
            Flag: Freelance,
            Company: 'Freelance',
            Position: 'Full Stack Developer',
            Location: 'Worldwide',
            Responsibilities: 'Delivered diverse freelance projects on platforms like Fiverr, covering both frontend and backend development. Strengthened my technical expertise and client communication skills while consistently meeting deadlines and project goals.',
            Date: '2018 - 2024'
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