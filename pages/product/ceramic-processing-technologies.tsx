import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectFlip, Pagination, Navigation } from 'swiper/modules';
import ProductSubNavBanner from '@/components/sections/product/ProductSubNavBanner';
import Image from 'next/image';

const ultraspinnerListItem = [
    "Safe operating conditions – no use of high voltage",
    "Compact system and user-friendly operation",
    "No restriction on the type of polymer precursor",
    "High yield in few minutes",
    "In-situ UV crosslinking for reduced material losses and retention of morphology",
    "Simple and robust design of the spinneret",
    "Controlled flow of the polymer precursor to the spinning chamber",
    "Highly affordable – 40 % less expensive than the competitive technologies"
]

const CeramicProcessingTechnologies = () => {
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLInputElement>(null);
    const onAutoplayTimeLeft = (s:any, time:any, progress:number) => {
      progressCircle.current!.style.setProperty('--progress', String(1 - progress));
      progressContent.current!.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <>
        <ProductSubNavBanner 
            bannerImage="/products/ceramic-processing-instrument-banner.jpg"
            title='Instruments'
            heading='Ceramic Processing Technologies'
            para='Fibers are ubiquitous in our day-to-day life and CeraTattva foresees the requirement of a simple, cost-effective and efficient polymer and ceramic fiber producing machine which is amenable for bulk production.'
        />

        <section className='py-10 md:py-16 2xl:py-20'>
            <div className='container 2xl:max-w-screen-xl 4xl:max-w-screen-2xl mx-auto px-5'>
                <h3 className='text-center relative text-xl md:text-2xl xl:text-4xl font-bold'>
                    Polymer & Ceramic fiber processing
                </h3>
                <h5 
                    className='relative text-lg md:text-xl xl:text-2xl font-bold pb-2 my-6 inline-block
                    after:content-[""] after:absolute after:w-[75%] after:h-[2px] after:bottom-0 after:bg-[#be432c] after:left-0'
                >
                    Ultraspinner
                </h5>
                <p className='text-sm sm:text-base text-gray-600'>
                    An in-house patented technology, CeraTattva’s Ultraspinner can produce polymer & preceramic fibers with higher yield and safer operating conditions compared to other contemporary technologies. Coupled with a UV curing facility and a pen type microscope, our Ultraspinner is beyond just fiber production and is a perfect “GUIDE-MATE” to assist in analysis ON THE SPOT providing flexibility to the user for quick modifications and/or immediate validation of result.
                </p>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    navigation={true}
                    modules={[Autoplay, EffectFlip, Pagination, Navigation]}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="custom-mySwiper max-w-2xl max-h-2xl p-[50px] mt-5 md:mt-10"
                >
                    <SwiperSlide className='max-w-2xl max-h-xl'>
                        <a href="/products/ceramic-fiber-mat.jpg" target='_blank'>
                            <img src="/products/ceramic-fiber-mat.jpg" alt='ceramic-fiber-mat' className='' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-2xl max-h-2xl'>
                        <a href="/products/polymer-Fiber-mat.jpg" target='_blank'>
                            <img src="/products/polymer-Fiber-mat.jpg" alt='polymer-Fiber-mat' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-2xl max-h-2xl'>
                        <a href="/products/sem-1.jpg" target='_blank'>
                            <img src="/products/sem-1.jpg" alt='sem' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-2xl max-h-2xl'>
                        <a href="/home/ultraspinner-1-1.jpg" target='_blank'>
                            <img src="/home/ultraspinner-1-1.jpg" alt='ultraspinner' />
                        </a>
                    </SwiperSlide>
                    <div className="autoplay-progress bg-black rounded-full" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
                <p className='mt-4 text-sm sm:text-base text-gray-600'>
                    Polymer & Ceramic fibers are revolutionizing key-technologies across various sectors, be it aerospace or automobile. The Ultraspinner is an ideal fit for both R & D institutions and Industries.
                </p>
                <p className='mt-4 text-sm sm:text-base text-gray-600'>
                    A highly portable, table-top and compact instrument that manufactures fibers in the blink of an eye!! An in-house patented technology, our Ultraspinner can obtain polymer/preceramic fibers with higher yield and safer operating conditions compared to other contemporary technologies. Coupled with a UV curing facility and a pen type microscope, our Ultraspinner is beyond just fiber production and is a perfect “guide-mate” to assist in analysis on the spot providing flexibility to the user for quick modifications and/or immediate validation of result. The Ultraspinner is an ideal fit for both R & D institutions and Industries.
                </p>
                
                <div className='mt-8'>
                    <div className='flex justify-center flex-wrap gap-x-4 gap-y-8 md:pt-4 mb-8 md:mb-12'>
                        <a href='/products/thumbs_basic-model.jpg' target='_blank' className='relative h-40 w-40 md:h-48 md:w-48'>
                            <Image 
                                src="/products/thumbs_basic-model.jpg"
                                alt='thumbs_basic-model'
                                fill                                    
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='object-center object-cover'
                            />
                        </a>
                        <a href='/products/thumbs_enterprise-model.jpg' target='_blank' className='relative h-40 w-40 md:h-48 md:w-48'>
                            <Image 
                                src="/products/thumbs_enterprise-model.jpg"
                                alt='thumbs_enterprise-model'
                                fill                                    
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='object-center object-cover'
                            />
                        </a>
                        <a href='/products/thumbs_premium-model.jpg' target='_blank' className='relative h-40 w-40 md:h-48 md:w-48'>
                            <Image 
                                src="/products/thumbs_premium-model.jpg"
                                alt='thumbs_premium-model'
                                fill                                    
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='object-center object-cover'
                            />
                        </a>
                        <a href='/products/thumbs_standard-model.jpg' target='_blank' className='relative h-40 w-40 md:h-48 md:w-48'>
                            <Image 
                                src="/products/thumbs_standard-model.jpg"
                                alt='thumbs_standard-model'
                                fill                                    
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='object-center object-cover'
                            />
                        </a>
                    </div>
                    <h5 
                        className='relative text-lg md:text-xl xl:text-2xl font-bold pb-2 mb-3 inline-block
                        after:content-[""] after:absolute after:w-[75%] after:h-[2px] after:bottom-0 after:bg-[#be432c] after:left-0'
                    >
                        Why is our Ultraspinner SUPREME?
                    </h5>
                    <p className='mt-3 text-sm sm:text-base text-gray-600'>Our Ultraspinner is a highly portable, table-top and compact instrument that manufactures fibers in the blink of an eye!</p>
                    <ul className='font-medium mt-5 max-w-5xl list-decimal pl-4'>
                        {
                            ultraspinnerListItem.map(item=> {
                                return(
                                    <li className='my-2' key={item}>
                                        <p className='text-sm font-normal md:text-base text-gray-800'>
                                            {item}
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CeramicProcessingTechnologies;