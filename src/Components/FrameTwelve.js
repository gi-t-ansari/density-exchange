import React from 'react'
import "./FrameTwelve.css"
import LinkedInLogo from "../Assets/linkedin-logo.png"
import aakash from "../Assets/akash-neeraj.png"
import bhupendra from "../Assets/bhupendra-bule.png"
import deepak from "../Assets/deepak-vasman.png"

function FrameTwelve() {
  return (
    <div className='frame12-container'>
      <h1>Meet the <span>Visionaries</span><br /> behind Density.</h1>
      <p>No Complexity of Trading Fee, generate volume and win</p>
      <section>
        <article>
          <h5>Aakash Neeraj<br />Mittal</h5>
          <p>CEO, Density</p>
          <a href='https://www.linkedin.com/in/aakashneerajmittal/' target='_blank'>
            <img className='linkedin-logo' src={LinkedInLogo} alt='in' />
          </a>
          <img className='frame12-founders' src={aakash} alt='aakash-ceo' />
        </article>
        <article>
          <h5>Bhupendra<br />Blue</h5>
          <p>CTO, Density</p>
          <a href='https://www.linkedin.com/in/bhupendra-bule/' target='_blank'>
            <img className='linkedin-logo' src={LinkedInLogo} alt='in'/>
          </a>
          <img className='frame12-founders' src={bhupendra} alt='bhupendra-cto' />
        </article>
        <article>
          <h5>Deepak<br />Vasman</h5>
          <p>CBO, Density</p>
          <a href='https://www.linkedin.com/in/deepak-vasman-b666b236/' target='_blank'>
            <img className='linkedin-logo' src={LinkedInLogo} alt='in'/>
          </a>
          <img className='frame12-founders' src={deepak} alt='deepak-cbo' />
        </article>
      </section>
    </div>
  )
}

export default FrameTwelve