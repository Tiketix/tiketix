"use client"

import Image from 'next/image'
import React from 'react'
import style from "./blog.module.css"
import heroImage from "../../../../public/landingPage/hero.jpg"

const BlogCard = ({ heading, content }) => {
  return (
    <>
      <div className={style.blogCard}>
        <div className={style.blogCardImage}>
          <Image src={heroImage} alt="Blog Image" />
        </div>
        <div className={style.blogCardInfo}>
          <h3>{heading}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}

export default BlogCard
