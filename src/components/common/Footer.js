import React from 'react'
import './style.scss'

import linkedin from '../util/logo/linkedin.gif'
import facebook from '../util/logo/facebook.gif'
import instagram from '../util/logo/instagram.gif'

const Footer = () => {
    return (
        <footer>
            <div className="quote">
                <p>© {new Date().getFullYear()} by Arun Singh. <br/> Technically created with React</p>
            </div>

            <div className="footer_side_nav">
                <div className="call">
                    <b>Call</b>
                    <a href="tel:7983613144">+91 7983613144</a>
                </div>
                <div className="mail">
                    <b>Mail</b>
                    <a href="mailto:arunsingh28aug.as@gmail.com">arunsingh28aug.as@gmail.com</a>
                </div>
                <div className="social">
                    <b>Social Links</b>
                    <div>
                    <img src={facebook} alt="facebook"/>
                    <img src={linkedin} alt="facebook"/>
                    <img src={instagram} alt="facebook"/>
                    
                    </div>
                </div>               
                

            </div>
        </footer>
    )
}

export default Footer
