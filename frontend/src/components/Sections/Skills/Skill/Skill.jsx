import './Skill.scss';

export const Skill = ({Icon, Name, Level}) => {
    const progressionBarStyle = {width: `${Level}%`}
    
    return (
        <>
            <div className="main-skill-container">
                <div className="skill-img">
                    <img 
                        src={Icon} 
                        alt=""
                    />
                </div>
                <div className="skill-container-content">
                    <div className="skill-container">
                        <h3>{Name}</h3>
                        <h3>{Level}%</h3>
                    </div>
                    <div className="progression-bar-container">
                        <div className="progression-bar-content">
                            <div className="progression-bar-value" style={progressionBarStyle}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}