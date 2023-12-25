import TeamsBanner from '@/components/sections/teams/TeamsBanner';
import Image from 'next/image';
import React, { useState } from 'react';

const teams = [
  {
    id: "ganesh",
    snap: "dr-ganesh.png",
    name: "Dr. Ganesh Babu T",
    designation: "Founder & CEO",
    careerAndExperiences: {
      about: "Ganesh has expertise in development of functional and high temperature ceramic and composite materials. He earned his PhD from VSSC, ISRO in the field of ceramic materials for high temperature applications.",
      experiences: ["PhD from Vikram Sarabhai Space Centre", "Post-doctoral Fellowship at IIT-Madras", "Senior Project Officer, CoE, IIT-Madras", "Visiting Scientist, University of Cologne, Germany", "Over 10+ experience in development of advanced and functional ceramics"]
    },
    recognitionAndAwards: ["ISRO fellowship for PhD research", "IPDF for post-doctoral research", "20+ patents and publications", "10+ government and industry backed ceramic projects"]
  },
  {
    
    id: "abha",
    snap: "dr-abha.jpg",
    name: "Dr. Abha Bharti",
    designation: "Co-founder, Advisor-Hydrogen & Fuel cell",
    careerAndExperiences: {
      about: "Abha specializes in electrochemical energy storage and conversion systems. She earned her PhD from ISRO in the field of hydrogen fuel cells and possess extensive experience in sustainable energy. She has several published papers, awards and book chapters on fuel cell.",
      experiences: ["PhD from VSSC, ISRO", "Post-doctoral fellowship from ARCI", "Chief Scientist & Global Head of Fuel Cells, Capstone Energy, UK", "Energy Specialist, Capstone Projects, Kenya", "Member, Technical Board, DRE Motors", "Over 8+ years of experience in hydrogen fuel cells and sustainable energy"]
    },
    recognitionAndAwards: ["ISRO Fellowship for PhD research", "ARCI fellowship for PDF", "5 Best Paper Awards", "8+ publications and book chapter"]
  },
  {
    
    id: "nvrk",
    snap: "nvrk.png",
    name: "Dr. rer. nat. Ravi Kumar",
    designation: "Co-founder, Chief Consultant & Technical Advisor",
    careerAndExperiences: {
      about: "Ravi Kumar is a Professor of Ceramics and Head of the Department of Metallurgical and Materials Engineering at IIT Madras, India. Prof. Ravi Kumar’s research interests include development of novel non-metallic & inorganic materials whose properties can be tuned on an atomistic scale which includes thermal management, catalysis and energy.",
      experiences: ["Professor and HOD, Dept. of Metallurgical and Materials Engineering, IIT Madras", "PhD (Dr.rer.nat.), Material Science, Max-Plack-Institute, Stuttgart, Germany", "Postdoctoral Research associate (material science), Institute for Shock Physics, USA", "Postdoctoral Fellow, Max-Planck-Institute, Stuttgart, Germany", "Staff Scientist, Graduate College for Interfaces in Nanocrystalline Materials, Max-Planck Institute, Stuttgart", "Scientist, ISRO Satellite Centre, Bangalore"]
    },
    recognitionAndAwards: ["Institute Research Development Award – under 40 yrs category (IRDA2015) from the IIT Madras", "Young Faculty Recognition Award (YFRA-2012) from IIT Madras", "IEI Young Engineers Award from the Institution of Engineers (India) in 2010", "Young Scientist Award” (Dr. R. L. Thakur Memorial Award) from the Indian Ceramic Society in 2009.", "Fellowship from the Max-Planck Society (March-2001 till April-2004).", "Jindal Education Trust Scholarship (1993 – 1995).", "National Merit Scholarship from the Government of Karnataka, India (1990 – 1994).", "200+ Patents, publications and book chapters"]
  },
  {
    
    id: "raghu",
    snap: "raghu.jpg",
    name: "Mr. Raghunath Sharma",
    designation: "Co-founder, COO",
    careerAndExperiences: {
      about: "Raghunath is a doctoral candidate at IIT Madras with his areas of research centered around advanced ceramic materials for renewable energy sector.",
      experiences: ["Doctoral candidate (Direct PhD), Dept. of Metallurgical and Materials Engineering, IIT Madras, Chennai, India", "Teaching Assistant, – Materials Processing and Characterization Laboratory", "Visiting Researcher, University Of Cologne, Germany", "Research Intern, Centre for Nano Materials, ARCI, Hyderabad, India", "Project Intern, Kalyani Carpenter Special Steels Limited, Pune, India", "B.Tech, JNTU Hyderabad, India"]
    },
    recognitionAndAwards: ["MHRD fellowship from Govt. Of. India to pursue doctoral thesis", "Received Travel grant from Government of India to pursue research intern as part of his doctoral thesis for a period of three months", "Awarded the prestigious Ministry of Steel Scholarship"]
  },
  {
    
    id: "hari",
    snap: "prof-hari-kumar.jpg",
    name: "Dr. Hari Kumar K. C",
    designation: "Advisor- Material thermodynamics & CALPHAD Expert",
    careerAndExperiences: {
      about: "Hari Kumar is a professor of computational thermodynamics at the Department of Metallurgical and Materials Engineering, IIT Madras. Prof. Hari Kumar’s research interests include Gibbs energy modeling of materials employing Calphad, applications of density functional theory in materials science, modeling of diffusion controlled transformations in ferrous and non-ferrous alloys and alloy design using physical metallurgy & computational thermodynamics.",
      experiences: ["Professor, Indian Institute of Technology, Madras,India", "PhD in computed phase equilibria in iron- base alloys, IIT Delhi, India", "Independent Research Fellow, Katholieke Universiteit Leuven Belgium", "Visiting Researcher, Royal Institute of Technology, KTH, Sweden", "Visiting Scientist, CNRS, Grenoble, France"]
    },
    recognitionAndAwards: ["Associate editor, Calphad Journal", "Key Reader: Metallurgical and Materials Transactions", "More than 60 scientific publications in peer reviewed journals", "Contributed nearly 18 system reviews for Ternary alloy systems, crystallographic and thermodynamic data, phase diagrams, Landolt-Bornstein New Series IV"]
  },
]

const Teams = () => {
  const [activeTab, setActiveTab] = useState<{ganesh:boolean,abha:boolean,nvrk:boolean,raghu:boolean,hari:boolean}>({
    ganesh: true,
    abha: true,
    nvrk: true,
    raghu: true,
    hari: true,
  });
  const handleActiveTab = (key:any, val:boolean) => {
    setActiveTab(prev=> ({
      ...prev,
      [key]: val
    }))
  }
  return (
    <>
        <TeamsBanner />
        <section>
          <div className="container mx-auto p-5 2xl:max-w-screen-xl 4xl:max-w-screen-2xl">
            {teams.map((item:{id:string,snap:string,name:string,designation:string,careerAndExperiences:{about:string,experiences:string[]},recognitionAndAwards:string[]},index:number)=> {
              return(
                <div className='team grid md:grid-cols-2 gap-5 lg:gap-10 pt-10 md:pt-20 xl:pt-32 last:pb-20' key={item.id} id={item.id}>
                  <div className={`shrink-0 ${(index+1)%2===0 ? "order-2" : "order-1"}`}>
                    <div className='flex items-center gap-5'>
                      <div className='md:hidden shrink-0 relative w-24 h-24 rounded-full group overflow-hidden'>
                        <Image 
                          src={`/about-us/${item.snap}`}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className='object-center object-cover group-hover:scale-125 duration-300'
                        />
                      </div>
                      <div>
                        <h2 className='text-2xl sm:text-4xl font-bold mb-1 sm:mb-2'>{item.name}</h2>
                        <h5 className='font-light font-medium'>{item.designation}</h5>
                      </div>
                    </div>
                    <div className='tabs mt-4'>
                      <div className='titles text-sm sm:text-base flex gap-6 sm:gap-10 text-gray-500 pb-4 border-b-2'>
                        <button 
                          className={`font-semibold ${Object.values(activeTab)[index] ? "border-b-2 border-gray-800" : "border-b-2 border-transparent" }`}
                          type='button'
                          onClick={()=>handleActiveTab(item.id, true)}
                        >Career & Experience</button>
                        <button 
                          className={`font-semibold ${Object.values(activeTab)[index] ? "border-b-2 border-transparent": "border-b-2 border-gray-800"}`}
                          type='button'
                          onClick={()=>handleActiveTab(item.id, false)}
                        >Recognition and Awards</button>
                      </div>
                      <div>
                        <div className={`content duration-500 mt-4 ${Object.values(activeTab)[index] ? "animate-fade" : "hidden"}`}>
                          <p className='text-sm xl:text-base'>{item.careerAndExperiences.about}</p>
                          <ul className='text-sm font-semibold mt-4 list-disc pl-4'>
                            {item.careerAndExperiences.experiences.map((item, index)=> {
                              return (
                                <li key={index} className='my-1'>{item}</li>
                              )
                            })}
                          </ul>
                        </div>
                        <div className={ `content duration-500 mt-4 ${Object.values(activeTab)[index] ? "hidden" : "animate-fade"}`}>
                          <ul className='mt-4 text-sm font-semibold list-disc pl-4'>
                            {item.recognitionAndAwards.map((item, index)=> {
                              return (
                                <li key={index} className='my-1'>{item}</li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`hidden md:block relative w-full h-96 xl:h-[32rem] group overflow-hidden ${(index+1)%2===0 ? "order-1 rounded-tr-[5rem]" : "order-2 rounded-tl-[5rem]"}`}>
                    <Image 
                      src={`/about-us/${item.snap}`}
                      alt={item.name}
                      fill
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-center object-cover group-hover:scale-125 duration-300 ${(index+1)%2===0 ? "rounded-tr-[5rem]" : "rounded-tl-[5rem]"}`}
                    />
                  </div>
                </div>
              )
            }) 
            }
          </div>
        </section>
    </>
  )
}

export default Teams
