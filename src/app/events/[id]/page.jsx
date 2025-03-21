'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import { CiFlag1 } from "react-icons/ci";

// import eventThumbnail from '/EventThumbnail.jpg'

const EventDetailPage = () => {
    const id = useParams()

    const tags = [
        "Online Events",
        "Things To Do Online",
        "Online Classes",
        "Online Business Classes",
        "#taxes",
        "#assetprotection",
        "#estateplanning",
        "#taxprep",
        "#realestateinvestor",
        "#realestateeducation",
        "#stock_market",
        "#real_estate_investing",
        "#financial_education",
        "#tax_planning"
    ];


    return (
        <main className=''>
            <h1 className='text-center font-bold text-4xl mt-8'>Event Detail</h1>
            <section className='px-12 bg-red-30 py-4'>
                <Image src='/temp/EventThumbnail.jpg' width={700} height={0} layout='intrinsic' className='rounded-xl mx-auto w-full lg:w-[800px]' />
            </section>

            <section className='w-full relative'>
                <section className='lg:w-[60%] mx-8 lg:mx-24 px-6 my-3 '>
                    <div className="">
                        <span className='flex items-center bg-[#FEEDEA] w-max p-1 gap-1 font-semibold text-sm'>
                            <Image src='/temp/Fire.svg' width={16} height={0} layout="intrinsic" /> Few tickets left
                        </span>
                        <h6 className='font-semibold my-2'>Monday, March 3</h6>
                        <h1 className='font-bold max-sm:text-3xl text-4xl lg:text-5xl'>March LIVESTREAM 3-Day Asset Protection & Wealth Creation Summit</h1>
                        <p className='text-sm my-4'>Join Thousands that Have Attended the 3-Day Asset Protection & Wealth Creation Summit Now Available FREE ONLINE!</p>
                    </div>

                    <div className="flex bg-[#f8f7fa] flex-col md:flex-row gap-2 py-4 px-4 justify-between">
                        <div className="flex flex-col md:flex-row gap-3">
                            <Image src='/temp/Protect.svg' width={50} height={0} className='rounded-full' />
                            <div className="">
                                <p>By <span className='font-bold'>Protect Wealth Academy . 3.1k </span> followers</p>
                                <p className='bg-red-300 w-max p-1 rounded-md'><span className='font-bold'>13.3k</span> attendees hosted 📈</p>
                            </div>
                        </div>
                        <button className='bg-blue-500 text-white px-12 rounded-lg'>Follow</button>
                    </div>
                </section>

                <section className='border-2 hidden lg:block lg:w-72  rounded shadow-lg p-3 absolute top-0 right-36'>
                    <div className="flex flex-col justify-center items-center">
                        <p className='text-[18px] font-bold my-4'>Price</p>
                        <button className='bg-[#f05537] w-full h-12 flex justify-center items-center rounded text-white px-4 py-6 font-bold'>Reserve a spot</button>
                    </div>
                </section>
            </section>

            <section className='lg:w-[60%] mx-8 lg:mx-24 px-6 my-12 '>
                <div className="">
                    <h3 className='font-bold text-xl'>Date and time</h3>
                    <p className='bold'>March 17 · 4pm - March 19 · 11pm WAT</p>
                </div>

                <div className="my-12">
                    <h3 className='font-bold text-xl'>Location</h3>
                    <div className="bold">
                        Online
                    </div>
                </div>


            </section>

            <section className='lg:w-[60%] mx-8 lg:mx-24 px-6'>
                <h3 className='font-bold text-xl'>Good to know</h3>

                <div className="flex my-4">
                    <div className="shadow p-2 rounded-lg mr-4 min-h-60 w-60">
                        <h3 className='font-bold text-lg'>Highlights</h3>
                        <ul>
                            <li>
                                <Image />
                                <p>2 days, 7 hours</p>
                            </li>
                            <li>
                                <Image />
                                <p>Online</p>
                            </li>
                        </ul>
                    </div>

                    <div className="shadow p-2 rounded-lg mr-4 min-h-60 w-60">
                        <h3 className='font-bold text-lg'>Refund Policy</h3>
                        <ul>
                            <li>Refunds up to 7 days before event</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='lg:w-[60%] mx-8 lg:mx-24 px-6'>
                <h3 className='my-8 font-bold text-lg'>About this event</h3>
                <p>Welcome to the LIVESTREAM 3-Day Asset Protection & Wealth Creation Summit! Get ready to learn valuable strategies to safeguard your assets and grow your wealth from the comfort of your own home. Join us online s for three days of expert speakers, interactive workshops, and opportunities to ask leading attorneys questions. Don't miss out on this unique opportunity to take control of your financial future. Register now!</p>
            </section>

            <section className='lg:w-[60%] mx-8 lg:mx-24 px-6'>
                <h3 className='font-bold text-lg my-8'>Tags</h3>
                <div className="flex flex-wrap gap-1">
                    {tags.map(tag => (
                        <p className='text-sm p-2 bg-[#eeedf2] rounded-full' key={tag}>
                            {tag}
                        </p>
                    ))}
                </div>
            </section>

            <section className='lg:w-[60%] mx-8 px-6 my-8 '>
                <h3 className='text-lg font-bold my-8'>Organized by</h3>

                <div className="bg-[#f6f7fa] p-5 rounded-lg w-full">
                    <div className="flex flex-col md:flex-row justify-between mb-8">
                        <div className="flex flex-col md:flex-row gap-2">
                            <Image src='/temp/Protect.svg' width={50} height={0} className='rounded-full' />
                            <div className="">
                                <h3>Protect Wealth Academy</h3>
                                <p><span className='font-bold'>3.1k</span> followers</p>
                                <p><span className='font-bold'>13.3k</span> attendees hosted</p>
                            </div>
                        </div>
                        <div className="">
                            <button className='text-blue-500 mr-6 font-bold'>Contact</button>
                            <button className='bg-blue-500 text-white py-4 px-6 rounded'>Follow</button>
                        </div>
                    </div>
                    <p>We bring together many of the nations leading authorities on legal and financial strategies that will make you more secure, financially stable and give you peace of mind.</p>
                </div>

            </section>

            <section>
                <div className="w-[60%] mx-8  my-8 flex justify-center items-center gap-2">
                    <CiFlag1 color='#3b82f6' />
                    <p className='text-blue-500'>Report this event</p>
                </div>
            </section>


        </main>
    )
}

export default EventDetailPage