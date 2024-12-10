import React, { useState } from 'react';
import { Lightbox } from '../../../lightboxes/Lightbox';
import './Services.scss';

export const Services = ({Icon, Title, Description}) =>{
    const [open, setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(!open);
    }
    return(
        <>
            <div className="Service service Secondary-BG" onClick={handleOpen}>
                <Icon/>
                <h1>{Title}</h1>
                <button>
                    <span>View More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>
                </button>
            </div>
            {open &&
                <Lightbox Title={Title} Description={Description}/>
            }
        </>
    );
};