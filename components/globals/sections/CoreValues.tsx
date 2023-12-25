import React from 'react';

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SecondaryButton from '@/components/ui/buttons/SecondaryButton';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
const features: { id: number; title: String, description: String }[] = [
    { id: 1, 
      title: "Integrity",
      description: "We are firm follower of honesty and transparency in our business conduct and practice highest standards of professional ethics."
    },
    { id: 2, 
      title: "Innovation",
      description: "We curate our products and services based on novel, high end material science technology and engineering to excel any field of application."
    },
    { id: 3, 
      title: "Partnership",
      description: "We actively collaborate with Academia & Industry both in India and abroad which add immense value to the company and customer outreach portfolio."
    },
    { id: 4, 
      title: "Customer Care",
      description: "We constantly build on our customer relationship and steer it in the direction of development of superior products and services."
    },
    { id: 5, 
      title: "Sustainability",
      description: "Our pre-ceramic precursors, advanced ceramics provide for improved process efficiency, and lowered-energy consumption while also reducing pollutants and ensuring optimal resource utilization."
    },
  ];
  

const CoreValues = () => {
  return (
    <section style={{background:"linear-gradient(45deg, rgba(0,39,94,1) 0%, rgba(6,112,169,1) 100%)"}} id='coreValues'>
      <div 
        className='px-5 py-8 sm:py-14 container 2xl:max-w-screen-xl 4xl:max-w-screen-2xl mx-auto'>
          <h2 className='relative hidden md:inline-block text-4xl text-white font-bold pb-3 mb-10 ci-title--ceratattva'>Our Core Values</h2>
          <h2 className='relative md:hidden text-4xl text-white font-bold pb-3 mb-10 text-center'>
            <span className='border-b-2 pb-2 border-white'>Achievements</span>
          </h2>
          <div className='grid gap-3 lg:gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 '>
            {features && features.length && features.map((item, index)=> {
              return(
                <div key={index} className='group h-100 text-white rounded-bl-3xl rounded px-8 sm:px-5 py-4 xl:p-5 border hover:bg-white hover:text-black mx-auto hover:scale-105 duration-300 w-10/12 sm:w-auto'>
                  <div className='mb-6'>
                    <h5 className='text-base md:text-lg mb-2'>{String(item.id).padStart(2, '0')}</h5>
                    <h3 className='font-semibold text-xl md:text-2xl mb-2'>{item.title}</h3>
                    <p className='text-sm md:text-base text-gray-200 line-clamp-3 group-hover:text-black group-hover:font-normal'>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            className='mySwiper py-10 container mx-auto'
          >
            {features && features.length && features.map((item, index)=> {
              return(
                <SwiperSlide key={index} className='group h-100 text-white rounded-bl-3xl rounded px-12 py-10 border hover:bg-white hover:text-black'>
                  <div className='mb-6 group-hover:scale-110 duration-300'>
                    <h5 className='text-base mb-2'>{String(item.id).padStart(2, '0')}</h5>
                    <h3 className='font-semibold text-xl mb-2'>{item.title}</h3>
                    <p className='text-sm text-gray-200 font-light line-clamp-3 group-hover:text-black group-hover:font-normal'>{item.description}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper> */}
        </div>
    </section>
  )
}

export default CoreValues
