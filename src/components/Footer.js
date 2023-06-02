import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = (props) => {

    return (
        <div id={props.id}>
            <div className="row d-flex justify-content-around align-items-center p-2">
                <h6 id="about" className="col text-center light">About Us</h6> 
                <h6 id="contact" className="col text-center light" >Contact Us</h6> 
            </div>

            <div className="row d-flex justify-content-around align-items-center mt-3">
                <Link className="light" to={{pathname: '/privatePolicy'}} id="privlink" >Private Policy</Link>
            </div>
        </div>

    )

}

export default Footer;
