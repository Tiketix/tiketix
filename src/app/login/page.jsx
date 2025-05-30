'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoLogoFacebook
} from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

import style from '../modules/register.module.css';
import { loginUser } from '@/lib/api/auth';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  /* ---------------- form state ---------------- */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { saveUser } = useAuth();

  /* -------- submit handler -------- */
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data } = await loginUser({ email, password }); // backend returns full user object
      console.log(data)
      saveUser(data);
      router.push('/events');
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || 'Login failed'
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
        <h2 className="text-[28px] font-bold my-[30px]">Welcome Back!</h2>
        <p className="text-[15px] text-[#444242bb]">
          Use your credentials to access your account
        </p>
      </div>

      {/* ----------- form ----------- */}
      <form className={style.userInput} onSubmit={handleSubmit}>
        <IoMailOutline className={style.icon} />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <br />

        <IoLockClosedOutline className={style.icon} />
        <input
          className={style.lockInput}
          type={showPwd ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <span
          onClick={() => setShowPwd(s => !s)}
          className={style.eyeIcon}
        >
          {showPwd ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </span>
        <br />

        <Link
          href="#"
          className="flex float-right text-[15px] font-black text-[#ffa500] mt-[-20px]"
        >
          Forgot Password?
        </Link>
        <br />
        <br />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ffa500] rounded-[10px] text-[16px] font-extrabold text-white p-[16px] cursor-pointer transition duration-200 hover:scale-95 disabled:opacity-60"
        >
          {loading ? 'Logging in…' : 'Login'}
        </button>
      </form>

      {/* messages */}
      {error && (
        <p className="mt-3 text-center text-red-600 text-sm font-semibold">
          {error}
        </p>
      )}

      <p className={style.hr}>Or</p>

      {/* social placeholders */}
      <div className="flex flex-col text-center mb-3">
        <div className="flex justify-center p-[15px] mb-[10px] border border-gray-400 rounded-[10px] text-[15px] font-semibold text-[#222] cursor-pointer transition hover:scale-95">
          <span className="relative top-[2px] mr-4">
            <IoLogoFacebook />
          </span>
          <button type="button">Login with Facebook</button>
        </div>

        <div className="flex justify-center p-[15px] mb-[10px] border border-gray-400 rounded-[10px] text-[15px] font-semibold text-[#222] cursor-pointer transition hover:scale-95">
          <span className="relative top-[2px] mr-4">
            <FcGoogle />
          </span>
          <button type="button">Login with Google</button>
        </div>
      </div>

      <p className="text-center mt-[10px] text-[15px] font-bold">
        Don&#39;t have an account?{' '}
        <Link href="/registration" className="text-[#ffa500] font-extrabold">
          Sign up
        </Link>
      </p>
    </div>
  );
}
