import React from 'react'
import "./FrameThree.css"
import coinDCX from "../Assets/coin-dcx.png"
import logo2 from "../Assets/logo2.png"
import deltaExchange from "../Assets/delta-exchange.png"


function FrameThree() {
  return (
    <div className='frame3-container'>
        <h1>Trade More. <span>Pay Less.</span></h1>
        <p>Our low Fees Supercharge Your Profits</p>
        <div className='frame3-sub-container'>
            <div className='company-containers coin-delta-container'>
                <div>
                    <img src={coinDCX} alt='CoinDCX' />
                </div>
                <div>
                    <h5 className='frame3-sub-heading'>0.025</h5>
                    <p>Maker Fees</p>
                </div>
                <div>
                    <h5 className='frame3-sub-heading'>0.07</h5>
                    <p>Taker Fees</p>
                </div>
            </div>
            <div className='company-containers density-container'>
                <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
                    <img src={logo2} alt='density-exchange' />
                    <span style={{fontSize: "40px"}}>density</span>
                </div>
                <div>
                    <h5 className='frame3-sub-heading'>0.02</h5>
                    <p>Maker Fees</p>
                </div>
                <div>
                    <h5 className='frame3-sub-heading'>0.04</h5>
                    <p>Taker Fees</p>
                </div>
            </div>
            <div className='company-containers coin-delta-container'>
                <div>
                    <img src={deltaExchange} alt='delta-exchange' />
                </div>
                <div>
                    <h5 className='frame3-sub-heading'>0.02</h5>
                    <p>Maker Fees</p>
                </div>
                <div>
                    <h5 className='frame3-sub-heading'>0.05</h5>
                    <p>Taker Fees</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrameThree