import React from 'react'
import "./Footer.css"
import logoWhite from "../Assets/logo-white.png"
import facebookLogo from "../Assets/facebook-logo.png"
import twitterLogo from "../Assets/twitter-logo.png"
import linkedinLogo2 from "../Assets/linkedin-logo2.png"
import instaLogo from "../Assets/insta-logo.png"

function Footer() {
  return (
    <footer className='footer-container'>
        <div className='footer-logo-white-container'>
            <img src={logoWhite} alt='logo-white'/>
            <span>density</span>
        </div>
        <ul>
            <li>Blog</li>
            <li>Fees</li>
            <li>Leaderboard</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
        <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i<br/> muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.</p>
        <div className='social-handle-container'>
            <a href='https://www.linkedin.com/company/densityexchange/' target='_blank'>
                <img src={facebookLogo} alt='facebook-logo' />
            </a>
            <a href='https://twitter.com/densityxchange' target='blank'>
                <img src={twitterLogo} alt='twitter-logo' />
            </a>
            <a href='https://www.linkedin.com/company/densityexchange/' target='_blank'>
                <img src={linkedinLogo2} alt='linkedin-logo' />
            </a>
            <a href='https://www.instagram.com/densityexchange/' target='_blank'>
                <img src={instaLogo} alt='insta-logo' />
            </a>
        </div>
    </footer>
  )
}

export default Footer