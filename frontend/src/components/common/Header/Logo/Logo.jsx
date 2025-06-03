import React from 'react';
import './Logo.scss';

export const Logo = ({handleTakeMeUp}) => {
    return (
        <div 
            className="Logo"
        >
            <span href="#main" onClick={handleTakeMeUp}>Saad Ouardi</span>
        </div>
    )
}