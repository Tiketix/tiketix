"use client"

import { useState } from "react";
import style from "./login.module.css"
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoEyeOutline, IoEyeOffOutline, IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Login() {

  const[showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () =>{
    setShowPassword(!showPassword);
  }

  return (
    <div className={style.container}>

      <div className={style.containerTop}>
        <h3 className={style.name}>TICKETIX</h3>
        <h2>Welcome Back!</h2>
        <p>Use your credentials to access your account</p>
      </div>
      
        <div className={style.userInput}>
        
          <IoPersonOutline className={style.icon}/>
          <input type ="text" placeholder="Enter Username" required/>
          <br />
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

          <Link href={""} className={style.forgotPassword}>Forgot Password?</Link>
          <br /><br />

          <button className={style.loginBtn}>Login</button>
       </div>
        <p className={style.hr}>or</p>

        <div className={style.socialBtn}>
          <button>
           <span><IoLogoFacebook /></span>
            Login with Facebook
          </button>
          <button>
            <span><FcGoogle /></span>
            Login with Google
          </button>
        </div>
        

        <p className={style.signUp}>Don't have an account? <span><Link href="/registration">Sign up</Link></span></p>

    </div>
  );
}
