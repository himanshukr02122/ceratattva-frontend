import React from 'react'

const ServiceBanner = () => {
  return (
    <section
        className='relative h-[450px] sm:h-[500px] md:h-[600px] 3xl:h-[800px] bg-fixed flex items-start pt-20 pb-12 lg:pb-16 3xl:pt-52 3xl:pb-30 bg-no-repeat shadow-lg bg-cover bg-white relative bg-[url("/services/service-banner.jpg")] bg-center xl:bg-[center_top_-100px] bg-no-repeat after:content-[""] after:absolute after:w-full after:h-full after:bg-[rgba(0,0,0,0.7)] after:top-0 after:left-0'
    >
        <div className='container z-[9] 2xl:max-w-screen-xl 4xl:max-w-screen-2xl px-5 mx-auto'>
            <div className='group relative mt-12 sm:mt-20 md:mt-32 py-6 sm:py-10 3xl:py-16 px-6 bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.6)] w-full md:w-2/3'>
                <h3 className='text-white mb-2 text-base md:text-xl xl:opacity-60 group-hover:opacity-100 underline-offset-4 underline'>
                    Services
                </h3>
                <div className='relative flex items-center'>
                    <h2 className='text-white text-2xl sm:text-4xl xl:text-5xl font-bold'>Ceratattva – Bridging the gap between Industry and Academia</h2>
                </div>
                <p className='font-light mt-4 text-gray-300'>CeraTattva Pvt Ltd provides a one stop solution for all your “Material” needs.</p>
            </div>
        </div>
    </section>
  )
}

export default ServiceBanner
