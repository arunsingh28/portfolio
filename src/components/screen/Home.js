import React from 'react'
import './home.style.scss'
import instagram from '../util/logo/instagram.gif'
import github from '../util/logo/github.svg'
import linkedin from '../util/logo/linkedin.gif'
import facebook from '../util/logo/facebook.gif'
import profile from '../util/logo/profile.JPG'

const Home = () => {
    return (
        <div className="home">
            <div className="bg_cover"></div>
            <div className="card_container">
                <div className="icard">
                    <img src={profile} alt="profile" />
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
                    <p>Here's who i am & what i do</p>

                    <div className="btn_container">
                        <button>Resume</button>
                        <button>Projects</button>
                    </div>

                    <p className="bio">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    <br/>  <br/>  <br/>
                    I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
