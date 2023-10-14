import Counter from '@/components/globals/Counter';
import Image from 'next/image';
import React from 'react';

const achievementData:{ count: number, suffix: string, title: string, description: string, additionalClass:string }[]=[
    {
        count: 40,
        suffix:"+",
        title: "Awards & Recognition",
        description: "Establishing our extraordinary capabilities & services",
        additionalClass:"hidden"
    },
    {
        count: 20,
        suffix:"+",
        title: "Products & Services",
        description: "Ever-growing innovations, products and solutions",
        additionalClass:"block"
    },
    {
        count: 10,
        suffix:"+",
        title: "Happy customers",
        description: "The success metric we value the most",
        additionalClass:"block"
    },
    {
        count: 10,
        suffix:"+",
        title: "Project management",
        description: "Cutting edge solutions to challenging problems",
        additionalClass:"block"
    },
]

const Achievements=()=> {
  return (
    <section className='py-20 bg-violet-400 my-10' style={{background:"linear-gradient(45deg, rgba(0,39,94,1) 0%, rgba(6,112,169,1) 100%)"}}>
      <ul className='ci-achievements__lists w-[85%] m-0 overflow-hidden list-none hexa'>
        <li className='ci-achievements__list  float-left relative overflow-hidden invisible'>
        </li>
        <li className='ci-achievements__list float-left relative overflow-hidden invisible'>
            <div 
                className='group ci-achievements__list-contents w-full h-full text-white overflow-hidden text-center'>
                <Image
                    src="/home/awards-recognitions.jpg"
                    alt="awards and recognitions"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover object-right duration-300'
                />
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.3)]'>
                    <div className="font-bold h-full w-full top-2/4 left-2/4 translate-x-[-8%] translate-y-[-15%] lg:translate-y-[-8%] text-light flex text-2xl md:text-3xl lg:text-4xl">
                        <Counter runningNumber={40} /> <span>+</span>
                    </div>
                    <h3 className="font-semibold text-sm lg:text-xl my-2 w-full top-2/4 translate-y-[-10%] lg:translate-y-[20%] group-hover:opacity-0 duration-300">Awards & Recognition</h3>
                    <p className='text-xs md:text-sm w-full top-2/4 translate-y-[150%] group-hover:translate-y-[10%] w-11/12 px-2 bg-[rgba(0,0,0,0.5)] pt-3 pb-40 duration-300'>Establishing our extraordinary capabilities & services</p>
                </div>
            </div>
        </li>
        <li className='ci-achievements__list float-left relative overflow-hidden invisible'>
            <div className='group ci-achievements__list-contents w-full h-full text-white overflow-hidden text-center'>
                <Image
                    src="/home/pdc-diagram-1.jpg"
                    alt="ceramic products"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover object-center duration-300'
                />
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.3)]'>
                    <div className="font-bold h-full w-full top-2/4 left-2/4 translate-x-[-8%] translate-y-[-15%] lg:translate-y-[-8%] text-light flex text-2xl md:text-3xl lg:text-4xl">
                        <Counter runningNumber={20} /> <span>+</span>
                    </div>
                    <h3 className="font-semibold text-sm lg:text-xl my-2 w-full top-2/4 translate-y-[-10%] lg:translate-y-[20%] group-hover:opacity-0 duration-300">Products & Services</h3>
                    <p className='text-xs md:text-sm w-full top-2/4 translate-y-[150%] group-hover:translate-y-[10%] w-11/12 px-2 bg-[rgba(0,0,0,0.5)] pt-3 pb-40 duration-300'>Ever-growing innovations, products and solutions</p>
                </div>
            </div>
        </li>
        <li className='ci-achievements__list float-left relative overflow-hidden invisible'>
            <div className='group ci-achievements__list-contents w-full h-full text-white overflow-hidden text-center'>
                <Image
                    src="/home/happy-customers.png"
                    alt="happy customers"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover object-left duration-300'
                />
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.3)]'>
                    <div className="font-bold h-full w-full top-2/4 left-2/4 translate-x-[-8%] translate-y-[-15%] lg:translate-y-[-8%] text-light flex text-2xl md:text-3xl lg:text-4xl">
                        <Counter runningNumber={10} /> <span>+</span>
                    </div>
                    <h3 className="font-semibold text-sm lg:text-xl my-2 w-full top-2/4 translate-y-[-10%] lg:translate-y-[20%] group-hover:opacity-0 duration-300">Happy customers</h3>
                    <p className='text-xs md:text-sm w-full top-2/4 translate-y-[150%] group-hover:translate-y-[10%] w-11/12 px-2 bg-[rgba(0,0,0,0.5)] pt-3 pb-40 duration-300'>The success metric we value the most</p>
                </div>
            </div>
        </li>
        <li className='ci-achievements__list float-left relative overflow-hidden invisible'>
            <div className='group ci-achievements__list-contents w-full h-full text-white overflow-hidden text-center'>
                <Image
                    src="/home/project-management.jpg"
                    alt="Project Management"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover object-right duration-300'
                />
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.3)]'>
                    <div className="font-bold h-full w-full top-2/4 left-2/4 translate-x-[-8%] translate-y-[-15%] lg:translate-y-[-8%] text-light flex text-2xl md:text-3xl lg:text-4xl">
                        <Counter runningNumber={10} /> <span>+</span>
                    </div>
                    <h3 className="font-semibold text-sm lg:text-xl my-2 w-full top-2/4 translate-y-[-10%] lg:translate-y-[20%] group-hover:opacity-0 duration-300">Project management</h3>
                    <p className='text-xs md:text-sm w-full top-2/4 translate-y-[150%] group-hover:translate-y-[10%] w-11/12 px-2 bg-[rgba(0,0,0,0.5)] pt-3 pb-40 duration-300'>Cutting edge solutions to challenging problems</p>
                </div>
            </div>
        </li>
        <li className='ci-achievements__list float-left relative overflow-hidden invisible'>
            <div className='group ci-achievements__list-contents w-full h-full text-white overflow-hidden text-center'>
                <Image
                    src="/home/awards-recognitions.jpg"
                    alt="ceramic products"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className='object-cover object-center duration-300'
                />
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0.3)]'>
                    <div className="font-bold h-full w-full top-2/4 left-2/4 translate-x-[-8%] translate-y-[-15%] lg:translate-y-[-8%] text-light flex text-2xl md:text-3xl lg:text-4xl">
                        <Counter runningNumber={30} /> <span>+</span>
                    </div>
                    <h3 className="font-semibold text-sm lg:text-xl my-2 w-full top-2/4 translate-y-[-10%] lg:translate-y-[20%] group-hover:opacity-0 duration-300">Awards & Recognition</h3>
                    <p className='text-xs md:text-sm w-full top-2/4 translate-y-[150%] group-hover:translate-y-[10%] w-11/12 px-2 bg-[rgba(0,0,0,0.5)] pt-3 pb-40 duration-300'>Establishing our extraordinary capabilities & services</p>
                </div>
            </div>
        </li>
      </ul>
    </section>
  )
}

export default Achievements
