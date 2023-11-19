import React from 'react'
import "./FrameThirteen.css"
import logoWhite from "../Assets/logo-white.png"
import logoGreen from "../Assets/logo-green.png"

function FrameThirteen() {
  return (
    <div className='frame13-container'>
        <h1>Get started now.</h1>
        <section>
            <div className='frame13-logo-white-container'>
                <img src={logoWhite} alt='logo' />
                <span>density</span>
            </div>
            <div>
                <img src={logoGreen} alt='logo' />
            </div>
            <button className='start-trading-button'>Start Trading!</button>
        </section>
    </div>
  )
}

export default FrameThirteen