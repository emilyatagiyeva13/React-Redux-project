import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../css/form.css"

const OTP = () => {
    return (
        <>

            <form className="form-otp container">
                <div className="title">OTP</div>
                <div className="title">Verification Code</div>
                <p className="message">We have sent a verification code to your mobile number</p>
                <div className="inputs">
                    <input id="input1" type="text" maxLength={1} />
                    <input id="input2" type="text" maxLength={1} />
                    <input id="input3" type="text" maxLength={1} />
                    <input id="input4" type="text" maxLength={1} /> </div>
                <button className="action"><NavLink className="nav-link" to="/products">verify me</NavLink></button>
            </form>


        </>
    )
}

export default OTP