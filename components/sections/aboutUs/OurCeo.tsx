import Image from 'next/image'
import React from 'react'

const OurCeo = () => {
  return (
    <section className='py-20'>
        <div className='container 2xl:max-w-screen-xl 4xl:max-w-screen-2xl mx-auto px-5 bg-[#f2fcfe] rounded-[30px]'>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-10 items-end overflow-hidden'>
                <div className='sm:pl-5 mt-4 sm:mt-8'>
                    <h3 className=' mb-2 text-base md:text-xl opacity-60 underline-offset-4 underline'>
                        Founder, CEO
                    </h3>
                    <h2 className='text-2xl sm:text-4xl xl:text-5xl font-bold mb-3'>Dr. Ganesh Babu T</h2>
                    <p className='md:text-lg opacity-60'>Ganesh is a passionate chemist and a persistent technological problem solver. He amalgamates his years of experience and expertise on development of functional and high temperature ceramic & composite materials to Ceratattva’s wide product range.</p>
                    <ul className='font-medium mt-8 xl:my-12'>
                        <li className='relative after:absolute after:w-3 after:h-4 after:bottom-[-16px] after:left-10 after:bg-cyan-700 py-4 px-6 mb-4 bg-cyan-700 text-white rounded-full after:content-[""]'>Bagged 5+ government and industry backed technological projects.</li>
                        <li className='relative after:absolute after:w-3 after:h-4 after:bottom-[-16px] after:left-10 after:bg-cyan-700 py-4 px-6 mb-4 bg-cyan-700 text-white rounded-full'>Over 20+ publications and patents on advanced & functional ceramics.</li>
                        <li className=' py-4 px-6 bg-cyan-700 text-white rounded-full'>PhD from VSSC, ISRO in the field of ceramic materials for high temperature applications.</li>
                    </ul>
                </div>
                <div className='relative w-full h-[500px] rounded-xl'>
                    <Image 
                        src="/about-us/dr-ganesh-removebg.png"
                        alt='Our Ceo'
                        title='Dr. Ganesh Babu T'
                        fill
                        className='object-cover sm:object-contain object-bottom'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurCeo
