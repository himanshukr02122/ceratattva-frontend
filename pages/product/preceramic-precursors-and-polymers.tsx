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


const PreceramicPrecursorsAndPolymers = () => {
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLInputElement>(null);
    const onAutoplayTimeLeft = (s:any, time:any, progress:number) => {
      progressCircle.current!.style.setProperty('--progress', String(1 - progress));
      progressContent.current!.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <div className=''>
        <ProductSubNavBanner
            bannerImage="/products/polymer-and-precursors-banner.jpg"
            title="Molecular Precursors"
            heading="Preceramic Precursors and Polymers"
            para="At CeraTattva, we intricately design and develop advanced preceramic polymers & precursors that can be transformed into thermo-structural, functional, and technical ceramics."    
        />
        <section className='py-10 md:py-16 2xl:py-20'>
            <div className='container mx-auto px-2'>
                <p 
                    className='text-base sm:text-xl text-gray-800 first-letter:uppercase
                    first-letter:text-5xl sm:first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900'>
                    We are the first indigenous company that supply customized precursors with our scientific philosophy centered around the well-established precursor & polymer derived ceramics (PDCs) route.</p>
                <p className='mt-4 text-sm sm:text-base text-gray-600'>
                    We offer new class of cost-effective resins that can be used to fabricate high phase purity & complex shaped ceramic components such as dense monolithic ceramics, fibers, coatings & composites (ceramic matrix composites, CMCs).</p>
                <div className='mt-8'>
                    <h3 className='relative text-xl md:text-2xl xl:text-4xl font-bold'>Why is our Precursors & Polymers SUPREME?</h3>
                    <p className='mt-3 text-sm sm:text-base text-gray-600'>Our single source preceramic resins are structurally designed with high temperature and ultra-high temperature ceramic constituents that guarantee lower amount of free carbon and near stochiometric ceramics</p>
                    <ul className='font-medium mt-3 max-w-5xl'>
                        <li className='my-2'>
                            <label htmlFor="Solubility" className='inline-block font-bold'>1. Solubility</label>
                            <p className='text-sm font-normal md:text-base text-gray-800 pl-4'>Soluble in common solvents such as WATER, ETHANOL, ACETONE, DMF, DMSO, THF, TOULENE</p>
                        </li>
                        <li className='my-2'>                        
                            <label htmlFor="Viscosity" className='inline-block font-bold'>2. Viscosity</label>
                            <p className='text-sm font-normal md:text-base text-gray-800 pl-4'>Processable viscosity in the range of 10 cps to 300 cps</p>
                        </li>
                        <li className='my-2'>
                            <label htmlFor="Ceramic yield" className='inline-block font-bold'>3. Ceramic yield</label>
                            <p className='text-sm font-normal md:text-base text-gray-800 pl-4'>All the preceramic resin shows high ceramic yield in the range of 65-80 wt.%</p>
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
                        <a href="/home/pdc-diagram-1.jpg" target='_blank'>
                            <img src="/home/pdc-diagram-1.jpg" className='' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-2xl max-h-2xl'>
                        <a href="/products/pdc-diagram-1.jpg" target='_blank'>
                            <img src="/products/pdc-diagram-1.jpg" />
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
    </div>
  )
}

export default PreceramicPrecursorsAndPolymers