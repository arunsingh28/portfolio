import React from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/screen/Home'

import './global.scss'
const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer/>
        </div>
    )
}

export default App
