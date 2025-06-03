import React, { useState, useEffect } from 'react';
import './Navbar.scss';

export const Navbar = ({handleTakeMeUp}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const navItems = ["home", "about", "skills", "services", "resume", "portfolio", "contact"];

    const handleClick = (index) => {
        setActiveIndex(index);
        if (index === 0) {
            handleTakeMeUp();
        }
        // Scroll to the corresponding section
        const section = document.getElementById(navItems[index]);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = navItems.indexOf(entry.target.id);
                    setActiveIndex(index);
                }
            });
        }, observerOptions);

        navItems.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            navItems.forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [navItems]);

    return (
        <div className="navbar">
            {navItems.map((navItem, index) => (
                <a 
                    key={index}
                    href={`#${navItem.toLowerCase()}`}
                    className={`${activeIndex === index ? 'active' : ''}`}
                    onClick={ () => handleClick(index)}
                >
                    {navItem}
                </a>
            ))}
        </div>
    )
}