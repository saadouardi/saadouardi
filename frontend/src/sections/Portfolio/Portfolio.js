import { useEffect, useState } from 'react';
import IMG1 from '../../assets/images/Projects/MI-logo.jpg';
import IMG2 from '../../assets/images/Projects/dashboard-logo.png';
import IMG3 from '../../assets/images/Projects/restaurant-logo.png';
import IMG4 from '../../assets/images/Projects/todolist.png';
import IMG5 from '../../assets/images/Projects/calculator-logo.png';
import IMG6 from '../../assets/images/Projects/form-logo.png';
import './Portfolio.scss';

export const Portfolio = () => {
    const projectsList = [
        {image: IMG1, name: 'Master Isolation', description: 'Descr 1', link:'Link 1'},
        {image: IMG2, name: 'Dashboard', description: 'Descr 2', link:'Link 2'},
        {image: IMG3, name: 'Restaurant', description: 'Descr 3', link:'Link 3'},
        {image: IMG4, name: 'ToDoList', description: 'Descr 1', link:'Link 1'},
        {image: IMG5, name: 'Calculator', description: 'Descr 2', link:'Link 2'},
        {image: IMG6, name: 'Form', description: 'Descr 3', link:'Link 3'},
    ]

    let [index, setIndex] = useState(0);

    const handleSliderNext = () =>{
        setIndex(index === projectsList.length - 1 ? 0 : index + 1);
    }

    const handleSliderBack = () => {
        setIndex(index === 0 ? projectsList.length - 1 : index - 1 );
    }

    const handlePagination = (index) => {
        setIndex(index);
    }

    useEffect(() =>{
        const interval = setInterval(handleSliderNext, 5000);
        return () => clearInterval(interval);
    })
    return(
        <section id='portfolio'>
            <div className="section__title_div Title">
                <h1 className="section__title">MY <span className="span__title">PORTFOLIO</span></h1>
                <h6 className="section__title_description">Most recent work</h6>
            </div>
            <div 
                className="slider-section section w-100"
                style={{
                    backgroundImage: `url(${projectsList[index].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="Slider">
                    <svg 
                        title='Previous' 
                        aria-label="Previous Slide" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi leftIcon" 
                        id="leftIcon" 
                        viewBox="0 0 16 16" 
                        onClick ={handleSliderBack}
                    >
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                    </svg>
                    <div className="portfolio__content">
                        <img 
                            src={projectsList[index].image} 
                            alt={projectsList[index].name}
                        />
                        <div className="portfolio__details">
                            <h3>{projectsList[index].name}</h3>
                            <p>{projectsList[index].description}</p>
                            <a 
                                href={projectsList[index].link} 
                                target='_blank' 
                                rel='noreferrer'
                            >
                                <button 
                                    title='Check now' 
                                    className='check-now-btn'
                                >                                   
                                    <span>Check now</span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="currentColor" 
                                        className="bi bi-arrow-right-short" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <svg 
                        title='Next' 
                        aria-label="Next Slide" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi rightIcon" 
                        id="rightIcon" 
                        viewBox="0 0 16 16" 
                        onClick ={handleSliderNext}
                    >
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                    </svg>
                </div>
                <div className="slider-pagination">
                    {projectsList.map((_, idx) => { 
                        return(
                            <div 
                                key={idx} 
                                className={idx === index ? 'active-circle' : 'default-pagination'}
                                onClick={() => {handlePagination(idx)}}
                            >
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};