import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ceraquestCardData = [
    {
        src:"/home/post_07.jpg",
        title: "PhD starter",
        content: "We provide a wholesome package of prerequisites for prospective doctoral students to ease their PhD journey. We offer personalized learning platforms for all researchers wherein modules encompassing various tools focusing on literature survey, reference management software, scientific graphing, presentation skills, manuscript documentation and vector graphics are demonstrated. We also undertake various institutional level programs to fully train the incoming PhD students. ",
        link: "/portfolio/ceraquest-bridging-the-gap-between-industry-and-academia/"
    },
    {
        src:"/home/post_14.jpg",
        title: "Project consultation",
        content: "We provide specialized consultation services covering the entire spectrum of advanced ceramics, functional ceramics and technological applications. We also offer expert consultation services for the transitioning energy sector, specifically water electrolysis and hydrogen fuel cells.",
        link: "/portfolio/ceraquest-bridging-the-gap-between-industry-and-academia/"
    },
    {
        src:"/home/post_16.jpg",
        title: "Software consultation and training",
        content: "We are first in India to provide specialized consultation and exclusive software training of key thermodynamic software's like CALPHAD, THERMO-CALC, FACTSAGE, SIMUSAGE, CHEMAPP, CHEMSHEET. We bring in highly specialized consultation and software training in thermodynamics of multitude of key materials across varied sectors like again aerospace, defence, steel, automobile and energy.",
        link: "/portfolio/ceraquest-bridging-the-gap-between-industry-and-academia/"
    },
    {
        src:"/home/post_07.jpg",
        title: "Product R&D",
        content: "We also bring in unique industrial/academic project management, product development and testing services aimed at 'one-stop' solution to all the ceramic needs. Through this arm, we aim to engage with academia and industry to solve their ceramic problems. We undertake outsourced ceramic based projects aimed at a specific product development and/or upscaling of the ceramic/polymer manufacturing process.",
        link: "/portfolio/ceraquest-bridging-the-gap-between-industry-and-academia/"
    }
]

const Ceraquest = () => {
  return (
    <section>
        <div className='container mx-auto p-5'>
            <div className='text-center flex justify-center flex-col items-center'>            
              <h2 className='relative text-4xl font-bold pb-3 mb-5 inline-block border-b-2 border-red-700'>Ceraquest</h2>
              <h3 className='text-xl font-semibold mb-3'>More from CeraTattva</h3>
              <p className='text-sm font-normal sm:w-4/5 lg:w-3/5'>An initiative by CeraTattva, aimed at bridging the gap between academia and industry. Augumenting research quality worldwide and improving our product portfolio is met by our dedicated team of domain experts with solutions to your “material” queries a click away.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {
                    ceraquestCardData.map((item, index)=> {
                        return (
                            <div className="max-w-sm bg-white border border-gray-200 rounded-bl-3xl rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <Link href="#">
                                    <div className='h-52 relative overflow-hidden rounded-t-lg duration-300'>
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className='rounded-t-lg hover:scale-125  duration-300'
                                        />
                                    </div>
                                </Link>
                                <div className="p-5">
                                    <Link href="/">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                    </Link>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{item.content}</p>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Ceraquest;
