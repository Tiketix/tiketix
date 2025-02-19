import style from "./login.module.css"
import Link from "next/link";

export default function Login() {
  return (
    <div className={style.container}>

      <h1 className={style.name}>TICKETIX</h1>
      <p className={style.welcome}>Welcome Back!</p>
      <p className={style.loginMsg}>Use your credentials to access your account</p>
      <br /><br />

      
        <div>
        
          <input type = "text" id="email" placeholder="Enter Email Address" className={style.inputBox} required/>
          <br /><br />

          <input type = "text" id="pass" placeholder="Enter Password" className={style.inputBox} required/><br />
          <p className={style.forgotPassword}>Forgot Password?</p>
          <br /><br />

          <button className={style.loginBtn}>Login</button><br />
          <hr />
          <button className={style.loginBtn2}>Login with Facebook</button><br />
          <button className={style.loginBtn2}>Login with Google</button><br />

          <p className={style.signUp}>Don't have an account? <span><Link href="/registration">Sign up</Link></span></p>
        </div>
      

    </div>
  
  );
}
