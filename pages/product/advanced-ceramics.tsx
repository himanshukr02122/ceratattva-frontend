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

const AdvancedCeramics = () => {
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLInputElement>(null);
    const onAutoplayTimeLeft = (s:any, time:any, progress:number) => {
      progressCircle.current!.style.setProperty('--progress', String(1 - progress));
      progressContent.current!.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <>
        <ProductSubNavBanner 
            bannerImage="/products/advanced-ceramics-banner.jpg"
            title='High Temperature & Functional Ceramics'
            heading='Advanced Ceramics'
            para='Aligned with growing demands for high performance ceramics, Certattva brings to you multi-functional advanced oxides, carbides, nitrides, borides, carboborides, carbonitrides and carboboronitrides that cater to a wider market.'
        />

        <section className='py-10 md:py-16 2xl:py-20'>
            <div className='container 2xl:max-w-screen-xl 4xl:max-w-screen-2xl mx-auto px-5'>
                <p 
                    className='text-base sm:text-xl text-gray-800 first-letter:uppercase
                    first-letter:text-5xl sm:first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900'>
                    Our specialty chemicals guarantee superior performance and durability for applications not limited to Aerospace, Defense, and Automobile sector.
                </p>
                <p className='mt-4 text-sm sm:text-base text-gray-600'>
                    An unique mix of high hardness, high melting points, low density, in combination with technical formulations that incorporates lower amount of free carbon.
                </p>
                <div className='mt-8'>
                    <h3 className='relative text-xl md:text-2xl xl:text-4xl font-bold'>Why is our Advanced Ceramics SUPREME?</h3>
                    <p className='mt-3 text-sm sm:text-base text-gray-600'>We provide high quality non-stochiometric & lower free carbon (&lt; 5 wt.%) based advanced ceramics.</p>
                    <ul className='font-medium mt-5 max-w-5xl list-decimal pl-4'>
                        <li className='my-2'>
                            <p className='text-sm font-normal md:text-base text-gray-800'>Soluble in common solvents such as WATER, ETHANOL, ACETONE, DMF, DMSO, THF, TOULENE</p>
                        </li>
                        <li className='my-2'>                        
                            <p className='text-sm font-normal md:text-base text-gray-800'>Processable viscosity in the range of 10 cps to 300 cps</p>
                        </li>
                        <li className='my-2'>
                            <p className='text-sm font-normal md:text-base text-gray-800'>All the preceramic resin shows high ceramic yield in the range of 65-80 wt.%</p>
                        </li>
                    </ul>
                </div>
                <div>
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
                        <a href="/about-us/applications-2.jpg" target='_blank'>
                            <img src="/about-us/applications-2.jpg" className='' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-2xl max-h-2xl'>
                        <a href="/home/Ceramic-products-1.jpg" target='_blank'>
                            <img src="/home/Ceramic-products-1.jpg" />
                        </a>
                    </SwiperSlide>
                    <div className="autoplay-progress bg-black rounded-full" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
                </div>
            </div>
        </section>
    </>
  )
}

export default AdvancedCeramics