import React from 'react'
import "./FrameFive.css"
import frame5 from "../Assets/frame5.png"

function FrameFive() {
  return (
    <div className='frame5-container'>
        <h1><span>Unlock</span> New Frontiers.</h1>
        <p>Are you a stock trader looking for new opportunities to make<br /> money? We got you covered!</p>
        <div className='frame5-sub-container'>
            <div>
                <p>Same</p>
                <p>Strategies</p>
            </div>
            <div className='frame5-vectors'></div>
            <div>
                <p>Same</p>
                <p>Indicators</p>
            </div>
            <div className='frame5-vectors'></div>
            <div>
                <p>Better</p>
                <p>Leverage</p>
            </div>
            <div className='frame5-vectors'></div>
            <div>
                <p>24x7</p>
                <p>Trading</p>
            </div>
        </div>
        <div>
            <img width={800} src={frame5} alt='frame5' />
        </div>
    </div>
  )
}

export default FrameFive