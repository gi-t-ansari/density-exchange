import React from 'react'
import "./FrameEleven.css"

function FrameEleven() {
  return (
    <div className='frame11-container'>
        <h1>Trade Together. <span>Thrive Together.</span></h1>
        <p>Join the fun-filled community on our platform.</p>
        <section>
            <article>
                <h5>10,000+</h5>
                <p>Traders</p>
            </article>
            <div className='frame11-divider'></div>
            <article>
                <h5>100Mn</h5>
                <p>Daily Volume Trade</p>
            </article>
            <div className='frame11-divider'></div>
            <article>
                <h5>Daily</h5>
                <p>Trade Analysis</p>
            </article>
            <div className='frame11-divider'></div>
            <article>
                <h5>Live</h5>
                <p>Signals</p>
            </article>
        </section>
        <div>
            <button className='button'>join community</button>
        </div>
    </div>
  )
}

export default FrameEleven