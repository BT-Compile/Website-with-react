import React from 'react';
import Carousel from "nuka-carousel";
import js from './assets/js.png';
import java from './assets/java.png';
import html from './assets/HTML.png';
import sql from './assets/sql.png';
import css from './assets/css.png';
import CSharp from './assets/CSharp.png';
import FadeInSection from './Fade';

export default function FamiliarLanguages() {
    return (
        <>
            <FadeInSection>
                <h2 className="languagesTitle">Familiar Languages</h2>
                <hr />
                <Carousel autoplay wrapAround withoutControls slideWidth="20%" speed={15000} scrollMode='remainder'>
                    <img src={js} alt="javascript" className="carimg" />
                    <img src={java} alt="java" className="carimg" />
                    <img src={CSharp} alt="CSharp" className="carimg" />
                    <img src={html} alt="html" className="carimg" />
                    <img src={css} alt="css" className="carimg" />
                    <img src={sql} alt="sql" className="carimg" />
                </Carousel>
            </FadeInSection>
        </>
    );
}
