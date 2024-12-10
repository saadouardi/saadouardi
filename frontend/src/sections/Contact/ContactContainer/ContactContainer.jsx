import './ContactContainer.scss';

export const ContactContainer = ({Action,Icon,Text}) =>{
    return(
        <a href={Action} className='ContactContainer'>
            <div className="contact">
                <div className="icon__container">
                    <Icon/>
                </div>
                <div className="contact__details">
                    <h5>{Text}</h5>
                </div>
            </div>
        </a>
    )
}