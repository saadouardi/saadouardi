import './ContactContainer.scss';

export const ContactContainer = ({Action,Icon,Text}) =>{
    return(
        <a href={Action} className='ContactContainer'>
            <div class="contact">
                <div class="icon__container">
                    <Icon/>
                </div>

                <div class="contact__details">
                    <h5>{Text}</h5>
                </div>
            </div>
        </a>
    )
}