import React from 'react'
import { FaApple, FaGoogle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import "../../css/form.css"

const ForgotPassword = () => {
    return (
        <div className="container d-flex justify-content-center blur-image ">
            <div className="form-container box forgot-password ">
                <p className="title">Forgot password ?</p>
                <form className="form">
                    <div className="input-group">
                        <label htmlFor="username">Enter your email address</label>
                        <input className='d-flex ' type="email" name="username" id="username" placeholder />
                    </div>
                    <button className="sign my-4"><NavLink className="nav-link" to="/otp">Send code</NavLink></button>
                </form>


                <p className="signup fs-6 my-1">Don't have an account?
                    <NavLink rel="noopener noreferrer" href="#" className="mx-2" to="/signup">Sign up</NavLink>
                </p>
                <p className='text-center contact-us'>
                    <NavLink className="nav-link" to="/contact">Contact us!</NavLink>
                </p>
            </div>
        </div>
    )
}

export default ForgotPassword