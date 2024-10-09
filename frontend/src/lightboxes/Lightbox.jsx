import React, { useState } from 'react';
import './Lightbox.scss';

export const Lightbox = ({Title}) => {
    const [close, setClose] = useState(true);
    const handleClose = () =>{
        setClose(!close);
    }
    return (
        <>
            {close &&
                <div className='Main-Lightbox Flex-Center'>
                    <div className='Lightbox Secondary-BG'>
                        <div className='Lightbox-Content'>
                            <div className='Header'>
                                <div className='Header-Content Flex-Center'>
                                    <div className='Title Flex-Center'>
                                        <span>{Title}</span>
                                    </div>
                                    <div className='Close-Btn' onClick={handleClose}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className='Body Flex-Center'>
                                <div className='Body-Content'>
                                    <div className='List Flex-Center'>
                                        <LightboxContent Content='Use ReactJS to develop UI interfaces.'/>
                                        <LightboxContent Content='Use ReactJS to develop UI interfaces.'/>
                                        <LightboxContent Content='Use ReactJS to develop UI interfaces.'/>
                                        <LightboxContent Content='Use ReactJS to develop UI interfaces.'/>
                                        <LightboxContent Content='Use ReactJS to develop UI interfaces.'/>
                                        <LightboxContent Content='Use ReactJS to develop UI interfaces.'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
const LightboxContent = ({Content}) =>{
    return(
        <div className='LightboxContent Flex-Center'>
            <div className='Content Flex-Center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path></svg>
                <span>{Content}</span>
            </div>
        </div>
    )
}