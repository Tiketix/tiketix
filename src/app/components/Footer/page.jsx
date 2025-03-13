"use client"

import React from 'react';
import style from "./footer.module.css"

const Footer = () => {
  return (
    <>
      <footer id={style.footer}>
        <div id={style.footerMain}>
          <div className={style.footerContent}>
            <h3>Tiketix</h3>
            <p>Tiketix is a self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
          </div>

          <div className={style.eventsPlan}>
            <h3>Events Plan</h3>
            <ul>
              <li>Create setup</li>
              <li>Sell Tickets</li>
              <li>Online RSVP</li>
              <li>Online Events</li>
            </ul>
          </div>

          <div className={style.aboutTiketix}>
            <h3>Tiketix</h3>
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
            <h3>Stay In The Loop</h3>
            <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
            <div className={style.subscribe}>
              <input type="text" placeholder="Your email address" />
              <button>Subscribe Now</button>
            </div>
          </div>

        </div>
        <hr />
        <p className="text-center py-5 text-sm">Copyright © 2025 Tiketix.</p>
      </footer>
    </>
  )
}

export default Footer;
