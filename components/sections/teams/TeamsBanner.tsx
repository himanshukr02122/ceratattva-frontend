import React from 'react'

const TeamsBanner = () => {
  return (
    <section 
        className='h-[500px] sm:h-[600px] md:h-[700px] 3xl:h-[1000px] bg-fixed flex items-start pt-20 pb-12 lg:pb-16 3xl:pt-52 3xl:pb-32 bg-no-repeat shadow-lg bg-cover bg-white relative bg-[url("/teams/team-banner.png")] bg-center bg-no-repeat'
    >
        <div className='container mt-24 md:mt-32 sm:ml-10 py-10 px-6 bg-[rgba(0,0,0,0.7)] w-full md:w-2/3'>
            <h3 className=' text-white mb-2 text-base md:text-xl opacity-60 underline-offset-4 underline'>
                One Stop Solution
            </h3>
            <div className=' relative flex items-center'>
                <h2 className='text-white text-2xl sm:text-5xl font-bold'>Meet the Team</h2>
                {/* <span className='ci-about__title absolute font-bold text-5xl sm:text-[6rem] md:text-[8rem] top-10 sm:top-16 left-0 bg-clip-text pointer-events-none select-none whitespace-nowrap bg-transparent bg-clip-text uppercase opacity-60 animate-bannerTextTransformation duration-300'>Ceratattva</span> */}
            </div>
            <p className='text-white font-light w-full md:w-2/3 mt-3 text-gray-300'>CeraTattva stands solid on the strong pillars of integrity, intellectuality, innovation, and indigenization. Our exceptional Team brings in outstanding expertise and years of extensive experience curating best of products and services. We take immense pride in our diverse and highly abled Team.</p>

        </div>
    </section>
  )
}

export default TeamsBanner
