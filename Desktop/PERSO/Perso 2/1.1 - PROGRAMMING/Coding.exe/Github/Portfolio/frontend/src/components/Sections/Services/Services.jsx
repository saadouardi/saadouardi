import React, { useState } from 'react';
import { Lightbox } from '../../../lightboxes/Lightbox';
import './Services.scss';

export const Services = ({Icon, Title}) =>{
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(!open);
    }
    return(
        <>
            <div class="Service service Secondary-BG" onClick={handleOpen}>
                <Icon/>
                <h1>{Title}</h1>
                <div class="view-more__container">
                    <button>
                        View More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>
                    </button>
                </div>
            </div>
            {open &&
                <Lightbox Title={Title}/>
            }
        </>
    );
};