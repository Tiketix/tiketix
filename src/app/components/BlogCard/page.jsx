"use client"

import Image from 'next/image'
import React from 'react'
import heroImage from "../../../../public/landingPage/hero.jpg"

const BlogCard = ({ heading, content }) => {
  return (
    <>
      <div className='w-[300px] overflow-hidden bg-white '>
        <div>
          <Image src={heroImage} alt="Blog Image" className='w-full h-[200px] bg-cover bg-center rounded-[20px] mb-5' />
        </div>
        <div>
          <h3 className='text-2xl font-bold mb-5'>{heading}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}

export default BlogCard
