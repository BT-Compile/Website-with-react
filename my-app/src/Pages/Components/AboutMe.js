import React from 'react';
import './App.css';
import art from './assets/art.jpg';
import usn from './assets/usn.jpg';
import hike from './assets/hike.jpg';
import FadeInSection from './Fade';

export default function AboutMe() {
    return (
        <>
            <br />
            <div>
                <FadeInSection>
                    <div className='containerTextAbout'>
                        <img src={art} alt="art" id='art'></img>
                        <h2>About me</h2>
                        <hr />
                        <p>
                            Hello! My name is Benjamin Trang and I am a fullstack software engineer and DevOps Engineer. I graduated from James
                            Madison University in the winter of 2023, completing my Bachelors in Computer Information Systems. I have
                            always been interested in computers. When I was 13 years old when I built my first computer, I then fell in love
                            with programming during my first year in college when I learned some simple Java and knew that is what I wanted to do.
                            I'm hoping to eventually help build a better world using my code in this exponentially growing age of technology.
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className='containerTextAbout'>
                        <img src={usn} alt="usn" id='usn'></img>
                        <h2>Esports</h2>
                        <hr />
                        <p>
                            After completing my associates degree and completing my transfer, I took a two year hiatus. I wanted to pursue a
                            personal passion of mine, which was to play video games professionally! As my family loves to remind me, I was born with the
                            'competitive gene'. From Counter Strike, Call of Duty, and Halo I grew up always around first person shooters. During my
                            first couple years in college I got noticed in the Tom Clancy's Rainbow Six: Siege community and a year later went
                            professional. I got to play online in Challenger and Professional leagues, as well as two LAN events in Dreamhack Austin 2018
                            and the United States Nationals in Las Vegas. As much as I loved the experience, it did not have a good work life balance.
                            Between practicing 6 days a week and constant travel, and I never had any free time for loved ones.
                            Toward the end of 2019, I decided to retire to finish college at JMU and spend more time with my friends and family.
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className='containerTextAbout'>
                        <img src={hike} alt="hike" id='hike'></img>
                        <h2>Other Hobbies</h2>
                        <hr />
                        <p>
                            I am one of two, first generation children of Cantonese immigrants and I grew up in my family's restaurant.
                            I have many interests and hobbies. I love cooking, art, gaming, bourbon, and music.
                            I love cooking and tasting food. I am always looking for an excuse to cook! Some of one of my additional hobbies I mentioned are
                            building keyboards, bourbon tasting, and going to see concerts.
                            Hopefully, a few of these resonate with you and definitely feel free to reach out to me if you want to chat about these topics!
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className='containerTextAbout'>
                        <div className='finalpara'>
                            <br />
                            <br />
                            <h2>The Purpose</h2>
                            <hr />
                            <p>
                                I created this website to get myself out there into the tech world. As I have stated before, I think that technology is the best way
                                to make a difference on our planet and society. My competitive spirit drives me to learn and create code efficiently. I eventually hope to make a
                                positive impact on the the world and hopefully work at a place that shares the same values as myself.
                            </p>
                        </div>
                        <h3 id='ty'>Thanks for reading</h3>
                    </div>
                </FadeInSection>
            </div>
        </>
    );
}

