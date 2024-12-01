import { useState ,useEffect } from 'react';
import { Logo } from './Logo/Logo';
import { Navbar } from './Navbar/Navbar';
import ProfileImage from '../../../assets/images/Profile/profile.png';
import './Header.scss';

export const Header = () => {
    const [BrightMode, setBrightMode] = useState(true);
    const [MobileMenu, setMobileMenu] = useState(false);

    const handleToogleMode = () =>{
        setBrightMode(!BrightMode);
    }

    const handleMobileMenu = () =>{
        setMobileMenu(!MobileMenu)
    }

    const handleTakeMeUp = () =>{
        window.scrollTo(0, 0);
    }

    useEffect(()=>{
        const sections = document.querySelectorAll('section.main-section');
        const Elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, svg, input, textarea');
        const MainSections = document.querySelectorAll('header, footer, .Secondary-BG');
        
        if(!BrightMode){

            MainSections.forEach(mainSection =>{
                mainSection.style.backgroundColor='var(--dark-secondary-bg)';
            })
            
            document.querySelector('main, body').style.background = 'var(--dark-primary-bg)';
            
            sections.forEach(section =>{
                section.style.backgroundColor = 'rgb(23, 23, 23)';
            })

            Elements.forEach(element =>{
                element.style.color = 'var(--dark-text-color)';
            })

        }else{
            document.querySelector('main, body').style.backgroundColor = 'var(--secondary-bg)';

            MainSections.forEach(mainSection =>{
                mainSection.style.backgroundColor='var(--primary-bg)';
            })

            sections.forEach(section =>{
                section.style.backgroundColor = '#f4f3f3';
            })

            Elements.forEach(element =>{
                element.style.color = 'var(--primary-text-color)';
            })
        }
    }, [BrightMode]);

    window.addEventListener('scroll', () => {
        if(!BrightMode){
            if(window.scrollY > 0){
                document.querySelector('header').style.backgroundColor = '#31363F';
                document.querySelector('header').style.boxShadow = '.1px .1px 2px white';
                document.querySelector('header').style.borderBottom = '1px solid grey';
                document.querySelector('header').style.opacity = '0.5px';
            }else{
                document.querySelector('header').style.backgroundColor = 'transparent';
                document.querySelector('header').style.boxShadow = '';
                document.querySelector('header').style.border = '';
            }
        }else{
            if(window.scrollY > 0){
                document.querySelector('header').style.backgroundColor = 'var(--primary-bg)';
                document.querySelector('header').style.boxShadow = '.1px .1px 2px black';
                document.querySelector('header').style.borderBottom = '1px solid grey';
                document.querySelector('header').style.opacity = '0.5px';
            }else{
                document.querySelector('header').style.backgroundColor = 'transparent';
                document.querySelector('header').style.boxShadow = '';
                document.querySelector('header').style.border = '';
            }
        }
    })

    return(
        <>
            <header>
                <div className="header-content">
                    <div className='logo-navbar-container'>
                        <Logo   handleTakeMeUp={handleTakeMeUp}  />
                        <Navbar   handleTakeMeUp={handleTakeMeUp}  />
                    </div>
                    <div className='buttons-container flex-center-center'>
                        {BrightMode? (
                            <button title='Switch to Dark Mode' onClick={handleToogleMode} className='toggle-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" id="DarkBtn" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/></svg>
                            </button>
                        ):(
                            <button title='Switch to Bright Mode' onClick={handleToogleMode} className='toggle-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" id="BrightBtn" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>
                            </button>
                        )}
                        {/* <a href="#contact">
                            <button className='contact-me'>Contact Me</button>
                        </a> */}
                        <a href="./" download="Resume.pdf">
                            <button>Download CV</button>
                        </a>
                    </div>
                    
                    <div className="mobile-navbar">
                        { !MobileMenu &&
                            <button onClick={handleMobileMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" id="open-navbar" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
                            </button>
                        }
                        { MobileMenu &&
                            <>
                                <button onClick={handleMobileMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
                                </button>
                                <div className="navbar" id="mobile-navbar">
                                    <div className="mobile-list_navbar">
                                        <a href='#main' className='profile' onClick={ () => {handleMobileMenu(); handleTakeMeUp() }}>
                                            <img src={ProfileImage} alt="" />
                                            <span>Saad Ouardi</span>
                                        </a>
                                        <a href="#main" onClick={ () => {handleMobileMenu(); handleTakeMeUp() }}>HOME</a>
                                        <a href="#about" onClick={handleMobileMenu}>ABOUT</a>
                                        <a href="#skills" onClick={handleMobileMenu}>SKILLS</a>
                                        <a href="#services" onClick={handleMobileMenu}>SERVICES</a>
                                        <a href="#resume" onClick={handleMobileMenu}>RESUME</a>
                                        <a href="#portfolio" onClick={handleMobileMenu}>PORTFOLIO</a>
                                        <a href="#contact" onClick={handleMobileMenu}>CONTACT ME</a>
                                        <a href='#bright-mode' onClick={handleToogleMode}>
                                            {!BrightMode &&
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" id="DarkBtn" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/></svg>
                                            }
                                            {BrightMode &&
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" id="BrightBtn" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>
                                            }
                                        </a>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </header>
        </>
    )
}