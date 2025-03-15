"use client"

import Link from "next/link";
import Image from "next/image";
import style from "./modules/nav.module.css";
import style2 from "./modules/hero.module.css";
import heroImage from "../../../public/landingPage/hero.jpg";
import Card from "../components/Card/page.jsx";
import NavBar from "../components/NavBar/page.jsx";
import Footer from"../components/Footer/page.jsx";
import BlogCard from "../components/BlogCard/page.jsx";

export default function LandingPage() {

  return(
    <>
    <header>
      <NavBar />
    </header>
    

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
          <BlogCard heading={"6 Strategies to Find your Conference Keynote and Other Speakers"} content={"Look no further! Our SBS The Show tickets are the simplest way for you to experience a live kpop recording."}/>
          <BlogCard heading={"How Successfully Used Paid Marketing to Drive Increamental Ticket Sales"} content={"Look no further! Our SBS The Show tickets are the simplest way for you to experience a live kpop recording."}/>
          <BlogCard heading={"Introducing Workspaces: Work smarter, not harder with new navigation."} content={"Look no further! Our SBS The Show tickets are the simplest way for you to experience a live kpop recording."}/>
        </div>
      </section>

      <div className={style2.more}>
        <Link href="#">Load more</Link>
      </div>
    </main>
    <Footer />
    </>
  );
}