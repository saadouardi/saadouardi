import React from 'react';
import { Title } from '../../components/common/Title/Title';
import { Experience } from '../../components/Experience/Experience';
import './About.scss';

export const About = () => {
    return(
        <>
            <section className='about' id='about'>
                <div className="section-content">
                    <Title Title='About' SpanTitle='Me' Description='Get to know me'/>
                    <div>
                        <h5>
                            Dedicated and innovative computer science student from Minnesota State University, blending creativity and
                            technical proficiency in web development. With over three years of experience across three companies, I
                            have honed expertise in frontend and backend development. I have successfully led projects and integrated
                            advanced features such as online payments and admin dashboards.
                            Proficient in React.js for frontend development, Express.js for backend, MySQL for database management, and
                            Git and GitHub for efficient code management. Eager to leverage my skills in a dynamic IT role, committed to continuous learning, and contributing
                            effectively to team success.
                        </h5>
                    </div>
                    <div className="experiences">
                        <Experience Title='03+' Description='Years experience'/>
                        <Experience Title='20+' Description='Completed project'/>
                        <Experience Title='03+' Description='Companies worked'/>
                    </div>
                </div> 
            </section>
        </>
    )
}