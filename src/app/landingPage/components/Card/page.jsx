"use client"
import heroImage from "../../img/hero.jpg";
import Image from "next/image";
import style from "./card.module.css"

export default function Card() {
  return (
    <div className={style.eventCard}>
      <div className={style.eventCardImage}>
        <Image src={heroImage} alt="Event Image" />
      </div>
      <div className={style.eventCardInfo}>
        <h3>SWBS MTV The Kpop Show Ticket Package</h3>
        <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
        
      </div>
  </div>
  )
}