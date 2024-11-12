import Profile from '../../assets/images/Profile/profile.png';
import './About.scss';

export const About = () => {
    return(
        <>
            <section className='about' id='about'>
                <div className="about-section section__title_div section-content">
                    <div className='Title'>
                        <h1 class="section__title">About <span class="span__title">Me</span></h1>
                    </div>
                    <h5>
                        Dedicated and innovative computer science student from Minnesota State University, blending creativity and
                        technical proficiency in web development. With over three years of experience across three companies, I
                        have honed expertise in frontend and backend development. I have successfully led projects and integrated
                        advanced features such as online payments and admin dashboards.
                        Proficient in React.js for frontend development, Express.js for backend, MySQL for database management, and
                        Git and GitHub for efficient code management. Eager to leverage my skills in a dynamic IT role, committed to continuous learning, and contributing
                        effectively to team success.
                    </h5>
                    <div class="experiences">
                        <div class="experience">
                            <h3>03+</h3>
                            <h6>Years experience</h6>
                        </div>
                        <div class="experience">
                            <h3>20+</h3>
                            <h6>Completed project</h6>
                        </div>
                        <div class="experience">
                            <h3>03+</h3>
                            <h6>Companies worked</h6>
                        </div>
                    </div>
                    {/* <div class="image-container">
                        <img src={Profile} alt=""/>
                    </div> */}
                </div> 
            </section>
        </>
    )
}