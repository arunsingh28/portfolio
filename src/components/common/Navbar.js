import React from 'react'
import './style.scss'
const Navbar = () => {
    return (
        <div className="nav">
            <div className="brand_Name">
                <h1>Arun Singh</h1><p>/ Mern stack developer</p>
            </div>
            <div className="menu">
                <ul>
                    <li>About me</li>
                    <li>Resume</li>
                    <li>projects</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
