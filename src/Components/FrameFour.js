import React from 'react'
import "./FrameFour.css"
import frame4 from "../Assets/frame4.png"

function FrameFour() {
  return (
    <div className='frame4-container'>
        <h1>Explore the Markets <br />like it is your <span>Playground.</span></h1>
        <p>Search for your favorite coins and stay ahead of the market</p>
        <div>
            <img src={frame4} alt='trading-img' />
        </div>
        <div>
            <button className='button'>explore markets</button>
        </div>
    </div>
  )
}

export default FrameFour