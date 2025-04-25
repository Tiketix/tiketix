"use client"

import React from 'react'
import NavBar from '../components/NavBar/page.jsx'
import Footer from '../components/Footer/page.jsx'
import Image from 'next/image' 
import image from '../../../public/img/aboutUsBanner.jpg'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main  className='flex gap-3 justify-center my-[100px]'>
        <section className="banner w-1/2 p-4">
          <Image
            src={image}
            alt="About Us Banner"
            className='rounded-sm w-full'
          />
        </section>
        
        <section className="aboutUsContent w-1/2 py-4">
          <div className="aboutUsText py-14">
            <h1 className='text-[#ff6600] text-3xl mb-2'>A Bit</h1>
            <h2 className='text-4xl mb-3 font-semibold text-[#003366]'>ABOUT US</h2>

            <p className='mb-2'>
              <span><Link href="/"  className='text-[#ff6600] transition ease-in-out hover:underline hover:text-[#f5673c] active:text-[#c43030]'>TIKEtix</Link></span> is your all-in-one destination for discovering and attending events with ease.
              Whether you're a concert lover, a corporate professional, or someone simply looking to explore new experiences, our platform is designed to simplify ticketing and elevate every step of your event journey.
            </p>
            <p className='mb-2'>
              We believe that finding and securing tickets should be seamless, fast, and stress-free. That's why <span><Link href="/" className='text-[#ff6600] transition ease-in-out hover:underline hover:text-[#f5673c] active:text-[#c43030]'>TIKEtix</Link></span> offers a streamlined digital ticketing experience - no paper, no hassle. From personalized event suggestions to instant access to your tickets, we make it easier than ever to connect with the events you love.
            </p>
            <p>
              At <span><Link href="/" className='text-[#ff6600] transition ease-in-out hover:underline hover:text-[#f5673c] active:text-[#c43030]'>TIKEtix</Link></span>, we're commited to bridging the gap between event organizers and attendees, ensuring that every interaction is smooth, secure and enjoyable. Our platform is designed with you in mind, providing a user-friendly interface that allows you to browse, purchase, and manage your tickets all in one place.
            </p>
          </div>

          <div className="explore">
            <p className='mb-12'>Discover more. Experience better. With <span><Link href="/" className='text-[#ff6600] transition ease-in-out hover:underline hover:text-[#f5673c] active:text-[#c43030]'>TIKEtix</Link></span></p>

            <button className="bg-[#008080] p-[15px_20px_15px_20px] text-white rounded-tl-lg rounded-br-lg cursor-pointer transition ease-in-out duration-200 hover:bg-[#003366]">EXPLORE MORE</button>
          </div>
          
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default page
