import React from 'react';
import './Logo.scss';

export const Logo = ({onClick}) => {
    return (
        <div 
            className="logo"
        >
            <span 
                href="#main" 
                onClick={onClick}
            >
                Saad Ouardi
            </span>
        </div>
    )
}