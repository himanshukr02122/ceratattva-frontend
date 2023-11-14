import ContactUsBanner from '@/components/sections/ContactUsBanner'
import React from 'react'

const ContactUs = () => {
  return (
    <>
      <ContactUsBanner/>
      <section className='py-10 lg:py-20'>
        <div className="container mx-auto p-5">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16'>
            <div className='border-2 flex justify-center items-center h-full border-black'>
              <span className='text-4xl font-bold'>Area For Form</span>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.9213913486041!2d80.241444!3d12.991952000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526787e5aeb737%3A0xdcee4dd1a4f89532!2sIITM%20RESEARCH%20PARK%2C%20Kanagam%2C%20Tharamani%2C%20Chennai%2C%20Tamil%20Nadu%20600113!5e0!3m2!1sen!2sin!4v1697560011256!5m2!1sen!2sin" 
              className=' h-64 sm:h-96 lg:h-full w-full'
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
