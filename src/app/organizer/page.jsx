import Image from 'next/image'
import React from 'react'

const OrganizerOverviewPage = () => {
    return (
        <>
            <section className='text-center flex flex-col gap-3 p-5 mt-12'>
                <h1 className='font-bold text-5xl'>Where Event Organizers Grow</h1>
                <p>The all-in-one ticketing and discovery platform trusted by millions of organizers and attendees worldwide</p>
                <div className="">
                    <button className='bg-black text-white p-3 my-2 rounded-2xl mx-3'>Get started for free</button>
                    <button className='border-black border-2 p-3 rounded-2xl'>Contact Sales</button>
                </div>
                <div className="-mx-4 flex j">

                <Image src='/organizer/Hero.jpg' width={500} height={0} layout='intrinsic' className='mt-6 rounded-3xl mx-auto w-full md:w-[90%]' />
                </div>
            </section>

            <section className='px-6 md:px-12 mt-16 bg-[#f5f5f0]'>
                <h2 className='my-4 font-bold text-5xl'>Event hosting made easy</h2>
                <p>Easily create events for free on a platform that attendees love and trust</p>

                <div className="flex flex-col-reverse mt-12 gap-3 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <div className="">
                            {/* <Image /> */}
                            <h3 className='font-bold text-lg my-2'>Event Ticketing</h3>
                            <p className='text-[18px]'>Sell more tickets with customizable event pages and a seamless checkout experience for attendees on a trusted platform</p>
                        </div>
                        <div className="">
                            {/* <Image /> */}
                            <h3 className='font-bold text-lg my-2'>Reporting & Analytics</h3>
                            <p className='text-[18px]'>Learn more about your buyers and discover where sales are coming from with real-time analytics</p>
                        </div>
                        <div className="">
                            {/* <Image /> */}
                            <h3 className='font-bold text-lg my-2'>Organizer App</h3>
                            <p className='text-[18px]'>Check guests in, sell tickets at the door, and track data with our easy-to-use Eventbrite Organizer App</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <Image src='/organizer/Overview2.jpg' width={500} height={0} layout='' className='w-full lg:max-w-[800px] rounded-xl' />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-3 my-12">
                    <div className="w-full lg:w-1/2">
                        <Image src='/organizer/Overview3.png' width={500} height={0} layout='intrinsic' />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className='my-4 font-bold text-5xl'>The Event Budget Template You Need To Keep on Track</h2>
                        <p className='text-[18px]'>Our budget template is designed to make your finances as simple as possible. With our template, you can:</p>
                        <p className='block my-2 font-extrabold text-[#39364f] text-[18px]'>Visualise your event expenses with automatically generated charts</p>
                        <p className='block my-2 font-extrabold text-[#39364f] text-[18px]'>Compare your projected and actual costs at a glance</p>
                        <p className='block my-2 font-extrabold text-[#39364f] text-[18px]'>Identify your biggest expenses with clear cost breakdowns</p>
                        <button className='bg-black text-white rounded-full p-4 font-bold text-lg'>Download the template</button>
                    </div>
                </div>
            </section>

            <section className='px-6 md:px-12'>
                <h2 className='my-4 font-bold text-5xl'>Reach the right people</h2>
                <p>Grow your community on a marketplace where millions of people look for things to do.</p>
                <div className="flex flex-col-reverse lg:flex-row my-12">
                    <div className="w-full lg:w-1/2">
                        <div className="">
                            {/* <Image /> */}
                            <h4 className='font-bold text-lg'>Attendee Discovery</h4>
                            <p className='text-[18px] my-2'>Personalized recommendations are tailored to attendees' interests and location, matching them with events they’d be most interested in attending</p>
                        </div>
                        <div className="">
                            {/* <Image /> */}
                            <h4 className='font-bold text-lg'>Attendee Discovery</h4>
                            <p className='text-[18px] my-2'>Personalized recommendations are tailored to attendees' interests and location, matching them with events they’d be most interested in attending</p>
                        </div>
                        <div className="">
                            {/* <Image /> */}
                            <h4 className='font-bold text-lg'>Attendee Discovery</h4>
                            <p className='text-[18px] my-2'>Personalized recommendations are tailored to attendees' interests and location, matching them with events they’d be most interested in attending</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Image src='/organizer/Overview4.png' width={500} height={0} />
                    </div>
                </div>
            </section>

            <section className='px-12 text-center'>
                <h2 className='font-black text-4xl md:text-6xl'>All the tools you need to host an event & grow your community</h2>
                <div className="my-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="">
                        {/* <Image /> */}
                        <h4 className='font-bold underline text-[20px]'>Event Ticketing</h4>
                        <p className='text-[18px]'>Everything you need to sell tickets for in-person or online events</p>
                    </div>
                    <div className="">
                        {/* <Image /> */}
                        <h4 className='font-bold underline text-[20px]'>Ads</h4>
                        <p className='text-[18px]'>Create no-hassle ads that promote your event on Tiketix</p>
                    </div>
                    <div className="">
                        {/* <Image /> */}
                        <h4 className='font-bold underline text-[20px]'>Marketing Tools</h4>
                        <p className='text-[18px]'>All the event marketing tools you need in one place</p>
                    </div>
                    <div className="">
                        {/* <Image /> */}
                        <h4 className='font-bold underline text-[20px]'>Payments</h4>
                        <p className='text-[18px]'>Easily collect and simplify event payments</p>
                    </div>
                </div>
            </section>

            <section className='px-6 md:px-12 flex flex-col-reverse lg:flex-row gap-3 my-8'>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="">
                        <h2 className='font-black text-5xl my-2 uppercase'>Grow eventfully</h2>
                        <p className='my-2 text-[18px]'>Explore all the built-in tools you need to start, run, and grow your business with events.</p>
                        <div className="">
                            <button className='bg-black my-2 text-white rounded-full py-3 px-5 font-bold text-lg mr-3'>Get Started for free</button>
                            <button className='border-black my-2 border-2 text-blacl rounded-full py-3 px-5 font-bold text-lg'>Contact Sales</button>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/">
                    <Image src='/organizer/Overview5.png' width={500} height={0} className='w-full' />
                </div>
            </section>
        </>
    )
}

export default OrganizerOverviewPage