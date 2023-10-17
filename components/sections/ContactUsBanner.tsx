import Image from 'next/image';
import React from 'react'

const ContactUsBanner = () => {
  return (
    <section 
        className='h-[800px] sm:h-[720px] md:h-[700px] 3xl:h-[1000px] bg-fixed flex items-start pt-20 pb-12 lg:pb-16 3xl:pt-52 3xl:pb-32 bg-no-repeat shadow-lg bg-cover bg-white relative bg-[url("/contact-us.jpg")] bg-center bg-no-repeat after:content-[""] after:absolute after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0'
    >
        <div className='container mx-auto px-2 z-[9]'>
            <h3 className='mt-24 md:mt-32 text-white mb-2 text-base md:text-xl opacity-60 underline-offset-4 underline'>
                Have a question?
            </h3>
            <div className=' relative flex items-center'>
                <h2 className='text-white text-2xl sm:text-4xl xl:text-5xl font-bold'>Let&apos;s get in touch!</h2>
                <span className='ci-about__title absolute font-bold text-5xl sm:text-[6rem] md:text-[7.5rem] top-10 sm:top-16 left-0 bg-clip-text pointer-events-none select-none whitespace-nowrap bg-transparent bg-clip-text uppercase opacity-60 animate-bannerTextTransformation duration-300'>Ceratattva</span>
            </div>
            <div className='mt-20 sm:mt-40 bg-[rgba(0,0,0,0.8)] grid sm:grid-cols-2 md:grid-cols-3 gap-5 px-6 py-10'>
                <div className='flex items-center gap-2 shrink-0'>
                    <div className='relative w-16 h-16 bg-white m-2 shrink-0'>
                        <Image 
                            src="/icons/phone-svg2.svg"
                            alt='phone icon' 
                            fill
                            className='object-center object-cover'
                        />
                    </div>
                    <div className='text-white'>
                        <h5 className='text-lg mb-1 font-semibold'>Phone no</h5>
                        <span className='flex gap-1 flex-col items-center text-sm'>
                            <a href="tel:+91-8921299283" className='hover:opacity-80'>+91-8921299283</a>
                            <a href="tel:+91-9912426849" className='hover:opacity-80'>+91-9912426849</a>
                        </span>
                    </div>
                </div>
                <div className='flex items-center gap-2 shrink-0'>
                    <div className='relative w-16 h-16 bg-white m-2 shrink-0'>
                        <Image 
                        src="/icons/contact-svg.svg"
                        alt='contact 2'
                        fill
                        className='object-center object-cover'
                        />
                    </div>
                    <div className='text-white'>
                        <h5 className='text-lg mb-1 font-semibold'>Email us</h5>
                        <a href="mailto:info@ceratattva.com" className='truncate hover:overflow-visible hover:whitespace-normal'>info@ceratattva.com</a>
                    </div>
                </div>
                <div className='flex items-center gap-2 shrink-0'>
                    <div className='relative w-16 h-16 bg-white m-2 shrink-0'>
                        <Image 
                            src="/icons/location-svg.svg"
                            alt='location icon' 
                            fill
                            className='object-center object-cover'
                        />
                    </div>
                    <div className='text-white'>
                        <h5 className='text-lg mb-1 font-semibold'>CeraTattva InnoTech</h5>
                        <a href="https://www.google.com/maps/place/Northern+Arc+Capital+Limited/@12.990903,80.242719,17z/data=!4m6!3m5!1s0x3a526785e2095743:0x998fa8671584eaf6!8m2!3d12.9908578!4d80.2423382!16s%2Fg%2F11fnw11r8c?hl=en&entry=ttu" target='_blank'>D Block, 3rd Floor, IITM Research Park, Kanagam Road, Taramani, Chennai 600113.</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUsBanner;
