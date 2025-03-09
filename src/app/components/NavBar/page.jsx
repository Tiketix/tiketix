"use client"
import Link from "next/link"
import style from "./nav.module.css"

export default function NavBar() {
  return(
    <div className={style.navBar}>
      <h1 className="text-lg font-bold text-white1">TIKETIX</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#">
              Schedule
            </Link>
          </li>
          <li>
            <Link href="#">
              Speakers
            </Link>
          </li>
          <li>
            <Link href="#">
              Ticket
            </Link>
          </li>
          <li>
            <Link href="#">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#" className="px-4 py-2 rounded-full hover:text-orange-400 hover:bg-white transition duration-2001">
              Login
            </Link>
          </li>
          <li>
            <Link href="#" className="px-4 py-2 rounded-full text-dark text-orange-400 bg-white hover:text-white hover:bg-transparent transition duration-2001">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}