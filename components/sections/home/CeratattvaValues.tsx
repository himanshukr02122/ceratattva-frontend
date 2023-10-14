import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const valuesSlides = [
    {src:'/home/Academia-brige.jpg',
      title: "Academia brige"
    },
    {src:'/home/Ceramic-products-1.jpg',
      title: "Ceramic products"
    },
    {src:'/home/pdc-diagram-1.jpg',
      title: "pdc diagram"
    },
    {src:'/home/Ultraspinner-1-1.jpg',
      title: "Ultraspinner-1"
    },
    {src:'/home/home-header-banner.jpg',
      title: "Ultraspinner-1"
    },
  ]

const Reengineering: React.FC = (props) => {
  return (
    <section className='bg-white pb-20'>
        <div className='container mx-auto bg-gray-200 rounded-3xl p-5 shadow-md'>        
            <h2 className='relative text-4xl font-bold pb-3 mb-10 ci-title--ceratattva inline-block'>Reengineering the
ceramic world</h2>
            <div className="grid grid-cols-2 gap-10">
                <div className='ci-values__swiper overflow-hidden rounded-3xl'>
                    <Swiper
                      modules={[Navigation, Scrollbar, A11y]}
                      slidesPerView={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      navigation
                      className='mySwiper container mx-auto rounded-3xl overflow-hidden'
                      style={{paddingTop: "0 !important"}}
                    >
                      {valuesSlides.length && valuesSlides.map((valuesSlide, index)=> {
                        return(
                          <SwiperSlide key={index} className='h-100 text-white rounded-bl-3xl rounded-3xl overflow-hidden'>
                            <div className=' relative rounded-3xl overflow-hidden' style={{height: "300px"}}>
                              <Image
                                fill
                                className='rounded-3xl object-contain object-center'
                                src={valuesSlide.src}
                                alt={valuesSlide.title}
                              />
                            </div>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                </div>
                <div className='w-4/5'>
                    <h3 className='text-xl font-semibold mb-3'>CeraTattva values</h3>
                    <p className='text-sm font-normal text-justify'>Unique amalgamation of superior technologies and project management services. Diversified product portfolio concomitant with unparalleled customer reach and support.</p>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Reengineering
