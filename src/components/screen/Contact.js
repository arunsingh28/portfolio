import React from 'react'
import './contact.style.scss'
const Contact = () => {
    return (
        <div className="contact_page">
            <header>
                <h1>Let's Talk</h1>
            </header>
            <form className="form">
                <div className="input_container">
                    <div className="row">
                        <div>
                            <label>Name*</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Last Name*</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="singlerow">
                        <div>
                            <label>Email*</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="singlerow">
                        <div>
                            <label>Subject*</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="singlerow">
                        <div>
                            <label>Message*</label>
                            <textarea type="text" />
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Contact