import React from 'react'
import "./FrameSeven.css"
import Phone1 from "../Assets/fram7-phone1.png"
import Phone2 from "../Assets/frame7-phone2.png"
import Phone3 from "../Assets/frame7-phone3.png"
import DpIcon from "../Assets/create-account.png"
import Coin from "../Assets/deposit.png"
import Trade from "../Assets/trade-graph.png"

function FrameSeven() {
  return (
    <div className='frame7-container'>
        <h1>Derivates made simple<br /> in <span>3 Easy</span> Steps</h1>
        <section>
            <div>
              <img width={275} src={Phone1} alt='phone1' />
            </div>
            <article>
              <img width={120} src={DpIcon} alt='dp-icon' />
              <h2>Create an Account</h2>
              <p>Register & Complete your<br />Verification in less than 2 minutes</p>
              <button className='button'>Trade Now</button>
            </article>
        </section>
        <div className='frame7-divider'></div>
        <section>
            <div>
              <img width={275} src={Phone2} alt='phone2' />
            </div>
            <article>
              <img width={120} src={Coin} alt='coin-img' />
              <h2>Deposit Funds</h2>
              <p>Add funds quickly using a variety<br />of payment methods</p>
              <button className='button'>Trade Now</button>
            </article>
        </section>
        <div className='frame7-divider'></div>
        <section>
            <div>
              <img width={275} src={Phone3} alt='phone3'/>
            </div>
            <article>
              <img width={120} src={Trade} alt='trading-graph' />
              <h2>Become a Trader</h2>
              <p>Choose Your Trading Pair & Trade<br />Seamlessly</p>
              <button className='button'>Trade Now</button>
            </article>
        </section>
    </div>
  )
}

export default FrameSeven