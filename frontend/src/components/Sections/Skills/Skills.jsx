import {Skill} from './Skill/Skill';
import HTML from '../../../assets/icons/coding/frontend/html.png';
import CSS from '../../../assets/icons/coding/frontend/css.png';
import JS from '../../../assets/icons/coding/frontend/js-ts.jpg';
import REACT from '../../../assets/icons/coding/frontend/react-next.png';
import CSSFRAMEWORK from '../../../assets/icons/coding/frontend/bootstrap-&-tailwind.png';

import EXPRESS from '../../../assets/icons/coding/backend/express.webp';
import DJANGO from '../../../assets/icons/coding/backend/django.png';
import FASTAPI from '../../../assets/icons/coding/backend/fastapi.png';
import POSTGRESQL from '../../../assets/icons/coding/backend/postgresql.png';
import MONGODB from '../../../assets/icons/coding/backend/mongodb.png';

import GIT from '../../../assets/icons/coding/versioncontrol/git.png';
import GITHUB from '../../../assets/icons/coding/versioncontrol/github.png';
import AZURE from '../../../assets/icons/coding/versioncontrol/azure.png';
import DOCKER from '../../../assets/icons/coding/versioncontrol/docker.png';

import English from '../../../assets/icons/flags/English.png';
import Freanch from '../../../assets/icons/flags/Frensch.png';
import German from '../../../assets/icons/flags/German.png';
import Arabic from '../../../assets/icons/flags/Arabic.png';
import './Skills.scss';

export const Skills = () => {
    const skillsList = [
        {title: 'Frontend', icon:'', skills: [
            { Icon: HTML, Name: 'HTML', Level: '95' },
            { Icon: CSS, Name: 'CSS3 & SCSS', Level: '90' },
            { Icon: CSSFRAMEWORK, Name: 'Bootstrap & Tailwind', Level: '90' },
            { Icon: JS, Name: 'JavaScript & TypeScript', Level: '80' },
            { Icon: REACT, Name: 'ReactJS & NextJS', Level: '85' },
        ]},
        {title: 'Backend', icon:'', skills: [
            { Icon: EXPRESS, Name: 'Express.js', Level: '75' },
            { Icon: DJANGO, Name: 'Django', Level: '80' },
            { Icon: FASTAPI, Name: 'FASTAPI', Level: '90' },
            { Icon: POSTGRESQL, Name: 'PostgreSQL', Level: '90' },
            { Icon: MONGODB, Name: 'MongoDB', Level: '75' }
        ]},
        {title: 'DevOps & Cloud', icon:'', skills: [
            { Icon: GITHUB, Name: 'GitHub & GitLub', Level: '95' },
            { Icon: GIT, Name: 'Git', Level: '80' },
            { Icon: AZURE, Name: 'AZURE & AWS', Level: '60' },
            { Icon: DOCKER, Name: 'Docker', Level: '50'}
        ]},
        {title: 'Languages', icon:'', skills: [
            { Icon: English, Name: 'English', Level: '95' },
            { Icon: Freanch, Name: 'French', Level: '85' },
            { Icon: German, Name: 'German', Level: '70' },
            { Icon: Arabic, Name: 'Arabic', Level: '100'}
        ]},
    ]

    return (
        <>
            {skillsList.map((skill, index) => (
                <div 
                    className="skill-content__container"
                    key={index}
                >
                    <h1>{skill.title}</h1>
                    <div className="skills Secondary-BG">
                        {skill.skills.map((skillItem, idx) => (
                            <Skill 
                                key={idx} 
                                Icon={skillItem.Icon} 
                                Name={skillItem.Name} 
                                Level={skillItem.Level} 
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

