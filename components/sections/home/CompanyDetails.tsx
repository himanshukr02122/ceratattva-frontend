import Image from 'next/image'
import React from 'react'

const CompanyDetails = () => {
  return (
    <section className='py-10'>
      <div className='container m-auto p-5'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div>
                <div className='relative h-56 border-b-4 border-red-900'>
                    <Image
                        fill
                        src="/home/iitm-research-park.jpg"
                        alt="IITM Research Park"
                    />
                </div>
                <h2 className='text-2xl font-semibold my-4'>An IITM-incubated company</h2>
                <p className='text-sm '>With its origin traced to the humble beginnings of lab scale experimentation, CeraTattva InnoTech Pvt. Ltd is the classic example of a successful endeavor in the realm of translational research. Combining the right mix of experience, expertise, and exuberance we proudly announce ourselves as India’s first private company that develop preceramic precursors/polymers and ceramics curated for diverse applications ranging from niche areas like defense, and space to automotive sectors.</p>
            </div>
            <div>
                <p className='text-sm '>Right on the motto of “knowledge is power”, we aim to revolutionize project management services in India, especially in the regime of energy materials & technical ceramics.</p>
                <h2 className='text-2xl font-semibold my-4'>Looking ahead</h2>
                <p className='text-sm '>Currently focused on providing cost effective fibre spinning devices and specialty precursors, CeraTattva aims to expand its product portfolio into developing bioceramics, and next generation armors. Catering to the worldwide increase in demand of biomedical implants, CeraTattva plans to bring out state-of-the art, precision engineered bioinert ceramics. In line with the current and future demands for a fossil- free future, we aim to join forces in the humanitarian quest to envisage a hydrogen-based economy. Our feet firmly rooted and with an eye on the future for the greater good, we aim to venture into energy storage sector.</p>
            </div>
            <div>
                <p className='text-sm pb-5'>A unique product line targeting the ever growing hydrogen energy sector is on the cards aligning with growing needs of a sustainable future. For an exciting and scientifically reinvigorating journey, reach out to us at info@ceratattva</p>
                <ul className='text-sm border-b-2 pb-5 list-image-[url(/icons/icons8-tick-14.png)] ps-4'>
                  <li>Advanced & functional ceramics- PDC</li>
                  <li>Ceramic processing technologies</li>
                  <li>Next generation armor</li>
                  <li>Bioceramics</li>
                  <li>CeraTattva energy solutions</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyDetails
