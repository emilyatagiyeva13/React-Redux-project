import React, { useState } from 'react';
import "../../css/form.css";
import { FaApple, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    // sehifeler arasinda yonlendirmek ucun
    const navigate = useNavigate();


    const passWordShow = () => {
        setShowPassword(!showPassword);
    }


    const validatePassword = (letter) => {
        const minLength = letter.length >= 8;


        const passArray = letter.split('');
        // some metodu ile yoxlayaram
        const upperLetter = passArray.some(char => char >= 'A' && char <= 'Z');
        const lowerLetter = passArray.some(char => char >= 'a' && char <= 'z');

        if (!minLength || !upperLetter || !lowerLetter) {
            setPasswordError("Password must be at least 8 characters long, include one uppercase and one lowercase letter.");
            return false;
        } else {
            setPasswordError("");
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            Swal.fire({
                title: "Error",
                text: "Please fill in all fields!",
                icon: "error"
            });
            return;
        }

        if (!validatePassword(password)) {
            Swal.fire({
                title: "Invalid Password",
                text: "Password must be at least 8 characters long, include one uppercase and one lowercase letter.",
                icon: "warning"
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                title: "Error",
                text: "Passwords do not match!",
                icon: "error"
            });
            return;
        }


        // localstorage ile istifadecinin olub olmadigi yoxlayiriq

        const existingUser = JSON.parse(localStorage.getItem("user"));


        // eyni mail ile qeydiyyat erroru

        if (existingUser && existingUser.email === email) {
            Swal.fire({
                title: "User already exists!",
                text: "This email is already registered.",
                icon: "warning"
            });
            return;
        }


        // localstorage yazmaq ucun payload yaradilir

        const payload = {
            email: email,
            password: password,
        };


        localStorage.setItem("user", JSON.stringify(payload));

        Swal.fire({
            title: "Success!",
            text: "Your account has been created.",
            icon: "success"
        }).then(() => {
            navigate("/login");
        });
    };

    return (
        <>
            <div>
                <NavLink className="nav-link container py-4" to="/" style={{ color: "gray", fontSize: "13px" }}>Home/My account</NavLink>
            </div>

            <div className="container d-flex flex-column align-items-center justify-content-center sign-up-box">
                <div className="title-box d-flex gap-2">
                    <span className="title btn log-in"><NavLink className="nav-link" to="/login">Log in</NavLink></span>
                    <span className='title btn sign-up btn-active'><NavLink className="nav-link" to="/signup">Sign up</NavLink></span>
                </div>
                <div className="form-container box">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Enter your email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validatePassword(e.target.value);
                                }}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                required
                            />
                            <span onClick={passWordShow} className='eye'>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                            {passwordError && <small style={{ color: "red", fontSize: "12px" }}>{passwordError}</small>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Your Password</label>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} type={showPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" required />
                            <span onClick={passWordShow} className='eye'>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <button type="submit" className="sign my-3">Sign up</button>
                    </form>

                    <div className="social-message">
                        <div className="line" />
                        <p className="message">SignUp with social accounts</p>
                        <div className="line" />
                    </div>

                    <div className="social-icons fs-4 d-flex justify-content-center align-items-center">
                        <div className="google icon">
                            <FaGoogle />
                            <span className='fs-5 mx-2'>Google</span>
                        </div>
                        <div className="apple icon">
                            <FaApple />
                            <span className="fs-5 mx-2">Apple</span>
                        </div>
                    </div>

                    <p className="signup fs-6 my-2">Have an account?
                        <NavLink to="/login">Log in</NavLink>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;