import React from 'react'
import "./FrameTen.css"
import speaker from "../Assets/speaker-image.png"
import closingTag from "../Assets/closing-tag.png"
import groupImg from "../Assets/group-image.png"
import coinToss from "../Assets/coin-toss.png"

function FrameTen() {
  return (
    <div className='frame10-container'>
        <div>
            <img width={240} src={speaker} alt='speaker-image' />
        </div>
        <h1>Earn Money. <span>The Easy Way.</span></h1>
        <p>No Complexity of Trading Fee, generate volume and win</p>
        <section>
            <article>
                <div>
                    <img width={100} src={closingTag} alt='closing-tag-img' />
                </div>
                <h5>Share your<br />referral link</h5>
            </article>
            <article>
                <div>
                    <img width={100} src={groupImg} alt='group-img' />
                </div>
                <h5>Invite Friends to<br />Trade on Density</h5>
            </article>
            <article>
                <div>
                    <img width={100} src={coinToss} alt='coin-toss-img' />
                </div>
                <h5>Trade<br />and Earn</h5>
            </article>    
        </section>
        <div>
            <button className='button'>start earning now</button>
        </div>
    </div>
  )
}

export default FrameTen