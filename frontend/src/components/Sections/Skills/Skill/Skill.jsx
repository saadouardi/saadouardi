import './Skill.scss';
export const Skill = ({Icon,Name,Level})=>{
    const progressionBarStyle = {
        width: `${Level}%`
    }
    return(
        <>
            <div className="main-skill__container">
                <div className="skill__img">
                    <img src={Icon} alt=""/>
                </div>

                <div className="main-skill___container">
                    <div className="skill__container">
                        <h3>{Name}</h3>
                        <h3>{Level}%</h3>
                    </div>

                    <div className="skill-progression-bar__container">
                        <div className="progression-bar__container">
                            <div className="progression-bar__value" style={progressionBarStyle}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}