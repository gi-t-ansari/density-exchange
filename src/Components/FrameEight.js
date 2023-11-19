import React from 'react'
import  "./FrameEight.css"
import img1 from "../Assets/frame8-img1.png"
import img2 from "../Assets/frame8-img2.png"

function FrameEight() {
  return (
    <div className='frame8-container'>
        <h1>Backed by the Best.</h1>
        <section>
            <img width={954} src={img1} alt='companies-support' />
        </section>
        <section>
            <img width={1014} src={img2} alt='peoples-support'/>
        </section>
    </div>
  )
}

export default FrameEight