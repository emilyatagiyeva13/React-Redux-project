import React, { use, useRef, useState } from 'react';
import "../../../css/form.css";
import { FaApple, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false);

    const passWordShow = () => {
        setShowPassword(!showPassword);
    }

    const adminUser = {

        email: "tagizademilya@gmail.com",
        password: "1234"

    }


    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        if (!enteredEmail || !enteredPassword) {
            Swal.fire({
                title: "You didn't enter username and password at once!",
                icon: "warning"
            });
            return;
        }


        // Burada localstorageden user-i oxuyur hansi ki registrda

        const savedUser = JSON.parse(localStorage.getItem("user"));


        // ADMINnin yoxlanishi buradadir******************************

        if (enteredEmail === adminUser.email && enteredPassword === adminUser.password) {
            Swal.fire({
                title: "You logged into your account",
                icon: "success",
                confirmButtonText: "Go to Shopping"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/dashboard');
                }
            });

            return;
        }

        if (
            savedUser &&
            enteredEmail === savedUser.email &&
            enteredPassword === savedUser.password
        ) {
            Swal.fire({
                title: "Login successful!",
                icon: "success",
                confirmButtonText: "Go to Shopping"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/');
                }
            });
        } else {
            emailRef.current.value = "";
            passwordRef.current.value = "";

            Swal.fire({
                title: "Error!",
                text: "Email or password incorrect",
                icon: "error",
                confirmButtonText: "Try again!"
            });
        }
    };

    return (

        <>

            <div>
                <NavLink className="nav-link container py-4 " to="/" style={{ color: "gray", fontSize: "13px" }}>Home/My account</NavLink>
            </div>

            <div className="container d-flex flex-column align-items-center justify-content-center log-in-box">
                <div className="title-box d-flex gap-2">
                    <span className="title btn btn-active"><NavLink className="nav-link" to="/login">Log in</NavLink></span>
                    <span className='title btn sign-up'><NavLink className="nav-link" to="/signup">Sign up</NavLink></span>
                </div>
                <div className="form-container box ">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Enter your email</label>
                            <input ref={emailRef} className='d-flex ' type="email" name="username" id="username" />
                        </div>
                        <div className="input-group d-flex flex-column">
                            <div>
                                <div className="d-flex flex-column">
                                    <label htmlFor="password" className='me-auto'>Password</label>
                                    <input ref={passwordRef} type={showPassword ? "text" : "password"} name="password" id="password" />

                                </div>
                                <span
                                    onClick={passWordShow} className='eye'>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <div className="forgot">
                                <NavLink to="/forgotpassword">Forgot Password ?</NavLink>
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="sign">Sign in</button>
                    </form>
                    <div className="social-message">
                        <div className="line" />
                        <p className="message">Login with social accounts</p>
                        <div className="line" />
                    </div>
                    <div className="social-icons fs-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="google icon">
                            <FaGoogle />
                            <span className='fs-5 mx-2'>Google</span>
                        </div>
                        <div className="apple icon">
                            <FaApple />
                            <span className="fs-5 mx-2">Apple</span>
                        </div>
                    </div>
                    <p className="signup fs-6 my-1">Don't have an account?
                        <NavLink to="/signup" rel="noopener noreferrer" href="#" className="mx-2">Sign up</NavLink>
                    </p>

                </div>
            </div>


        </>



    )

}

export default LogIn;