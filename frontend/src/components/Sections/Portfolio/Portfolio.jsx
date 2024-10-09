import { useEffect, useState } from 'react';
import IMG1 from '../../../assets/images/Projects/MI-logo.jpg';
import IMG2 from '../../../assets/images/Projects/dashboard-logo.png';
import IMG3 from '../../../assets/images/Projects/restaurant-logo.png';
import IMG4 from '../../../assets/images/Projects/todolist.png';
import IMG5 from '../../../assets/images/Projects/calculator-logo.png';
import IMG6 from '../../../assets/images/Projects/form-logo.png';
import './Portfolio.scss';

export const Portfolio = () => {
    const Projects = [
        {Image: IMG1, Name: 'Master Isolation', Description: 'Descr 1', Link:'Link 1'},
        {Image: IMG2, Name: 'Dashboard', Description: 'Descr 2', Link:'Link 2'},
        {Image: IMG3, Name: 'Restaurant', Description: 'Descr 3', Link:'Link 3'},
        {Image: IMG4, Name: 'ToDoList', Description: 'Descr 1', Link:'Link 1'},
        {Image: IMG5, Name: 'Calculator', Description: 'Descr 2', Link:'Link 2'},
        {Image: IMG6, Name: 'Form', Description: 'Descr 3', Link:'Link 3'},
    ]
    let [Index,SetIndex] = useState(0);
    const handleSliderNext = () =>{
        SetIndex(Index===Projects.length - 1? 0 : Index + 1);
    }
    const handleSliderBack = () =>{
        SetIndex(Index === 0 ? Projects.length - 1 : Index - 1 );
    }
    const handlePigination = (index) =>{
        SetIndex(index);
    }
    useEffect(() =>{
        const interval = setInterval(handleSliderNext, 5000);
        return () => clearInterval(interval);
    })
    return(
        <>
            <div className="section Portfolio">
                <div className="Slider">
                    <svg title='Previous' aria-label="Previous Slide" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi leftIcon" id="leftIcon" viewBox="0 0 16 16" onClick ={handleSliderBack}><path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/></svg>
                    <div className="portfolio__content" id="portfolio__content">
                        <img src={Projects[Index].Image} alt={Projects[Index].Name}/>
                        <div className="portfolio__details">
                            <h3>{Projects[Index].Name}</h3>
                            <p>{Projects[Index].Description}</p>
                            <a href={Projects[Index].Link} target='_blank' rel='noreferrer'>
                                <button title='Check now' className='check-now-btn'>                                   
                                    <span>Check now</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <svg title='Next' aria-label="Next Slide" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi rightIcon" id="rightIcon" viewBox="0 0 16 16" onClick ={handleSliderNext}><path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/></svg>
                </div>
                <div class="slider__circles">
                    {Projects.map((data, idx) => { 
                        return(
                        <div key={idx} className={idx === Index ? 'active-circle' : 'circle'} onClick={()=>{handlePigination(idx)}}></div>
                        )
                    })}
                </div>
            </div>
        </>
    ); 
};