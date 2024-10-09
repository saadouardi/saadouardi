import { useState ,useEffect } from 'react';
import './Header.scss';

export const Header = () => {
    const [BrightMode,setBrightMode] = useState(true);
    const [MobileMenu,setMobileMenu] = useState(false);

    const handleToogleMode = () =>{
        setBrightMode(!BrightMode);
    }
    useEffect(()=>{
        const Elements = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,svg,input,textarea');
        const MainSections = document.querySelectorAll('header,footer,.Secondary-BG');
        if(!BrightMode){
            MainSections.forEach(mainSection =>{
                mainSection.style.backgroundColor='#31363F';
            })
            // document.querySelector('header').style.backgroundColor = '#31363F';
            document.querySelector('main').style.background = '#222831';
            // document.querySelector('footer').style.backgroundColor = '#31363F';
            Elements.forEach(element =>{
                element.style.color = 'var(--primary-color-DM)';
            })

        }else{
            document.querySelector('main').style.backgroundColor = 'var(--backgroundColor-LM)';

            MainSections.forEach(mainSection =>{
                mainSection.style.backgroundColor='white';
            })

            Elements.forEach(element =>{
                element.style.color = 'var(--primary-color-LM)';
            })
        }
    },[BrightMode]);
    window.addEventListener('scroll',()=>{
        if(!BrightMode){
            if(window.scrollY > 0){
                document.querySelector('header').style.backgroundColor = '#31363F';
                document.querySelector('header').style.boxShadow = '.1px .1px 10px white';
                document.querySelector('header').style.borderBottom = '1px solid grey';
            }else{
                document.querySelector('header').style.backgroundColor = 'transparent';
                document.querySelector('header').style.boxShadow = '';
                document.querySelector('header').style.border = '';
            }
        }else{
            if(window.scrollY > 0){
                document.querySelector('header').style.backgroundColor = 'var(--primary-backgroundColor)';
                document.querySelector('header').style.boxShadow = '.1px .1px 10px black';
                document.querySelector('header').style.borderBottom = '1px solid grey';
            }else{
                document.querySelector('header').style.backgroundColor = 'transparent';
                document.querySelector('header').style.boxShadow = '';
                document.querySelector('header').style.border = '';
            }
        }
    })
    const handleMobileMenu = () =>{
        setMobileMenu(!MobileMenu)
    }
    const handleTakeMeUp = () =>{
        window.scrollTo(0, 0);
    }

    return(
        <>
            <header id='main'>
                <div class="header header__row1">
                    {/* <!-- MY NAME --> */}
                    <div className="Website">
                        <span class="website__name">Saad Ouardi</span>
                    </div>
    
                    {/* <!-- NAV BAR --> */}
                    <div class="navbar">
                        <a href="#main" onClick={handleTakeMeUp}>HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#skills">SKILLS</a>
                        <a href="#services">SERVICES</a>
                        <a href="#resume">RESUME</a>
                        <a href="#portfolio">PORTFOLIO</a>
                        <a href="#contact">CONTACT ME</a>
                        {BrightMode &&
                            <button onClick={handleToogleMode}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" id="DarkBtn" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/></svg>
                            </button>
                        }
                        {!BrightMode &&
                            <button onClick={handleToogleMode}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" id="BrightBtn" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>
                            </button>
                        }
                    </div>
                    
                    <div class="mobile__navbar">
                        {!MobileMenu && 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" id="open-navbar" viewBox="0 0 16 16" onClick={handleMobileMenu}><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
                        }
                        { MobileMenu &&
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi close-btn" id="close-btn" viewBox="0 0 16 16" onClick={handleMobileMenu}><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/></svg>
                                <div className="navbar" id="mobile-navbar">
                                    <div className="mobile-list_navbar">
                                        <a href="#main" onClick={handleTakeMeUp}>HOME</a>
                                        <a href="#about" onClick={handleMobileMenu}>ABOUT</a>
                                        <a href="#skills">SKILLS</a>
                                        <a href="#services">SERVICES</a>
                                        <a href="#resume">RESUME</a>
                                        <a href="#portfolio">PORTFOLIO</a>
                                        <a href="#contact">CONTACT ME</a>
                                        <a>
                                            {!BrightMode &&
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" id="DarkBtn" viewBox="0 0 16 16" onClick={handleToogleMode}><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/></svg>
                                            }
                                            {BrightMode &&
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" id="BrightBtn" viewBox="0 0 16 16" onClick={handleToogleMode}><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>
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