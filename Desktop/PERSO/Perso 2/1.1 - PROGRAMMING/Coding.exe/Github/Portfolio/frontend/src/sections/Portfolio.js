import { Portfolio } from '../components/Sections/Portfolio/Portfolio';

export const PortfolioSection = () =>{
    return(
        <section>
            <div class="section__title_div Title">
                <h1 class="section__title">MY <span class="span__title">PORTFOLIO</span></h1>
                <h6 class="section__title_description">Most recent work</h6>
            </div>
            <Portfolio/>
        </section>
    );
};