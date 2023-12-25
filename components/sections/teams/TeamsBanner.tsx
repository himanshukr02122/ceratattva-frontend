import React from 'react'

const TeamsBanner = () => {
  return (
    <section 
        className='h-[500px] sm:h-[600px] md:h-[700px] 3xl:h-[1000px] bg-fixed flex items-start pt-20 pb-12 lg:pb-16 3xl:pt-52 3xl:pb-32 bg-no-repeat shadow-lg bg-cover bg-white relative bg-[url("/teams/team-banner.png")] bg-center bg-no-repeat'
    >
        <div className='container 2xl:max-w-screen-xl 4xl:max-w-screen-2xl px-5 mx-auto'>
            <div className='group mt-12 sm:mt-20 md:mt-32 py-6 sm:py-10 3xl:py-16 px-6 bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.6)] w-full md:w-2/3'>
                <h3 className=' text-white mb-2 text-base md:text-xl opacity-60 group-hover:opacity-100 underline-offset-4 underline'>
                    One Stop Solution
                </h3>
                <div className=' relative flex items-center'>
                    <h2 className='text-white text-2xl sm:text-4xl xl:text-5xl font-bold'>Meet the Team</h2>
                </div>
                <p className='font-light w-full md:w-2/3 mt-3 text-gray-300'>CeraTattva stands solid on the strong pillars of integrity, intellectuality, innovation, and indigenization. Our exceptional Team brings in outstanding expertise and years of extensive experience curating best of products and services. We take immense pride in our diverse and highly abled Team.</p>
            </div>
        </div>
    </section>
  )
}

export default TeamsBanner
