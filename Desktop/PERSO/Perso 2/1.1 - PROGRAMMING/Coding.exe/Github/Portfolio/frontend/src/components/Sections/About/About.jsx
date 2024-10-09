import './About.scss';
import Profile from '../../../assets/images/Profile/default-image.jpg';

export const About = () =>{
    return(
        <>
            <div class="About section__title_div">
                    <div className='Title'>
                        <h1 class="section__title">About <span class="span__title">Me</span></h1>
                    </div>
                    
                    <div class="sides Flex-Center">
                        <div class="left-side Flex-Center">
                            <img src={Profile} alt=""/>
                        </div>

                        <div class="right-side about-text__container">
                            <div class="Description bio__container">
                                <h3>Passionate Frontend Developer & Innovative Computer Science Student</h3>
                                <h5>
                                    👨‍💻 Proactive computer science student with a knack for creativity and innovation, currently pursuing studies at Minnesota State University.<br/><br/>
                                    🎓 Completed one year of intensive coursework in computer science, gaining valuable insights into frontend development and laying a strong foundation for future endeavors.<br/><br/>
                                    💼 Eager to embark on a career as a computer programmer in the information technology sector, leveraging my academic knowledge and prior experiences to contribute effectively to innovative projects.<br/><br/>
                                    🚀 Committed to continuous learning and growth, I am excited to apply my skills and enthusiasm to drive impactful solutions in a dynamic professional environment.<br/><br/>
                                    🚀 Committed to continuous learning and growth, I am excited to apply my skills and enthusiasm to drive impactful solutions in a dynamic professional environment.<br/><br/>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <h3>Let's connect and explore opportunities to collaborate and innovate!</h3>

                    <div class="Experiences">
                        <div class="Experience Secondary-BG">
                            <h3>03+</h3>
                            <h6>Years experience</h6>
                        </div>

                        <div class="Experience Secondary-BG">
                            <h3>20+</h3>
                            <h6>Completed project</h6>
                        </div>

                        <div class="Experience Secondary-BG">
                            <h3>03+</h3>
                            <h6>Companies worked</h6>
                        </div>
                    </div>
            </div>
        </>
    )
}