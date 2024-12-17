import React from 'react';
import logo from '../assets/logo.jfif';
import './navbar.css'

const Navbar = () => {

    function handleLogoClick(){
        
    }

  return (
    <>
        <div className="navbar">

            <div className="logo" >
                <img src={logo} alt="logo" id='navbar-logo' onClick ="handleLogoClick()"/>
            </div>

            <div className="functionality">
                <input type="text" placeholder='searchbar' />
                <button>&#x1F50D;</button>
            </div>

            <div className="nav-buttons">

                <button> Login </button>
                <button> Cart</button>
                <button>  &#x2630; </button>
            </div>

        </div>
    </>
  )
}

export default Navbar