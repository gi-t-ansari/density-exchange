import React from 'react'
import "./Hero.css"
import hero from "../Assets/hero.png"

function Hero() {
  return (
    <div className='hero-container'>
        <h1 className='hero-heading'>It’s time to trade,<br />the <span>future.</span></h1>
        <p className='hero-paragraph'>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
        <div className='hero-img-container'>
            <img src={hero} alt='hero-img' />
        </div>
    </div>
  )
}

export default Hero