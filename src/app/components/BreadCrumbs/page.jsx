"use client"
import Link from "next/link";
import style from "./crumbs.module.css"

export default function BreadCrumbs() {
  return (
    <div className={style.breadCrumbs}>
      <ul className="flex">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Nigeria</Link>
        </li>
        <li>
          <Link href="#">Lagos</Link>
        </li>
        <li>
          <Link href="#">Events in Lagos</Link>
        </li>
        <li>
          <Link href="#">Music</Link>
        </li>
      </ul>
    </div>
  )
}