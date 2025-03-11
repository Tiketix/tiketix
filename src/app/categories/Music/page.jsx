"use client";
import Image from 'next/image';
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
     <div className="flex  justify-between bg-orange-500 pr-0 pl-9 ">
        <div className="category-info px-0 py-10" >
          <h1 className="text-lg font-extrabold text-white">
            Music events
          </h1>
          <p className="text-sm text-white">
            in Lagos, Nigeria
          </p>
          <p className="text-sm text-white">Discover the best Music events in your area online</p>
        </div>
        <div className="category-image">
          <Image src={categoryImage} alt="image" width={300} height={300} />
        </div>
      </div>
    </main>
    
    </>
  )
}

export default Music;
