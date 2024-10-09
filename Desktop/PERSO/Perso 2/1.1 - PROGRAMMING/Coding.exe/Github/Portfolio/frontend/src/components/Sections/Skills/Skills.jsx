import {Skill} from './Skill/Skill';
import './Skills.scss';

export const Skills = ({Title,Icon1,Name1,Level1,Icon2,Name2,Level2,Icon3,Name3,Level3,Icon4,Name4,Level4})=>{
    return(
        <>
            <div class="skill-content__container">
                <h1>{Title}</h1>
                <div class="skills Secondary-BG">
                    <Skill Icon={Icon1} Name={Name1} Level={Level1} />
                    <Skill Icon={Icon2} Name={Name2} Level={Level2} />
                    <Skill Icon={Icon3} Name={Name3} Level={Level3} />
                    <Skill Icon={Icon4} Name={Name4} Level={Level4} />
                </div>
            </div>
        </>
    )
}

