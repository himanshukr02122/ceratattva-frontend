import React from 'react'

const AboutUsBanner = () => {
  return (
    <section 
        className='h-[500px] sm:h-[600px] md:h-[800px] 3xl:h-[1000px] bg-fixed flex items-start pt-20 pb-12 lg:pb-16 3xl:pt-52 3xl:pb-32 bg-no-repeat shadow-lg bg-cover bg-white relative bg-[url("/about-us/post-about.png")] bg-center bg-no-repeat'
    >
        <div className='container mx-auto'>
            <h3 className='mt-24 md:mt-32 text-white mb-2 text-base md:text-xl opacity-60 underline-offset-4 underline'>
                One Stop Solution
            </h3>
            <div className=' relative flex items-center'>
                <h2 className='text-white text-2xl sm:text-5xl font-bold'>Redefining Materials</h2>
                <span className='ci-about__title absolute font-bold text-5xl sm:text-[6rem] md:text-[8rem] top-10 sm:top-16 left-0 bg-clip-text pointer-events-none select-none whitespace-nowrap bg-transparent bg-clip-text uppercase opacity-60 animate-bannerTextTransformation duration-300'>Ceratattva</span>
            </div>
        </div>
    </section>
  )
}

export default AboutUsBanner
