import ServiceBanner from '@/components/sections/services/ServiceBanner'
import React from 'react';

const services = [
  "PhDStarter – Make Prospective students PhD ready with our student friendly training Programmes.",
  "Thermodynamic expert’s consultancy services – DFT, CALPHAD based theoretical projects to augment your research quality",
  "Software consultation and training – DFT, CALPHAD",
  "Project consultation- Ceramic based project consultation for academia and industry",
  "Product R&D- Ceramic based product development for academia and industry",
  "Ceramic consultation services – Professional interaction with faculty at IIT Madras for all your material science queries",
  "Workshops- on scientific writing to accelerate your publications"
] 

const Services = () => {
  return (
    <>
      <ServiceBanner />
      <section className='py-5 md:py-8 xl:py-12'>
        <div className="container mx-auto p-5">
          <h2 className='relative text-2xl md:text-3xl xl:text-4xl font-bold pb-3 mb-6 ci-title--ceratattva inline-block'>
            Consultation & Training services
          </h2>
          <p className='text-lg text-gray-500'>We have a dedicated team comprising of subject/technology experts from our parent organization-IIT Madras and other prestigious global institutions for consultancy assignments with applications as theoretical as “developing phase diagrams for new and exciting material systems” to hot and happening “batteries & fuel cells”.</p>
          <p className='text-sm text-gray-500 my-2'>Augumenting research quality worldwide and improving our product portfolio is met by our dedicated team of domain experts with solutions to your “material” queries a click away.</p>
          <h3 className='font-bold text-xl md:text-2xl xl:text-3xl my-4'>We are offering -</h3>
          <ol className='list-decimal px-4'>
            {services.map(item=> {
              return <li key={item} className='my-2'>{item}</li>
            })}
          </ol>
        </div>
      </section>
    </>
  )
}

export default Services
