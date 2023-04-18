import React, { useState } from "react";
import "../styles.css";
import google from "../../assets/google.png"

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const submitData = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return <form className="login-form">
        <div className="heading">        <h3>Login</h3></div>

        <div className="login-section">  <label htmlFor="email">Email ID / Username</label>
            <input type="text" id="email" name="email" placeholder="Enter Email ID / Username" value={email} onChange={handleFormData} /></div>

        <div className="login-section">  <label htmlFor="email">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter Password" value={password} onChange={handleFormData} />
            <div className="forget-pass">Forgot Password?</div></div>


        <div>
            <button className="login-btn" onClick={submitData}>Login</button>
            <button className="otp-btn">Use OTP to Login</button>
        </div>


        <div className="seperator">
            <div>Or</div>
        </div>

        <div className="google">
            <div className="logo"><img src={google} alt="google" width={20} /></div>
            <div className="title">Sign in with Google</div>
        </div>
    </form>
}