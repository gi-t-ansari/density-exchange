import React from 'react'
import "./FrameTwo.css"
import img1 from "../Assets/frame2-img1.png"
import img2 from "../Assets/frame2-img2.png"
import img3 from "../Assets/frame2-img3.png"

function FrameTwo() {
  return (
    <div className='fame2-container'>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img3} />
        </div>
    </div>
  )
}

export default FrameTwo