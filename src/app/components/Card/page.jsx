"use client"
import heroImage from "../../../../public/landingPage/hero.jpg";
import Image from "next/image";

export default function Card() {
  return (
    <div className='w-[350px] h-[380px] rounded-[20px] shadow-[10px_10px_20px_rgba(0,0,0,0.2)] overflow-hidden bg-[#ffffff] cursor-pointer '>
      <div>
        <Image src={heroImage} alt="Event Image" className="w-full h-[200px] bg-cover bg-center rounded-tr-[20px] rounded-tl-[20px] mb-[10px] cursor-pointer"/>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-[10px]">SWBS MTV The Kpop Show Ticket Package</h3>
        <p className="pl-[10px]">Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
        
      </div>
  </div>
  )
}