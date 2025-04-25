"use client"

import { useState } from 'react';
import style from "../modules/register.module.css"
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoEyeOutline, IoEyeOffOutline, IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";


export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const registerUser = async () => {
    const sampleBody = {
      firstName: "Tobi",
      lastName: "Dev",
      userName: "presidentss",
      email: "tobiiii@gmail.com",
      phoneNumber: "08012345678",
      password: "12345678",
    };

    const request = await fetch(
      "http://localhost:5013/api/authentication/register-user",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sampleBody)}
    );

    console.log(request);
    console.log(request.message)
  };
  return (
    <div className="w-[400px] flex flex-col justify-self-center rounded-[10px] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] m-[150px_0_30px_0] p-[0_15px_20px_15px]">

      <div className="text-center mt-0">
        <h3 className="text-xl font-black text-[#ffa500] mb-5">TICKETIX</h3>
        <h2 className='text-[28px] font-bold mt-[30px] mb-0'>Create an Account</h2>
        <p className='m-[15px_0_0_0] text-[15px] text-[#444242bb]'>Please fill this detail to create an account</p>
      </div>

      <div className={style.userInput}>
       
        <IoPersonOutline className={style.icon}/>
        <input type="text" placeholder="Enter Username" required/>
        <br /> 
        
        <IoMailOutline className={style.icon}/>
        <input type="email" placeholder="Enter Email address" required/>
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

        <button type='submit' className='w-full p-4 text-white rounded-[10px] border-none outline-none bg-[#ffa500] text-[16px] font-extrabold cursor-pointer transition ease-in-out duration-200 hover:scale-95 '>Signup</button>
      </div>

      <p className={style.hr}>Or</p>

      <div className='flex flex-col text-center w-full'>
        <div className="flex justify-center p-[15px] mb-[10px] border border-[1px_solid_#444242] outline-none rounded-[10px] text-[15px] font-[550] bg-transparent text-[#222] cursor-pointer transition ease-in-out duration-200 hover:scale-95">
         <span className='relative top-1 mr-5'><IoLogoFacebook /></span>
         <button>Login with Facebook</button>
        </div>
        
        <div className="flex justify-center p-[15px] mb-[10px] border border-[1px_solid_#444242] outline-none rounded-[10px] text-[15px] font-[550] bg-transparent text-[#222] cursor-pointer transition ease-in-out duration-200 hover:scale-95">
         <span className='relative top-1 mr-5'><FcGoogle /></span>
         <button>Login with Google</button>
        </div>
      </div>

      <p className='text-center mt-[10px] text-[15px] font-bold'>Already have an account? <Link href="/login" className='text-[#ffa500] font-extrabold'>Login</Link></p>
    </div>
  );
}
