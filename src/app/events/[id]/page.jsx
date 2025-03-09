'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

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
        <>
            <section className='bg-red-300 py-4'>
                <Image src='/temp/EventThumbnail.jpg' width={'700'} height={0} layout='intrinsic' className='rounded-xl mx-auto w-full lg:w-[800px]' />
            </section>

            <section className='bg-blue-100 my-3'>
                <div className="">
                    <span className='flex items-center bg-[#FEEDEA] w-max p-1 gap-1 font-semibold text-sm'>
                        <Image src='/temp/Fire.svg' width={16} height={0} layout="intrinsic" /> Few tickets left
                    </span>
                    <h6 className='font-semibold my-2'>Monday, March 3</h6>
                    <h1 className='font-bold text-5xl'>March LIVESTREAM 3-Day Asset Protection & Wealth Creation Summit</h1>
                    <p className='text-sm'>Join Thousands that Have Attended the 3-Day Asset Protection & Wealth Creation Summit Now Available FREE ONLINE!</p>
                </div>

                <div className="">
                    <Image src='/temp/Protect.svg' width={5} height={0} />
                    <div className="">
                        <p>By Protect Wealth Academy . 3.1k followers</p>
                        <p>13.3k attendees hosted 📈</p>
                    </div>
                    <button>Follow</button>
                </div>
            </section>

            <section>
                <div className="">
                    <h3>Date and time</h3>
                    <p>
                        March 17 · 4pm - March 19 · 11pm WAT
                    </p>
                </div>

                <div className="">
                    <h3>Location</h3>
                    <div className="">
                        Online
                    </div>
                </div>
            </section>

            <section>
                <h3>Good to know</h3>

                <div className="">
                    <h3>Highlights</h3>
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

                <div className="">
                    <h3>Refund Policy</h3>
                    <ul>
                        <li>Refunds up to 7 days before event</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>About this event</h3>
            </section>

            <section>
                <h3>Tags</h3>
                <div className="">
                    {tags.map(tag => (
                        <p key={tag}>
                            {tag}
                        </p>
                    ))}
                </div>
            </section>

            <section>
                <h3>Organized by</h3>

                <div className="">
                    <Image />
                    <div className="">
                        <h3>Protect Wealth Academy</h3>
                        <p>3.1k followers</p>
                        <p>13.3k attendees hosted</p>
                    </div>

                    <div className="">
                        <button>Contact</button>
                        <button>Follow</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="">
                    <Image />
                    <p>Report this event</p>
                </div>
            </section>
        </>
    )
}

export default EventDetailPage