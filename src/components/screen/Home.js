import React from 'react'
import './home.style.scss'
import instagram from '../util/logo/instagram.gif'
import github from '../util/logo/github.svg'
import linkedin from '../util/logo/linkedin.gif'
import facebook from '../util/logo/facebook.gif'

const Home = () => {
    return (
        <div className="home">
            <div className="bg_cover"></div>
            <div className="card_container">
                <div className="icard">
                <img src="https://static.wixstatic.com/media/2e2a49_bd3a1599bc1b4265a01b2754b99b8536~mv2_d_5760_3840_s_4_2.jpeg/v1/crop/x_2703,y_43,w_2199,h_2205/fill/w_410,h_410,al_c,q_80,usm_0.66_1.00_0.01/AdobeStock_230407429.webp" alt="profile" />
                <h3>Arun <br /> Singh</h3>
                <span></span>
                <p>Mern stack developer</p>
                <div className="social_Link">
                    <img src={instagram} alt="instagram" />
                    <img src={github} alt="gihub" />
                    <img src={facebook} alt="facebook" />
                    <img src={linkedin} alt="linkedin" />
                </div>
                </div>

                <div className="content">
                    <h1>Hello world</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
