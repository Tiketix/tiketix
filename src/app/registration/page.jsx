"use client"

import { useState } from 'react';
import style from "./register.module.css"
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoEyeOutline, IoEyeOffOutline, IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link"

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className={style.wrapper}>

      <div className={style.wrapperTop}>
        <h3 className={style.name}>TICKETIX</h3>
        <h2>Create an Account</h2>
        <p>Please fill this detail to create an account</p>
      </div>

      <div className={style.userInput}>
       
        <IoPersonOutline className={style.icon}/>
        <input type="text" placeholder="Enter Username" required/><br /> 
        <IoMailOutline className={style.icon}/>
        <input type="email" placeholder="Enter Email address" required/><br />
        <IoLockClosedOutline className={style.icon}/> 
        <input className={style.lockInput}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
        />

          <span onClick={togglePasswordVisibility} className={style.eyeIcon}>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </span>
          <br />

        <button className={style.signupBtn}>Signup</button>
      </div>

      <p className={style.hr}>Or</p>

      <div className={style.socialBtn}>
        <button><span><IoLogoFacebook /></span> Login with Facebook</button>
        <button><span><FcGoogle /></span> Login with Google</button>
      </div>

      <p className={style.login}>Already have an account? <Link href="/login">Login</Link></p>
    </div>
  
  );
}
