import React from 'react';
import { Link } from "react-router-dom";
import logo from '../utilitiyreminderlogo.png'
import './Header.css'


const Header = () => {  
    return (
        <div id="topBar" className='d-flex justify-content-start align-items-center'>
            <Link  to={{pathname: '/'}} id="toHomePage" className="d-flex align-items-center">
                <img src={logo} id='logo'/>
                <h3 id='title' className='text-center'>Utility Reminders for Roommates</h3>
            </Link>
        </div>

    )
}

export default Header