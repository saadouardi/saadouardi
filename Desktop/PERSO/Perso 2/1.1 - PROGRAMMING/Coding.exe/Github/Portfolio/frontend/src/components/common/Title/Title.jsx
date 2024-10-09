import './Title.scss';

export const Title = (Title,SpanTitle,Description)=>{
    return(
        <>
            <div class="Title Primary-Padding">
                <h1 class="section__title">{Title} <span class="span__title">{SpanTitle}</span></h1>
                <h6 class="section__title_description">{Description}</h6>
            </div>
        </>
    );
}