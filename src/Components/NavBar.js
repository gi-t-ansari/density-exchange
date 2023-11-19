import React from 'react'
import "./NavBar.css"
import logo from "../Assets/logo.png"

function NavBar() {
  return (
    <nav className='navbar-container'>
        <div className='logo-container'>
            <img src={logo} alt='logo'/>
            <span>density</span>
        </div>
        <div className='navbar-sub-container'>
            <ul className='navbar-list-container'>
                <li>Career</li>
                <li>Blogs</li>
                <li>Leaderboard</li>
                <li>Fees</li>
            </ul>
            <div>
                <button className='button'>trade now</button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar