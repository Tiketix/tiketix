"use client"

import Link from "next/link"

export default function NavBar() {
  // This component is a navigation bar that contains links to different sections of the page and login/signup buttons.
  const navItems = [
    { label: "Schedule", href: "#schedule" },
    { label: "Speakers", href: "#speakers" },
    { label: "Ticket", href: "#ticket" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className="flex justify-between items-center px-8 py-8 text-white bg-[#ff6600] shadow-[0_0_10px_rgba(0,0,0,0.1)] fixed top-0 w-full z-[1000]">
      <h1 className="text-lg font-bold text-white">
        <Link href="/">TIKETIX</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="px-4 py-2 rounded-full text-white bg-[#003366] hover:text-white hover:shadow-lg hover:scale-95 hover:bg-[#008080] transition duration-300 ease-in-out"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/registration"
              className="px-4 py-2 rounded-full text-white bg-[#003366] hover:text-white hover:shadow-lg hover:scale-95 hover:bg-[#008080] transition duration-300 ease-in-out"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}