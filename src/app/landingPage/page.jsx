"use client"
import Link from "next/link";
import Image from "next/image";
import style from "./modules/nav.module.css";
import style2 from "./modules/hero.module.css";
import heroImage from "./img/hero.jpg";

export default function LandingPage() {

  return(
    <>
    <div className={style.navBar}>
      <h1 className="text-lg font-extrabold text-white">TIKETIX</h1>
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
            <Link href="#"  className="px-4 py-2 rounded-full hover:text-orange-400 hover:bg-white  transition duration-200">
              Login
            </Link>
          </li>
          <li> 
            <Link href="#"  className="text-orange-400 bg-white px-4 py-2 rounded-full hover:text-white hover:bg-transparent transition duration-200">
              sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    <div className={style2.hero}>
      <div className="flex gap-4">
        <div className="w-1/2 p-4">
          <Image src={heroImage} alt="Hero Image"  />
        </div>
        
        <div className="w-1/2 p-14">
          <h1 className="text-4xl font-extrabold text-white">SWBS MTV The Kpop Show Ticket Package</h1>
          <p className="text-white my-10">Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
          <div className="flex w-full gap-4">
           <button className="bg-orange-400 text-white font-bold py-4 px-3 rounded-full w-1/2 hover:bg-transparent hover:border-2 hover:border-white transition duration-100">Get Ticket</button>
           <button className="bg-transparent  text-white font-bold border-2 border-white py-4 px-3 rounded-full w-1/2  hover:border-0 hover:bg-orange-400 transition duration-100">Learn more</button>
          </div>
        </div>
        
      </div>
    </div>

    <div className={style2.inputContainer}>
      <div className={style2.inputBox}>
        <p className="text-white">Search Event</p>
        <input type="text" className="h-6 bg-transparent"/>
      </div>
      <div className={style2.inputBox}>
        <p className="text-white">Place</p>
        <input type="text" className="h-6 bg-transparent"/>
      </div>
      <div className={style2.inputBox}>
        <p className="text-white">Time</p>
        <input type="text" className="h-6 bg-transparent"/>
      </div>
    </div>

    <main id="content">
      <section className={style2.eventSection}>
        <div className={style2.sectionHeader}>
          <h2>Upcoming Events</h2>
          <ul className="flex space-x-4">
            <li>Weekdays</li>
            <li>Event Type</li>
            <li>Any Type</li>
          </ul>
        </div>

        <div className={style2.eventCards}>
          <div className={style2.eventCard}>
            <div className={style2.eventCardImage}>
              <Image src={heroImage} alt="Event Image" />
            </div>
            <div className={style2.eventCardInfo}>
              <h3>SWBS MTV The Kpop Show Ticket Package</h3>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
              
            </div>
          </div>

          <div className={style2.eventCard}>
            <div className={style2.eventCardImage}>
              <Image src={heroImage} alt="Event Image" />
            </div>
            <div className={style2.eventCardInfo}>
              <h3>SWBS MTV The Kpop Show Ticket Package</h3>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
              
            </div>
          </div>

          <div className={style2.eventCard}>
            <div className={style2.eventCardImage}>
              <Image src={heroImage} alt="Event Image" />
            </div>
            <div className={style2.eventCardInfo}>
              <h3>SWBS MTV The Kpop Show Ticket Package</h3>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
              
            </div>
          </div>

          <div className={style2.eventCard}>
            <div className={style2.eventCardImage}>
              <Image src={heroImage} alt="Event Image" />
            </div>
            <div className={style2.eventCardInfo}>
              <h3>SWBS MTV The Kpop Show Ticket Package</h3>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
              
            </div>
          </div>

          <div className={style2.eventCard}>
            <div className={style2.eventCardImage}>
              <Image src={heroImage} alt="Event Image" />
            </div>
            <div className={style2.eventCardInfo}>
              <h3>SWBS MTV The Kpop Show Ticket Package</h3>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
              
            </div>
          </div>

          <div className={style2.eventCard}>
            <div className={style2.eventCardImage}>
              <Image src={heroImage} alt="Event Image" />
            </div>
            <div className={style2.eventCardInfo}>
              <h3>SWBS MTV The Kpop Show Ticket Package</h3>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
              
            </div>
          </div>
        </div>
      </section>

      <div className={style2.more}>
        <Link href="#">Load more....</Link>
      </div>

      <section className={style2.createEvent}>
        <div className={style2.createEventInfo}>
          <h2>Make Your own Event</h2>
          <p>Are you an event organizer? Create your event and sell tickets with us</p>
          <button className={style2.createEventButton}>Create Event</button>
        </div>
      </section>

      <section id={style.section} className={style.brands}>
        <div className={style.sectionHeader}>
          <h1>Join These Brands</h1>
          <p>We've had pleasure of working with industry-defining brands. These are just some of them</p>
        </div>

        <div className={style.brandLogo}>

        </div>
      </section>

      <section id={style.section} className={style.blog}>
        <div className={style.sectionHeader}>
          <h1>Blog</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, vitae!</p>
        </div>
        <div className={style.blogCards}>
          <div className={style.blogCard}>
            <div className={style.blogCardImage}>
              <Image src={heroImage} alt="Blog Image" />
            </div>
            <div className={style.blogCardInfo}>
              <h3>6 Strategies to Find Your Conference Keynote and Other Speakers</h3>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
            </div>
          </div>

          <div className={style.blogCard}>
            <div className={style.blogCardImage}>
              <Image src={heroImage} alt="Blog Image" />
            </div>
            <div className={style.blogCardInfo}>
              <h3>How Successfully Used Paid Marketing to Drive Increamental Ticket Sales</h3>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
            </div>
          </div>

          <div className={style.blogCard}>
            <div className={style.blogCardImage}>
              <Image src={heroImage} alt="Blog Image" />
            </div>
            <div className={style.blogCardInfo}>
              <h3>Introducing Workspaces: Work smarter, not harder with new navigation</h3>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording .</p>
            </div>
          </div>
        </div>
      </section>

      <div className={style2.more}>
        <Link href="#">Load more</Link>
      </div>

      <footer id={style.footer}>
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

        <div className={style.stayConnectected}>
          <h3>Stay In The Loop</h3>
          <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
          <div className={style.subscribe}>
            <input type="text" placeholder="Enter your email address" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </footer>
        
    </main>
    </>
  );
}