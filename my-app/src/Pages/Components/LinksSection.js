import React from 'react';
import './App.css';
import githubImage from './assets/git.svg';
import email from './assets/email.svg';
import linkedin from './assets/link.svg';
import FadeInSection from './Fade';

export default function LinksSection() {
    return (
        <div>
            <FadeInSection>
                <h2 id='textalign'>Links</h2>
                <br />
                <div className='linkbox'>
                    <div className='linkcolumn'>
                        <a href='https://github.com/BT-Compile' target='_blank'>
                            <img id='github' src={githubImage} alt='github' />
                        </a>
                        <h3 id='textalign'>Github</h3>
                    </div>

                    <div className='linkcolumn'>
                        <a href='mailto:trangbenjamin@gmail.com?Subject=My%20Query'>
                            <img id='email' src={email} alt='email' />
                        </a>
                        <h3 id='textalign'>Email</h3>
                    </div>

                    <div className='linkcolumn'>
                        <a href='https://www.linkedin.com/in/benjamin-trang/' target='_blank'>
                            <img id='linkedin' src={linkedin} alt='linkedin' />
                        </a>
                        <h3 id='textalign'>Linkedin</h3>
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}
