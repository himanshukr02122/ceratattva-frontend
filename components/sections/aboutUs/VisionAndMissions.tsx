import React from 'react';
import SwiperCoverflow from '@/components/globals/swiperSlides/SwiperCoverflow';

const VisionAndMissions = () => {
  return (
    <section className='pb-10' id='visionAndMission'>
        <div className="container mx-auto">
            <div>
                {/* <h2 className='relative text-4xl font-bold pb-3 mb-5 inline-block border-b-2 border-red-700'>CeraTattva Vision and Mission</h2> */}
                <h2 className='relative text-4xl font-bold pb-3 mb-6 ci-title--ceratattva'>CeraTattva Vision and Mission</h2>
                <p className='mb-2'>Facilitation and wider proliferation of innovative and cost-effective advanced ceramic materials and technologies in key strategic sectors such as aerospace, defence, energy and beyond.</p>
                <p className='mb-2'>To be the best skills, technology and services based total ceramic solution provider to a wider range of customers. To consistently deliver great value to customers through highest professional skills and standards in core competence.</p>
                <p>To be the synonym for provider of world-class advanced and highly functional ceramic materials, instruments, automation products and services with superior customer reach.</p>    
            </div>
            <div className='lg:grid grid-cols-5 lg:gap-4 xl:gap-10 lg:flex items-center'>
                <ul className='col-span-2 font-medium mt-12 lg:mt-0'>
                    <li className='relative after:absolute after:w-3 after:h-4 after:bottom-[-16px] after:left-10 after:bg-orange-600 py-2 px-5 mb-4 bg-orange-600 text-white rounded-full after:content-[""]'>Niche and indigenous product</li>
                    <li className='relative after:absolute after:w-3 after:h-4 after:bottom-[-16px] after:left-10 after:bg-orange-600 py-2 px-5 mb-4 bg-orange-600 text-white rounded-full'>Cutting-edge and unique PDC technology</li>
                    <li className=' py-2 px-5 mb-4 bg-orange-600 text-white rounded-full'>Advanced ceramics and technologies at low cost</li>
                </ul>
                <div className='col-span-3 flex justify-center'>
                    <SwiperCoverflow />
                </div>
            </div>
        </div>
    </section>
  )
}

export default VisionAndMissions
