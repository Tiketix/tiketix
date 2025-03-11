"use client";
import Image from 'next/image';
import Link from 'next/link';
import categoryImage from '../../../../public/img/category.png';
import NavBar from "../../components/NavBar/page.jsx";
import style from "./main.module.css";


const Music = () => {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main className={style.mainContent}>
     <div className="flex  justify-between bg-orange-500 pr-0 pl-12 ">
        <div className={style.categoryInfo} >
          <h1 className="text-6xl font-extrabold text-white">
            Music events
          </h1>
          <p className="text-lg text-white">
            in Lagos, Nigeria
          </p>
          <p className="text-lg text-white">Discover the best Music events in your area online</p>
        </div>
        <div className="category-image max-h-96">
          <Image src={categoryImage} alt="image" width={400} height={400} />
        </div>
      </div>

      <div className="locations flex">
        <ol>
          <li>
            <Link href="#" className="py-2 px-4 bg-transparent">Location</Link>
          </li>
          <li>
            <Link href="#">date</Link>
          </li>
        </ol>
      </div>
    </main>
    
    </>
  )
}

export default Music;
