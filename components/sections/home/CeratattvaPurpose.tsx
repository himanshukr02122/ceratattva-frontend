import { VideoModal } from '@/components/globals/modals/VideoModal'
import Image from 'next/image'
import React, {useState} from 'react'

const CeratattvaPurpose: React.FC = (props) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <section className='bg-white py-5 sm:py-10'>
      <div className='container mx-auto p-5'>
        <h2 className='relative text-4xl font-bold pb-3 mb-10 ci-title--ceratattva inline-block'>Ceratattva</h2>
        <div className="lg:grid lg:grid-cols-5 gap-10">
            <div className='lg:col-span-2 overflow-hidden rounded-3xl'>
                <div className='rounded-3xl ci-video__card bg-home-video bg-cover bg-center duration-300 cursor-pointer' onClick={() => setShowModal(true)} title='click to view video'>
                    <div className='rounded-3xl flex justify-center items-center h-full  hover:backdrop-grayscale duration-300'>
                        <span className="relative flex items-center justify-center h-12 w-12 cursor-pointer hover:scale-110">
                            <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-white opacity-75"></span>
                            <span className="relative flex items-center justify-center h-12 w-12 bg-white rounded-full duration-300 hover:scale-110">
                                <Image
                                    alt="logo"
                                    src="/icons/icon-play-20.png"
                                    height={24}
                                    width={24}
                                />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-3 mt-8 lg:mt-0'>
                <h3 className='text-xl font-semibold mb-3'>Unwinding non-oxide ceramic filaments and fibers towards India&apos;s strategic self-reliance</h3>
                <p className='text-sm font-normal text-justify'>Non-oxide ceramic fibers/filaments (SiOC, SiC) as reinforcement enhances toughness, strength, stiffness, and creep resistance of ceramic matrix composites. These fiber filaments find vast potentials in military, aerospace, automobile, and nuclear sectors.
We have demonstrated a simple, robust and inexpensive framework with a bench-top configuration capable of high-throughput production of first-of-its kind flexible SiOC ceramic filaments.</p>
            </div>
        </div>
      </div>
        <VideoModal
            className="m-5 md:m-12 sm:p-6 md:p-16 rounded-tl-3xl rounded-br-3xl text-white"
            isOpen={showModal}
            handleClose={() => setShowModal(false)}
        >
            {/* <iframe
                className="h-full w-full rounded-3xl"
                src="https://www.youtube.com/embed/Pi5P8pWownA?si=56R0gjgIGA14h9-l&autohide=1&autoplay=1&enablejsapi=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe> */}
            
            <iframe 
                className="h-full w-full rounded-3xl"
                src="https://www.youtube.com/embed/EkE56hsjO-M?si=DROclQHW__OTtmKg&autohide=1&autoplay=1&enablejsapi=1&amp;start=8" 
                title="CeraTattva InnoTech-First Glimpse| IITM Incubation| IITM Research Park| Startup| Ceramics" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
        </VideoModal>
    </section>
  )
}

export default CeratattvaPurpose
