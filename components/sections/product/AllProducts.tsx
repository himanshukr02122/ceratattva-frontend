import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';

const allProductsData = [
    {
        tag: "Molecular Precursors",
        productSnap: "/products/polymer-and-precursors-banner.jpg",
        title: "Preceramic Precursors and Polymers",
        description: "At CeraTattva, we intricately design and develop advanced preceramic polymers & precursors that can be transformed into thermo-structural, functional, and technical ceramics.",
        hyperLink: ""
    },
    {
        tag: "High Temperature & Functional Ceramics",
        productSnap: "/products/advanced-ceramics-banner.jpg",
        title: "Advanced Ceramics",
        description: "Aligned with growing demands for high performance ceramics, Certattva brings to you multi-functional advanced oxides, carbides, nitrides, borides, carboborides, carbonitrides and carboboronitrides that cater to a wider market.",
        hyperLink: ""
    },
    {
        tag: "Instruments",
        productSnap: "/products/ceramic-processing-instrument-banner.jpg",
        title: "Ceramic Processing Technologies",
        description: "Fibers are ubiquitous in our day-to-day life and CeraTattva foresees the requirement of a simple, cost-effective and efficient polymer and ceramic fiber producing machine which is amenable for bulk production.",
        hyperLink: ""
    },
    {
        tag: "Services",
        productSnap: "/products/ceraquest-banner.jpg",
        title: "Ceraquest – Bridging the gap between Industry and Academia",
        description: "Ceraquest- an initiative by CeraTattva Pvt Ltd provides a one stop solution for all your “Material” needs.",
        hyperLink: ""
    },
]

const AllProducts = () => {
    const [key, setKey] = useState<number>(1);
    const [loader, setLoader] = useState(false);
    const [tabData, setTabData] = useState(allProductsData);
    const [dynamicColor, setDynamicColor] = useState({
        color1: "#ff0000",
        color2: "#00ff00",
        color3: "#be432c"
    })
    const filterHandler = (filterTag:string) => {
        setLoader(true);
        if(!filterTag) {
            setTabData([...allProductsData]);
            setTimeout(()=> {
                setLoader(false)
            },1000)
        }
        else {
            setTimeout(()=> {
                setLoader(false)
            },1000)
            setTabData(allProductsData.filter(item=>item.tag===filterTag))
        }
    }
  return (
    <section className='py-10 lg:py-16'>
      <div className="container mx-auto 2xl:max-w-screen-xl 4xl:max-w-screen-2xl px-5">
        <div className='titles text-sm sm:text-base xl:text-lg flex gap-6 sm:gap-10 xl:gap-14 text-gray-500 pb-5 xl:pb-10 overflow-x-auto'>
            <button 
                className={`hover:text-black hover:border-b-2 hover:border-black whitespace-nowrap ${key===1 ? "text-black font-bold border-b-2 border-black" : "border-b-2 border-transparent"}`}
                type='button'
                onClick={()=> {setKey(1); filterHandler("");}}
            >All</button>
            <button
                className={`hover:text-black hover:border-b-2 hover:border-black whitespace-nowrap ${key===2 ? "text-black font-bold border-b-2 border-black" : "border-b-2 border-transparent"}`}
                type='button'
                onClick={()=> {setKey(2); filterHandler("Molecular Precursors");}}
            >High Temperature & Functional Ceramics</button>
            <button 
                className={`hover:text-black hover:border-b-2 hover:border-black whitespace-nowrap ${key===3 ? "text-black font-bold border-b-2 border-black" : "border-b-2 border-transparent"}`}
                type='button'
                onClick={()=> {setKey(3); filterHandler("High Temperature & Functional Ceramics");}}
            >Instruments</button>
            <button 
                className={`hover:text-black hover:border-b-2 hover:border-black whitespace-nowrap ${key===4 ? "text-black font-bold border-b-2 border-black" : "border-b-2 border-transparent"}`}
                type='button'
                onClick={()=> {setKey(4); filterHandler("Instruments");}}
            >Molecular Precursors</button>
            <button 
                className={`hover:text-black hover:border-b-2 hover:border-black whitespace-nowrap ${key===5 ? "text-black font-bold border-b-2 border-black" : "border-b-2 border-transparent"}`}
                type='button'
                onClick={()=> {setKey(5); filterHandler("Services");}}
            >Services</button>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center gap-y-16 pt-10'>
            {
                !loader ? tabData.map((item, index)=> {
                    return(
                        <div key={index} className='relative h-full pb-16 rounded relative group border border-orange-600 sm:border-gray-300 hover:shadow-inner hover:shadow-xl duration-300 hover:border-orange-600'>
                            <div className='relative w-11/12 mx-auto h-64 xl:h-72 4xl:h-96 top-[-20px] overflow-hidden rounded-lg shadow-xl'>
                                <Image
                                    src={item.productSnap}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className='object-center object-cover group-hover:scale-125 transform-gpu group-hover:origin-top duration-300 rounded-lg'
                                />
                            </div>
                            <h3 className='px-4 my-2 text-sm xl:text-base flex items-center gap-1 font-semibold text-orange-600'>
                                <div className='relative h-5 w-5'>
                                    <Image 
                                        src="/icons/tag.svg"
                                        alt='product tag'
                                        fill                                    
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className='object-center object-cover'
                                    />
                                </div>
                                {item.tag}
                            </h3>
                            <div className='py-2 top-64 bottom-0 left-0 px-4'>
                                <div>
                                    <h3 className='text-2xl font-semibold line-clamp-2'>{item.title}</h3>
                                    <p className='text-sm xl:text-lg line-clamp-3 my-2 duration-300'>{item.description}</p>
                                </div>
                            </div>
                            <Link href="" target='_blank'
                                className='border-2 absolute bottom-2 left-0 right-0 mx-4 text-center block mt-4 w-100 py-2 xl:py-3 xl:text-lg px-5 text-gray-600 hover:border-black hover:bg-black hover:text-white font-medium duration-300'
                                >
                                Know More
                            </Link>
                        </div>
                    )
                }) : ""
            }
        </div>
        
        {loader && <div className='flex justify-center mb-10 sm:mb-12'>
            <div className='relative w-64 h-64 md:w-80 md:h-80'>
                <Image 
                    src="/icons/ball-triangle.svg"
                    alt='Loader'
                    fill                                    
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-center object-cover'
                />
            </div>
        </div>}
      </div>
    </section>
  )
}

export default AllProducts
