'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoPersonOutline,
  IoCallOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoLogoFacebook
} from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

import style from '../modules/register.module.css';
import { registerUser } from '@/lib/api/auth';

export default function Registration() {
  /* ---------------- form state ---------------- */
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState(null);
  const [note,  setNote]                = useState(null);

  const router = useRouter();

  /* helpers */
  const onChange = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const togglePasswordVisibility = () => setShowPassword((v) => !v);

  /* -------- submit handler -------- */
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await registerUser(form);            // POST to register endpoint
      console.log(data)
      setNote('Account created! Check your email to confirm.');
      setTimeout(() => router.push('/login'), 2500);
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || 'Registration failed'
      );
    } finally {
      setLoading(false);
    }
  }

  /* -------------- UI -------------- */
  return (
    <div className="w-[400px] flex flex-col justify-self-center rounded-[10px] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] m-[150px_auto_30px] p-[0_15px_20px_15px]">
      <div className="text-center">
        <h3 className="text-xl font-black text-[#ffa500] mb-5">TICKETIX</h3>
        <h2 className="text-[28px] font-bold mb-1">Create an Account</h2>
        <p className="text-[15px] text-[#444242bb]">
          Please fill the details to create an account
        </p>
      </div>

      <form className={style.userInput} onSubmit={handleSubmit}>
        {/* names */}
        <IoPersonOutline className={style.icon} />
        <input
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={onChange('firstName')}
          required
        />
        <br />
        <IoPersonOutline className={style.icon} />
        <input
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={onChange('lastName')}
          required
        />
        <br />

        {/* username */}
        <IoPersonOutline className={style.icon} />
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={onChange('username')}
          required
        />
        <br />

        {/* email */}
        <IoMailOutline className={style.icon} />
        <input
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={onChange('email')}
          required
        />
        <br />

        {/* phone */}
        <IoCallOutline className={style.icon} />
        <input
          type="tel"
          placeholder="Phone number"
          value={form.phoneNumber}
          onChange={onChange('phoneNumber')}
          required
        />
        <br />

        {/* password */}
        <IoLockClosedOutline className={style.icon} />
        <input
          className={style.lockInput}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={form.password}
          onChange={onChange('password')}
          required
        />
        <span onClick={togglePasswordVisibility} className={style.eyeIcon}>
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </span>

        {/* submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full p-4 mt-4 text-white rounded-[10px] bg-[#ffa500] text-[16px] font-extrabold cursor-pointer transition duration-200 hover:scale-95 disabled:opacity-60"
        >
          {loading ? 'Signing up…' : 'Signup'}
        </button>
      </form>

      {/* messages */}
      {error && (
        <p className="mt-3 text-center text-red-600 text-sm font-semibold">
          {error}
        </p>
      )}
      {note && (
        <p className="mt-3 text-center text-green-600 text-sm font-semibold">
          {note}
        </p>
      )}

      <p className={style.hr}>Or</p>

      {/* social placeholders */}
      <div className="flex flex-col text-center">
        <div className="flex justify-center p-[15px] mb-[10px] border border-gray-400 rounded-[10px] text-[15px] font-semibold text-[#222] cursor-pointer hover:scale-95 transition">
          <span className="relative top-[2px] mr-4">
            <IoLogoFacebook />
          </span>
          <button type="button">Login with Facebook</button>
        </div>

        <div className="flex justify-center p-[15px] mb-[10px] border border-gray-400 rounded-[10px] text-[15px] font-semibold text-[#222] cursor-pointer hover:scale-95 transition">
          <span className="relative top-[2px] mr-4">
            <FcGoogle />
          </span>
          <button type="button">Login with Google</button>
        </div>
      </div>

      <p className="text-center mt-[10px] text-[15px] font-bold">
        Already have an account?{' '}
        <Link href="/login" className="text-[#ffa500] font-extrabold">
          Login
        </Link>
      </p>
    </div>
  );
}
