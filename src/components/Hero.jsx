import React from 'react';
import heroImg from '../images/heroImg.png';

function Hero() {
    return (
        <section className='hero'>
            <img src={heroImg} className='hero--img' />
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--content'>Join unique interactive activities led by one-of-kind hosts-all without leaving home.</p>
        </section>
    );
}
export default Hero;
