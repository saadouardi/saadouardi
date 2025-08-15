import React, { useState, useEffect, useMemo } from 'react';
import ProfileFrontend from '../../../assets/images/main/profile-frontend.png';
import { Logo } from './Logo/Logo';
import { Navbar } from './Navbar/Navbar';
import './Header.scss';

export const Header = () => {
    const [mode, setMode] = useState('bright');
    const [activeNavbarItem, setActiveNavItem] = useState(0);
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
    const socialMediaList = [
        {
            icon: <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="bi bi-linkedin"
                >
                    <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                </svg>,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/saad-ouardi/',
        },
        {
            icon: <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="bi bi-github"
                >
                    <path d="M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315 12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z"></path>
                </svg>,
            name: 'GitHub',
            url: 'https://github.com/saadouardi',
        },
        {
            icon: <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="bi bi-instagram"
                >
                    <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
                </svg>,
            name: 'Instagram',
            url: 'https://www.instagram.com/ouardi.saad/',
        },
    ]

    const navbarItems = useMemo(() => [
        "about", "skills", "services", "resume", "portfolio", "contact"
    ], []);

    const handleTakeMeUp = () => {
        window.scrollTo(0, 0);
        setIsMobileNavbarOpen(false);
    }

    const handleNavbarScroll = (index) => {
        setActiveNavItem(index);
        if (index === 0) {
            handleTakeMeUp();
        }
        // Scroll to the corresponding section
        const section = document.getElementById(navbarItems[index]);
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMobileNavbarOpen(false);
    };

    const handleMode = () => {
        setMode(mode === 'bright' ? 'dark' : 'bright');
    }

    const handleMobileNavbarToggle = () => {
        setIsMobileNavbarOpen(!isMobileNavbarOpen);
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
                            className='cv-link'
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
                                    <button 
                                        onClick={handleMobileNavbarToggle}
                                    >
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
                                        <button 
                                            onClick={handleMobileNavbarToggle}
                                        >
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
                            {isMobileNavbarOpen && (
                                <div className='dropdown-menu-content'>
                                    <ul className='d-flex flex-column gap-2 p-0 align-items-start justify-content-center'>
                                        <li 
                                            className='d-flex align-items-center justify-content-center gap-2 w-100 rounded-2 border-2 border'
                                            onClick={handleTakeMeUp}    
                                        >
                                            <img 
                                                src={ProfileFrontend}
                                                alt=""
                                                className='profile-image'
                                            />
                                            <span className=''>Saad Ouardi</span>
                                        </li>
                                        {navbarItems.map((navItem, index) => (
                                            <li 
                                                className='navbar-list w-100 p-2 border-2 rounded-2' 
                                                key={index}
                                                onClick={ () => handleNavbarScroll(index)}
                                            >
                                                <a 
                                                    key={index}
                                                    href={`#${navItem.toLowerCase()}`}
                                                    className={`text-dark ${activeNavbarItem === index ? '' : ''}`}
                                                    
                                                >
                                                    {navItem}
                                                </a>
                                            </li>
                                        ))}
                                        <li className='bg-primary d-flex align-items-center justify-content-center gap-2 w-100 rounded-2'>
                                            <a 
                                                href="./" 
                                                download="Resume.pdf"
                                                title='Download CV'
                                                className='cv-link-mobile  w-100'
                                            >
                                                <button className='cv-btn-mobile rounded-1 w-100'>
                                                    <span>Download CV</span>
                                                </button>
                                            </a>
                                        </li>
                                        <li className='w-100'>
                                            <ul className='d-flex align-items-center justify-content-center gap-2 p-0 '>
                                                {socialMediaList.map((media, index) => (
                                                    <li key={index}>
                                                        <a 
                                                            href={media.url} 
                                                            target="_blank" 
                                                            rel="noreferrer"
                                                        >
                                                            <button>
                                                                {media.icon}
                                                            </button>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className='d-flex align-items-center justify-content-center gap-2 w-100 rounded-2'>
                                            <button 
                                                title={`Switch to ${mode === 'bright' ? 'Dark' : 'Bright'} Mode`} 
                                                onClick={handleMode} 
                                                className='toggle-btn-mobile'
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
                                        </li>
                                        <li>
                                            <p className='text-light text-center'>&copy; {new Date().getFullYear()} Powered by Saad Ouardi | All Rights Reserved.</p>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}