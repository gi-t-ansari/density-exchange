import React from 'react'
import "./FrameOne.css"
import vector from "../Assets/vector.png"

function FrameOne() {
  return (
    <div className='frame1-container'>
        <div className='frame1-sub-container'>
            <div>
                <h3>00%</h3>
                <p>Conversion Fee </p>
            </div>
            <img src={vector} className='vector' />
            <div>
                <h3>500 Mn+</h3>
                <p>Lifetime Volume Traded</p>
            </div>
            <img src={vector} className='vector' />
            <div>
                <h3>250+</h3>
                <p>Total Tradable Pairs</p>
            </div>    
            <img src={vector} className='vector' />
            <div>
                <h3>15,000+</h3>
                <p>Traders</p>
            </div>
        </div>
    </div>
  )
}

export default FrameOne