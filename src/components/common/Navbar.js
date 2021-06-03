import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const Navbar = () => {
    return (
        <div className="nav">
            <div className="brand_Name">
                <h1>Arun Singh</h1><p>/ Mern stack developer</p>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">About me</Link>
                    </li>
                    <li>
                        <Link>Resume</Link>
                    </li>
                    <li>
                        <Link>projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
