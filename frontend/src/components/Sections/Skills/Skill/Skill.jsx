import './Skill.scss';
export const Skill = ({Icon,Name,Level})=>{
    const progressionBarStyle = {
        width: `${Level}%`
    }
    return(
        <>
            <div class="main-skill__container">
                <div class="skill__img">
                    <img src={Icon} alt=""/>
                </div>

                <div class="main-skill___container">
                    <div class="skill__container">
                        <h3>{Name}</h3>
                        <h3>{Level}%</h3>
                    </div>

                    <div class="skill-progression-bar__container">
                        <div class="progression-bar__container">
                            <div class="progression-bar__value" style={progressionBarStyle}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}