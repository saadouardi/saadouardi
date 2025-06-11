import { useEffect, useState } from 'react';
import { Title } from '../../components/common/Title/Title';
import IMG1 from '../../assets/images/Projects/MI-logo.jpg';
import IMG2 from '../../assets/images/Projects/dashboard-logo.png';
import IMG3 from '../../assets/images/Projects/restaurant-logo.png';
import IMG4 from '../../assets/images/Projects/todolist.png';
import './Portfolio.scss';

export const Portfolio = () => {
    const projectsList = [
        {image: IMG1, name: 'Master Isolation', description: 'Master Isolation', link:'https://github.com/saadouardi/masterisolation'},
        {image: IMG2, name: 'Dashboard', description: 'Admin Dashboard', link:' https://github.com/saadouardi/admin-dashboard'},
        {image: IMG3, name: 'Restaurant', description: 'Freshbite Restaurant Website', link:'https://github.com/saadouardi/freshbite'},
        {image: IMG2, name: 'Nike', description: 'Nike e-commerce website', link:'https://saadouardi.github.io/nike/'},
        {image: IMG4, name: 'ToDoList', description: 'ToDoList', link:'https://saadouardi.github.io/checklist/'},
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
            <Title 
                Title='MY'
                SpanTitle='PORTFOLIO'
                Description='Most recent work'
            />
            <div 
                className="slider-section section w-100"
                style={{
                    backgroundColor: 'white',
                    // backgroundImage: `url(${projectsList[index].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="main-slider">
                    <div className="slide-content">
                        <img 
                            src={projectsList[index].image} 
                            alt={projectsList[index].name}
                        />
                        <div className="slide-details">
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
                    <button
                        title='Next'
                        aria-label="Next Slide"
                        onClick={handleSliderNext} 
                        className="slider-next-btn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="slider-next" 
                            viewBox="0 0 16 16"
                        >
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                        </svg>
                    </button>
                    <button
                        title='Previous'
                        aria-label="Previous Slide"
                        className="slider-back-btn" 
                    >
                        <svg
                            title='Previous'
                            aria-label="Previous Slide"
                            onClick={handleSliderBack}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="slider-back" 
                            viewBox="0 0 16 16"
                        >
                            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                        </svg>
                    </button>
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
            </div>
        </section>
    );
};