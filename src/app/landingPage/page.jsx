"use client"

import Link from "next/link";
import Image from "next/image";
import style from "../modules/landingPage.module.css";
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
    

    <div className="bg-[#ffa500] bg-cover bg-center w-full h-screen p-4 md:p-8 flex justify-center items-center text-white">
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

    <div className="flex w-[70%] h-[110px] self-center justify-around bg-[#ce9428] items-center mx-auto mb-8 p-3 rounded-[20px] relative bottom-[50px]">
      <div className={style.inputBox}>
        <p className="text-white">Search Event</p>
        <input type="text" className="h-6 bg-transparent"/>
      </div>
      <div className={style.inputBox}>
        <p className="text-white">Place</p>
        <input type="text" className="h-6 bg-transparent"/>
      </div>
      <div className={style.inputBox}>
        <p className="text-white">Time</p>
        <input type="text" className="h-6 bg-transparent"/>
      </div>
    </div>

    <main>
      <section className="mx-auto my-0 w-[90%]">
        <div className="flex justify-between mb-16">
          <h2 className="text-[2rem] font-black">Upcoming Events</h2>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="bg-[#e78c2a] rounded-[50px] py-2 px-4 text-white">Weekdays</Link>
            </li>
            <li>
              <Link href="#" className="bg-[#e78c2a] rounded-[50px] py-2 px-4 text-white">Event Type</Link> 
            </li>
            <li>
              <Link href="#" className="bg-[#e78c2a] rounded-[50px] py-2 px-4 text-white">Any Type</Link> 
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <div className="text-center my-20">
        <Link href="#" className="bg-transparent border-2 border-[#ffa500] rounded-[50px] py-5 px-[50px] font-extrabold transition  ease-in-out duration-300 hover:bg-[#ffa500] hover:text-white">Load more....</Link>
      </div>

      <section className="flex w-full px-5 py-8 bg-[#d89246] mb-8">
        <div className="text-center w-full text-white">
          <h2>Make Your own Event</h2>
          <p>Are you an event organizer? Create your event and sell tickets with us</p>
          <button className="mt-8 bg-[#ffa500] rounded-[50px] w-[400px] text-center text-white p-[10px] font-extrabold cursor-pointer transition ease-in-out duration-200 hover:bg-[#fdba74]">Create Event</button>
        </div>
      </section>

      <section id={style.section}>
        <div className={style.sectionHeader}>
          <h1>Join These Brands</h1>
          <p>We've had pleasure of working with industry-defining brands. These are just some of them</p>
        </div>

        <div className={style.brandLogo}>

        </div>
      </section>

      <section id={style.section}>
        <div className={style.sectionHeader}>
          <h1>Blog</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, vitae!</p>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 px-20'>
          <BlogCard heading={"6 Strategies to Find your Conference Keynote and Other Speakers"} content={"Look no further! Our SBS The Show tickets are the simplest way for you to experience a live kpop recording."}/>
          <BlogCard heading={"How Successfully Used Paid Marketing to Drive Increamental Ticket Sales"} content={"Look no further! Our SBS The Show tickets are the simplest way for you to experience a live kpop recording."}/>
          <BlogCard heading={"Introducing Workspaces: Work smarter, not harder with new navigation."} content={"Look no further! Our SBS The Show tickets are the simplest way for you to experience a live kpop recording."}/>
        </div>
      </section>

      <div className="text-center my-20">
        <Link href="#" className="bg-transparent border-2 border-[#ffa500] rounded-[50px] py-5 px-[50px] font-extrabold transition  ease-in-out duration-300 hover:bg-[#ffa500] hover:text-white">Load more</Link>
      </div>
    </main>
    <Footer />
    </>
  );
}