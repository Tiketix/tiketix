"use client"

import { useState } from "react";
import style from "../modules/register.module.css"
import {
  IoLockClosedOutline,
  IoPersonOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoLogoFacebook,
  IoMailOutline,
} from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Login() {

  const[showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () =>{
    setShowPassword(!showPassword);
  }

  return (
    <div className="w-[400px] flex flex-col justify-self-center rounded-[10px] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] m-[150px_0_30px_0] p-[0_15px_20px_15px]">
      <div className="text-center mt-0">
        <h3 className="text-xl font-black text-[#ffa500] mb-5">TICKETIX</h3>
        <h2 className="text-[28px] font-bold m-[30px_0]">Welcome Back!</h2>
        <p className="m-[15px_0_0_0] text-[15px] text-[#444242bb]">
          Use your credentials to access your account
        </p>
      </div>

      <div className={style.userInput}>
        <IoMailOutline className={style.icon} />
        <input type="text" placeholder="Enter Email" required />
        <br />
        <IoLockClosedOutline className={style.icon} />
        <input
          className={style.lockInput}
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

        <Link
          href={"#"}
          className="flex float-right text-[15px] font-black text-[#ffa500] mt-[-20px]"
        >
          Forgot Password?
        </Link>
        <br />
        <br />

        <button
          type="submit"
          className="w-full bg-[#ffa500] rounded-[10px] border-none outline-none text-[16px] font-extrabold text-white p-[16px] cursor-pointer transition ease-in-out duration-200 hover:scale-95"
        >
          Login
        </button>
      </div>
      <p className={style.hr}>Or</p>

      <div className="flex flex-col text-center w-full mb-3">
        <div className="flex justify-center p-[15px] mb-[10px] border border-[1px_solid_#444242] outline-none rounded-[10px] text-[15px] font-[550] bg-transparent text-[#222] cursor-pointer transition ease-in-out duration-200 hover:scale-95">
          <span className="relative top-1 mr-5">
            <IoLogoFacebook />
          </span>
          <button>Login with Facebook</button>
        </div>

        <div className="flex justify-center p-[15px] mb-[10px] border border-[1px_solid_#444242] outline-none rounded-[10px] text-[15px] font-[550] bg-transparent text-[#222] cursor-pointer transition ease-in-out duration-200 hover:scale-95">
          <span className="relative top-1 mr-5">
            <FcGoogle />
          </span>
          <button>Login with Google</button>
        </div>
      </div>

      <p className="text-center mt-[10px] text-[15px] font-bold">
        Don't have an account?{" "}
        <Link href="/registration" className="text-[#ffa500] font-extrabold">
          Sign up
        </Link>
      </p>
    </div>
  );
}
