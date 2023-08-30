import React from 'react';
import Carousel from "nuka-carousel";

import aws from './assets/AWS.png';
import azure from './assets/azure.png';
import jquery from './assets/jquery.png';
import react from './assets/react.png';

export default function FamiliarFrameworks() {
    return (
        <div className='containerText2'>

            <h2 id="languagesTitle">Familiar Frameworks and Platforms</h2>

            <Carousel autoplay wrapAround withoutControls slideWidth="20%" speed={15000} autoplayInterval={2500} scrollMode='remainder'>
                <img src={aws} alt="aws" className="carimg" />
                <img src={azure} alt="azure" className="carimg" />
                <img src={jquery} alt="jquery" className="carimg" />
                <img src={react} alt="react" className="carimg" />
            </Carousel>

        </div>
    );
}