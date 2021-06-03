import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/screen/Home'
import Contact from './components/screen/Contact'
import './global.scss'
const App = () => {
    return (
        <Router>

            <Navbar />
            <Switch>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0.1 }}
                    atActive={{ opacity: 1 }}
                // className="switch-wrapper"
                >
                    <Route path="/" component={Home} exact />
                    <Route path="/contact" component={Contact} exact />
                </AnimatedSwitch>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
