import React, { useState, useEffect } from 'react';
import './TakeMeUp.scss';

export const TakeMeUp = () => {
    const [visible, setVisible] = useState(false);
    
    const handleScroll = () => {
        if (window.scrollY > 500) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleTakeMeUp = () => {
        window.scrollTo(0, 0);
    }
    return(
        <>
            {visible && (
                <button 
                    className='take-me-up'
                    onClick={handleTakeMeUp}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-arrow-up-short" 
                        viewBox="0 0 16 16"
                    >
                        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                    </svg>
                </button>
            )}
        </>
    )
}
