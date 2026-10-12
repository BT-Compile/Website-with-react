import React from 'react';
import introimage from './assets/headshot.jpg';
import FadeInSection from './Fade';

export default function Intro() {
    return (
        <>
            <div className='containerTextIntro'>

                <h2>Hello</h2>
                <FadeInSection>
                    <img id='introimage' src={introimage} alt='intro image' />
                </FadeInSection>
                <hr />
                <div>
                    <p> 
                        Hello! My name is Ben and I am a software engineer and web developer.
                        I graduated as a Computer Information Systems major from James Madison University in 2023 and
                        have been coding professionally for three years. I am proficient in C#, .NET, SQL, and WPF applications.
                        I'm excited to have you here and share my passion with you. As a programmer, I believe that technology
                        has the power to change the world for the better, and I'm committed to using my skills to make a
                        positive impact in the world.
                    </p>
                </div>

            </div>
        </>
    );
}