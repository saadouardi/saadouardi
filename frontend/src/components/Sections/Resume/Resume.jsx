import './Resume.scss';

export const Resume = ({Flag,Program,Degree,DegreeDetails,DegreeFrom,Date}) =>{
    return(
        <>
            <div class="Resume Secondary-BG">
                <div class="resume-details__container">
                    
                    <div class="education__container">
                        <h5>
                            <img src={Flag} alt=""/>
                            <strong>{Program}</strong>
                        </h5>
                    </div> 

                    <div class="info__container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="info-btn"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z"></path></svg>
                    </div>
                </div>
                
                <div class="content">
                    <h5>{Degree}</h5>
                    <p>{DegreeDetails}</p>
                </div>

                <div class="date__container">
                    <span>{DegreeFrom}</span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z"></path></svg>
                        <span>{Date}</span>
                    </div>
                </div>
            </div>
        </>
    );
};




