"use client"
import Link from "next/link"
import style from "./nav.module.css"

export default function NavBar() {
  return (
    <div className={style.navBar}>
      <h1 className="text-lg font-bold text-white">TIKETIX</h1>
      <nav>
        <ul className="flex space-x-4">
          {["Schedule", "Speakers", "Ticket", "Contact"].map((item) => (
            <li key={item}>
              <Link href="#">
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link  href="/login" className="px-4 py-2 rounded-full hover:text-orange-400 hover:bg-white transition duration-200" >
              Login
            </Link>
          </li>
          <li>
            <Link 
              href="/register" 
              className="px-4 py-2 rounded-full text-dark text-orange-400 bg-white hover:text-white hover:bg-transparent transition duration-200"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}