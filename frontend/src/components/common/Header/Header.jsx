import { useState ,useEffect } from 'react';
import { Logo } from './Logo/Logo';
import { Navbar } from './Navbar/Navbar';
import './Header.scss';

export const Header = () => {
    const [mode, setMode] = useState('bright');
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

    const handleMode = () => {
        setMode(mode === 'bright' ? 'dark' : 'bright');
    }

    const handleTakeMeUp = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        if(mode === 'bright') {
            localStorage.setItem("theme", "dark");

        } else {
            localStorage.setItem("theme", "bright");
        }
    })

    window.addEventListener('scroll', () => {
        if (!mode) {
            if (window.scrollY > 0) {
                document.querySelector('header').style.backgroundColor = '#31363F';
                document.querySelector('header').style.boxShadow = '.1px .1px 2px white';
                document.querySelector('header').style.borderBottom = '1px solid grey';
                document.querySelector('header').style.opacity = '0.5px';
            } else {
                document.querySelector('header').style.backgroundColor = 'transparent';
                document.querySelector('header').style.boxShadow = '';
                document.querySelector('header').style.border = '';
            }
        } else {
            if (window.scrollY > 0) {
                document.querySelector('header').style.backgroundColor = 'var(--primary-bg)';
                document.querySelector('header').style.boxShadow = '.1px .1px 2px black';
                document.querySelector('header').style.borderBottom = '1px solid grey';
                document.querySelector('header').style.opacity = '0.5px';
            } else {
                document.querySelector('header').style.backgroundColor = 'transparent';
                document.querySelector('header').style.boxShadow = '';
                document.querySelector('header').style.border = '';
            }
        }
    })

    return(
        <>
            <header id='home'>
                <div className="header-content">
                    <div className='logo-navbar-container'>
                        <Logo   handleTakeMeUp={handleTakeMeUp}  />
                        <Navbar   handleTakeMeUp={handleTakeMeUp}  />
                    </div>
                    <div className='buttons-container flex-center-center'>
                        <button 
                            title={`Switch to ${mode === 'bright' ? 'Dark' : 'Bright'} Mode`} 
                            onClick={handleMode} 
                            className='toggle-btn'
                        >
                            {mode === 'bright' ? (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor" 
                                    className="bi bi-moon" 
                                    id="DarkBtn" 
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                                </svg>
                            ) : (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor" 
                                    className="bi bi-brightness-high" 
                                    id="BrightBtn" 
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                                </svg>
                            )}
                        </button>
                        <a 
                            href="./" 
                            download="Resume.pdf"
                            title='Download CV'
                        >
                            <button className='cv-btn'>
                                <span>Download CV</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor" 
                                    className="bi bi-file-earmark-person-fill" 
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755"/>
                                </svg>
                            </button>
                            
                        </a>
                        <div className="mobile-navbar">
                            {!isMobileNavbarOpen ? (
                                <button>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="currentColor" 
                                        className="bi bi-list" 
                                        id="open-navbar" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                    </svg>
                                </button>
                                ):(
                                    <button>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="16" 
                                            height="16" 
                                            fill="currentColor" 
                                            className="bi bi-x" 
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}