import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

const imageDate=[{src:"/about-us/roadmap-2.jpg", altText: "Roadmap"}, {src:"/about-us/pdc-product-1.jpg", altText: "PDC Product"}, {src:"/about-us/pdc-diagram-3.jpg", altText: "PDC Diagram"}, {src:"/about-us/applications-2.jpg", altText: "Application"}]

export default function SwiperCoverflow() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className=" pt-0 relative w-full"
      >
        {
          imageDate.map((item, index)=> {
            return(
              <SwiperSlide key={index}>
                <div className='relative h-80 w-full'>
                  <Image 
                    src={item.src}
                    alt={item.altText}
                    fill
                    className='object-center object-contain'
                  />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
