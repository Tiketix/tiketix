"use client"

import Link from "next/link";
import Image from "next/image";
import style from "../modules/landingPage.module.css";
import heroImage from "../../../public/landingPage/hero.jpg";
import Card from "../components/Card/page.jsx";
import NavBar from "../components/NavBar/page.jsx";
import Footer from"../components/Footer/page.jsx";
import BlogCard from "../components/BlogCard/page.jsx";
import { FaAngleDown } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <>
      <header className="mt-0">
        <NavBar />
      </header>

      <div className="bg-[#ff6600] bg-cover bg-center w-full h-screen p-4 md:p-8 flex flex-col md:flex-row justify-center items-center text-white">
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl">
          <div className="w-full md:w-1/2 p-4">
            <Image src={heroImage} alt="Hero Image" className="w-full h-auto" />
          </div>

          <div className="w-full md:w-1/2 p-4 md:p-14">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              SWBS MTV The Kpop Show Ticket Package
            </h1>
            <p className="text-white my-6 md:my-10 text-sm md:text-base">
              Look no further! Our SBS The Show tickets are the simplest way for
              you to experience a live Kpop recording.
            </p>
            <div className="flex flex-col md:flex-row w-full gap-4">
              <Link href="/Order-Detail" className="bg-[#003366] text-white font-bold py-3 md:py-4 rounded-full w-full md:w-1/2 transition duration-100 hover:shadow-2xl hover:bg-[#008080] ease-in-out text-center">
                Get Ticket
              </Link>

              <Link href="/aboutUs" className="bg-[#003366] text-white font-bold py-3 md:py-4 rounded-full w-full md:w-1/2 transition duration-100 hover:shadow-2xl hover:bg-[#008080] ease-in-out text-center">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-[90%] sm:w-[80%] h-auto sm:h-[110px] bg-[#ce9428] items-center mx-auto mb-8 p-3 rounded-[20px] relative -top-[25px] sm:bottom-[50px] gap-4">
        <div className={style.inputBox}>
          <p className="text-white">Search Event</p>
          <input type="text" className="h-6 bg-transparent w-full" />
        </div>
        <div className={style.inputBox}>
          <p className="text-white">Place</p>
          <input type="text" className="h-6 bg-transparent w-full" />
        </div>
        <div className={style.inputBox}>
          <p className="text-white">Time</p>
          <input type="text" className="h-6 bg-transparent w-full" />
        </div>
      </div>

      <main>
        <section className="mx-auto w-[95%]">
          <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl mb-4 md:mb-3 font-semibold text-[#003366]">
              Upcoming Events
            </h2>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
              {['Weekdays', 'Event Type', 'Any Type'].map((item, idx) => (
                <li className="flex items-center justify-between" key={idx}>
                  <Link
                    href="#"
                    className="bg-[#d1cbcb] rounded-[50px] py-2 px-4 md:py-3 md:px-5 pr-14 text-black font-medium"
                  >
                    {item}
                  </Link>
                  <span className="relative top-1 md:top-4 right-3 md:right-8">
                    <FaAngleDown />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array(6).fill().map((_, i) => (
              <Link href="/events/1" key={i} target="_blank">
                <Card />
              </Link>
            ))}
          </div>
        </section>

        <div className="text-center my-20">
          <Link
            href="#"
            className="bg-transparent border-2 border-[#ff6600] rounded-[50px] py-3 px-10 md:py-5 md:px-[50px] font-bold transition ease-in-out duration-300 hover:bg-[#ff6600] hover:text-white"
          >
            Load more....
          </Link>
        </div>

        <section className="flex flex-col items-center text-center px-4 py-8 bg-[#f18b47] mb-8">
          <div className="text-white max-w-3xl">
            <h2 className="text-xl md:text-2xl font-bold">Make Your own Event</h2>
            <p className="text-sm md:text-base mt-2">
              Are you an event organizer? Create your event and sell tickets with us
            </p>
            <button className="mt-6 bg-[#ffa500] rounded-[50px] w-full sm:w-[300px] text-white p-3 font-extrabold cursor-pointer transition ease-in-out duration-200 shadow-lg hover:bg-[#fdba74] hover:shadow-2xl">
              Create Event
            </button>
          </div>
        </section>

        <section id={style.section} className="px-4">
          <div className={style.sectionHeader}>
            <h1 className="text-xl md:text-2xl">Join These Brands</h1>
            <p>
              We've had pleasure of working with industry-defining brands. These
              are just some of them
            </p>
          </div>
          <div className={style.brandLogo}></div>
        </section>

        <section id={style.section} className="px-4">
          <div className={style.sectionHeader}>
            <h1 className="text-xl md:text-2xl">Blog</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              vitae!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-0 md:px-20">
            {[
              "6 Strategies to Find your Conference Keynote and Other Speakers",
              "How Successfully Used Paid Marketing to Drive Increamental Ticket Sales",
              "Introducing Workspaces: Work smarter, not harder with new navigation."
            ].map((heading, idx) => (
              <BlogCard
                key={idx}
                heading={heading}
                content={"Look no further! Our SBS The Show tickets are the simplest way for you to experience a live kpop recording."}
              />
            ))}
          </div>
        </section>

        <div className="text-center my-20">
          <Link
            href="#"
            className="bg-transparent border-2 border-[#ff6600] rounded-[50px] py-3 px-10 md:py-5 md:px-[50px] font-bold transition ease-in-out duration-300 hover:bg-[#ff6600] hover:text-white"
          >
            Load more
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}