import { Skills } from '../../components/Sections/Skills/Skills';
import HTML from '../../assets/icons/coding/frontend/html.png';
import CSS from '../../assets/icons/coding/frontend/css.png';
import JS from '../../assets/icons/coding/frontend/js.png';
import REACT from '../../assets/icons/coding/frontend/react.png';
import NODE from '../../assets/icons/coding/backend/nodejs.png';
import MYSQL from '../../assets/icons/coding/backend/mysql.png';
import PYTHON from '../../assets/icons/coding/backend/python.png';
import EXPRESS from '../../assets/icons/coding/backend/nodejs.png';
import GIT from '../../assets/icons/coding/versioncontrol/git.png';
import GITHUB from '../../assets/icons/coding/versioncontrol/github.png';
import English from '../../assets/icons/flags/English.png';
import Freanch from '../../assets/icons/flags/Frensch.png';
import German from '../../assets/icons/flags/German.png';
import Arabic from '../../assets/icons/flags/Arabic.png';

export const SkillSection = () =>{
    return(
        <section id='skills'>
            <div class="section__title_div Title">
                <h1 class="section__title">My <span class="span__title">Skills</span></h1>
            </div>
            <div class="skills-list__container section-content">
                <Skills Title='FRONTEND' 
                    Icon1={HTML} Name1='HTML' Level1='95' 
                    Icon2={CSS} Name2='CSS3/SCSS' Level2='90' 
                    Icon3={JS} Name3='JavaScript/TypeScript' Level3='80' 
                    Icon4={REACT} Name4='ReactJS/NextJS' Level4='75' 
                />
                <Skills Title='BACKEND' 
                    Icon1={NODE} Name1='NodeJS/ExpressJS' Level1='75' 
                    Icon2={PYTHON} Name2='Python/Django' Level2='60' 
                    Icon3={PYTHON} Name3='C' Level3='90' 
                    Icon4={MYSQL} Name4='MySQL' Level4='65' 
                />
                <Skills Title='VC' 
                    Icon1={GIT} Name1='GIT' Level1='95' 
                    Icon2={GITHUB} Name2='GITHUB' Level2='90' 
                    Icon3={GIT} Name3='VERSE' Level3='80' 
                    Icon4={GITHUB} Name4='UNREAL ENGINE' Level4='75' 
                />
                <Skills Title='LANGUAGES' 
                    Icon1={English} Name1='ENGLISH' Level1='95' 
                    Icon2={Freanch} Name2='FRENCH' Level2='80' 
                    Icon3={German} Name3='GERMAN' Level3='40' 
                    Icon4={Arabic} Name4='ARABIC' Level4='100'
                />
            </div>
        </section>
    );
};

