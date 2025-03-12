"use client";
import Image from 'next/image';
import Link from 'next/link';
import categoryImage from '../../../../public/img/category.png';
import NavBar from "../../components/NavBar/page.jsx";
import style from "./main.module.css";
import { FaAngleDown,  FaAngleLeft ,  FaAngleRight  } from "react-icons/fa6";


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

      <div className={style.link}>
        <ol>
          <li>
            <Link href="#">Location</Link>
            <FaAngleDown className={style.icon}/>
          </li>
          <li>
            <Link href="#">date</Link>
            <FaAngleDown className={style.icon}/>
          </li>
        </ol>
      </div>

      <section id={style.section} className={style.popularEvents}>
        <div className={style.sectionHeader}>
          <h1>Most popular events</h1>
          <div>
            <ul  className={style.arrowIcons}>
              <li>
                <Link href="#">
                  <FaAngleLeft />
                </Link>
              </li>
              <li>
               <Link href="#">
                 <FaAngleRight />
                </Link> 
              </li>
            </ul>      
          </div>
          <div className={style.eventCards}>
            
          </div>
        </div>
      </section>
    </main>
    
    </>
  )
}

export default Music;
