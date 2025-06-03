import React from 'react';
import { Title } from '../../components/common/Title/Title';
import { Skills } from '../../components/Sections/Skills/Skills';

export const SkillSection = () => {
    return(
        <section id='skills'>
            <Title 
                Title='My' 
                SpanTitle='Skills' 
                Description='What I can do'
            />
            <div className="skills-list__container section-content">
                <Skills/>
            </div>
        </section>
    );
};