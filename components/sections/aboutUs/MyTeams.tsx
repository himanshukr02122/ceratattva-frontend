import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ourTeams = [
  {
    name: "Dr. Abha Bharti",
    link: "/about-us/teams/#abha",
    position: "Co-founder, Advisor-Hydrogen & Fuel cell",
    teamProfileSnap: "/about-us/dr-abha.jpg",
    about: " - Abha specializes in electrochemical energy storage and conversion systems. She earned her PhD from ISRO in the field of hydrogen fuel cells and possess extensive experience in sustainable energy. She has several published papers, awards and book chapters on fuel cell."
  },
  {
    name: "Dr. rer. nat. Ravi Kumar",
    link: "/about-us/teams/#nvrk",
    position: "Co-founder, Chief Consultant & Technical Advisor",
    teamProfileSnap: "/about-us/nvrk.png",
    about: " - Ravi Kumar is a Professor of Ceramics and Head of the Department of Metallurgical and Materials Engineering at IIT Madras, India. Prof. Ravi Kumar’s research interests include development of novel non-metallic & inorganic materials whose properties can be tuned on an atomistic scale which includes thermal management, catalysis and energy."
  },
  {
    name: "Mr. Raghunath Sharma",
    link: "/about-us/teams/#raghu",
    position: "Co-founder, COO",
    teamProfileSnap: "/about-us/raghu.jpg",
    about: " - Raghunath is a doctoral candidate at IIT Madras with his areas of research centered around advanced ceramic materials for renewable energy sector."
  },
  {
    name: "Dr. Hari Kumar K.C",
    link: "/about-us/teams/#hari",
    position: "Advisor- Material thermodynamics & CALPHAD Expert",
    teamProfileSnap: "/about-us/prof-hari-kumar.jpg",
    about: "- Dr. Hari Kumar is a Professor of Material thermodynamics in Metallurgical and Materials Engineering at IIT Madras, India. His research areas majorly focusses on computational thermodynamics of material systems including ceramics."
  },
]

const MyTeams: React.FC = (props) => {

  return (
    <section className='py-6 sm:py-10'>
      <div className='container mx-auto 3xl:max-w-screen-2xl text-center'>
        {/* <h2 className='relative text-4xl md:text-5xl font-bold pb-3 mb-4 md:mb-10 '>The Team</h2> */}
        <h2 className='relative text-4xl md:text-5xl font-bold pb-3 mb-4 md:mb-10 text-center'>
          <span className='border-b-2 pb-2 border-orange-600'>The Team</span>
        </h2>
        <ul className='flex flex-wrap justify-center gap-0 xl:gap-8'>
          {
            ourTeams.map((item:any, index)=> {
              return(
                <li key={index} className='w-full sm:w-1/2 lg:w-1/4 lg:last:mx-[30%] p-4'>
                  <div className='group relative w-full h-80 md:h-64 lg:h-92 xl:h-[20rem] 2xl:h-[25rem]'>
                    <Link href={item.link} target='_blank'>
                      <Image 
                        src={item.teamProfileSnap}
                        alt={item.name}
                        fill
                        className='object-center object-cover rounded-tr-[5rem] lg:grayscale lg:hover:grayscale-0 duration-300'
                      />
                    </Link>
                    <div className='absolute bottom-0 left-0 px-5 py-2 bg-[rgba(0,0,0,0.6)] m-2 flex flex-col items-start justify-start lg:opacity-0 lg:group-hover:opacity-100 duration-300'>
                      <p className='text-white text-justify text-sm line-clamp-3'>{item.about}</p>
                      <Link href={item.link} target='_blank' className=' bg-white font-bold px-3 py-1 mt-2'>
                        Know More 
                        <span className='relative -left-4 opacity-0 group-hover:opacity-100 group-hover:left-1 duration-300'>&gt;</span>
                      </Link>
                    </div>
                  </div>
                  <h2 className='mt-4 md:mt-6 text-start font-semibold text-xl md:text-2xl'>{item.name}</h2>
                  <h3 className='text-start md:mt-2'>{item.position}</h3>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default MyTeams;
