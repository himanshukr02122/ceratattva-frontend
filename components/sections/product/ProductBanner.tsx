import Link from 'next/link'
import React from 'react'

const ProductBanner = () => {
  return (
    <section 
        className='relative h-[560px] sm:h-[600px] md:h-[700px] 3xl:h-[1000px] bg-fixed flex items-start pt-20 pb-12 lg:pb-16 3xl:pt-52 3xl:pb-30 bg-no-repeat shadow-lg bg-cover bg-white relative bg-[url("/about-us/pdc-diagram-3.jpg")] bg-center bg-no-repeat after:content-[""] after:absolute after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0'
    >
        <div className='relative z-[9] container mx-auto mt-6 p-2'>
            <h3 className='mt-16 md:mt-24 text-white mb-2 text-base md:text-xl opacity-60 underline-offset-4 underline'>
                One Stop Solution
            </h3>
            <div className='relative flex items-center'>
                <h2 className='text-white text-2xl sm:text-5xl font-bold'>Products</h2>
                {/* <span className='top-0 ci-about__title absolute font-bold text-5xl sm:text-[6rem] md:text-[8rem] left-0 bg-clip-text pointer-events-none select-none whitespace-nowrap bg-transparent bg-clip-text uppercase opacity-60 animate-bannerTextTransformation duration-300'>Ceratattva</span> */}
            </div>
            <p className='text-white text-sm sm:text-base text-neutral-300 sm:w-3/4 md:w-2/4 mt-4 md:mt-8'>CeraTattva provides specialized ceramic products and solutions through its wide range of patented products encompassing novel polymer precursors, advanced ceramics, cutting-edge fiber manufacturing technologies along with R&D and consultancy services covering vast topics such as ceramics, materials thermodynamics, energy materials and material chemistry.
Our product line is unique and we provide innovative, efficient, robust and cost-effective one stop ceramic solutions to our diverse customers.</p>
            <Link href="/contact-us" className='group text-white py-2 px-6 bg-orange-700 mt-5 inline-block'>
                Contact Us
                <span className='relative left-2 lg:-left-4 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:left-2 duration-300'>&gt;</span>
            </Link>
        </div>
    </section>
  )
}

export default ProductBanner
