"use client"

import React from 'react';
import style from "./footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className='bg-[#ff6600] p-[30px_50px_20px_50px] text-white'>
        <div className={style.footerMain}>
          <div className={style.footerContent}>
            <h3 className='mb-[30px] text-[25px] font-black'>Tiketix</h3>
            <p>Tiketix is a self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
          </div>

          <div className={style.eventsPlan}>
            <h3 className='mb-[30px] text-[25px] font-black'>Events Plan</h3>
            <ul>
              <li>Create setup</li>
              <li>Sell Tickets</li>
              <li>Online RSVP</li>
              <li>Online Events</li>
            </ul>
          </div>

          <div className={style.aboutTiketix}>
            <h3 className='mb-[30px] text-[25px] font-black'>Tiketix</h3>
            <ul>
              <li>About Us</li>
              <li>Press</li>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>How it works</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>

          <div className={style.footerSubscribe}>
            <h3 className='mb-[30px] text-[25px] font-black'>Stay In The Loop</h3>
            <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
            <div className='mt-[30px] flex justify-between w-full bg-white rounded-[50px] p-[3px]'>
              <input type="text" placeholder="Your email address" className='w-[150px] py-[5px] px-[10px] border-0 outline-0 rounded-[50px] text-[#222]' />
              <button className='p-[10px] bg-[#003366] rounded-[50px]'>Subscribe Now</button>
            </div>
          </div>

        </div>
        <hr />
        <p className="text-center pt-5 text-sm">Copyright © 2025 Tiketix.</p>
      </footer>
    </>
  )
}

export default Footer;
