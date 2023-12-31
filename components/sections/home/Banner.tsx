import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import React, {useState} from 'react'
import { VideoModal } from '@/components/globals/modals/VideoModal';

const Banner: React.FC = (props) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(true);
  return (
    <section
      className='ci-home__banner bg-fixed flex justify-center items-end pt-20 pb-12 lg:pb-16 3xl:pt-52 3xl:pb-32 bg-no-repeat shadow-lg bg-cover bg-white relative'
      style={{backgroundImage: 'url(/home/home-banner-dark.png)'}}
    >
      <div className='relative pt-20 md:pt-16 lg:mt-36 xl:mt-44 3xl:mt-48 4xl:mt-96 z-1'>
        <div className='container 2xl:max-w-screen-xl 4xl:max-w-screen-2xl p-5 mx-auto'>
          <div className='text-white md:w-2/4 lg:w-2/4'>
              <h2 className='font-light text-xl md:text-2xl xl:text-3xl mb-5'>CeraTattva InnoTech</h2>
              <h3 className='font-bold text-2xl md:text-3xl xl:text-4xl mb-3'>Redefining Materials</h3>
              <p className='font-light text-sm md:text-base xl:text-lg'>
                CeraTattva InnoTech (CTIT) Pvt. Ltd., provides specialized and proprietary preceramic precursors/polymers, ceramic products and solutions for diverse array of applications covering key strategic sector of energy, automobile, aerospace and defence.  
              </p>  
          </div>
          <div className='text-white mt-6 lg:mt-10'>
              <PrimaryButton buttonName="Video on Company" onClickHandle={handleClick} />
          </div>
        </div>
      </div>
      <VideoModal
          className="m-5 md:m-12 p-6 md:p-16 rounded-tl-3xl rounded-br-3xl text-white"
          isOpen={showModal}
          handleClose={() => setShowModal(false)}
      >
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

export default Banner
