import React from 'react';
import './Experience.scss';

export const Experience = ({Title, Description}) => {
    return (
        <div class="experience">
            <h3>{Title}</h3>
            <h6>{Description}</h6>
        </div>
    )
}