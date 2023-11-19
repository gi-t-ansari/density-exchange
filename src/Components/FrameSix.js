import React from 'react'
import "./FrameSix.css"
import manager from "../Assets/Manager 1.png"
import percentImg from "../Assets/percent.png"

function FrameSix() {
  return (
    <div className='frame6-container'>
        <h1>Start Small. Earn Big.</h1>
        <p>Deposity a minimum of 1000 and get a Deposit bonus +<br /> dedicagted relationship manager</p>
        <div className='frame6-sub-container'>
            <div>
                <div>
                    <img width={117} src={percentImg} alt='25%' />
                </div>
                <h2>Deposit<br />Bonus.</h2>
                <p>Our assets' liquidity is unmatched in the market, with a<br/> small bid-ask spread and a well-balanced order book.</p>
            </div>
            <div>
                <div>
                    <img width={101} src={manager} alt='manager' />
                </div>
                <h2>Dedicated<br />Relationship Manager.</h2>
                <p>Our assets' liquidity is unmatched in the market, with a small<br /> bid-ask spread and a well-balanced order book.</p>
            </div>
        </div>
    </div>
  )
}

export default FrameSix