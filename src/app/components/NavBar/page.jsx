"use client"

import Link from "next/link"

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-8 py-8 text-white bg-[#ff6600] shadow-[0_0_10px_rgba(0,0,0,0.1)] fixed top-0 w-full z-[1000]">
      <h1 className="text-lg font-bold text-white">
        <Link href="/">TIKETIX</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          {["Schedule", "Speakers", "Ticket", "Contact"].map((item) => (
            <li key={item}>
              <Link href="#">{item}</Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="px-4 py-2 rounded-full hover:text-orange-400 hover:bg-white transition duration-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/registration"
              className="px-4 py-2 rounded-full text-dark text-orange-400 bg-white hover:text-white hover:bg-transparent transition duration-200"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}