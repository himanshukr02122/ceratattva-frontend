import React from 'react'

const ProductSubNavBanner:React.FC<{bannerImage:string;title:string; heading:string; para:string}> = ({bannerImage, title, heading, para}) => {
    console.log(bannerImage, 'bannerImage');
    
return (
    <section 
        className={`h-[500px] sm:h-[600px] md:h-[700px] 3xl:h-[1000px] bg-fixed flex items-start pt-20 pb-12 lg:pb-16 3xl:pt-52 3xl:pb-32 bg-no-repeat shadow-lg bg-cover bg-white relative bg-center bg-no-repeat after:content-[""] after:absolute after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0`}
        style={{backgroundImage: `url(${bannerImage})`}}
    >
        <div className='relative z-[9] container mx-auto px-5 2xl:max-w-screen-xl 4xl:max-w-screen-2xl'>
            <div className='group mt-16 sm:mt-20 md:mt-32 py-6 sm:py-10 3xl:py-16 px-6 bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.6)] w-full md:w-2/3'>
                <h3 className=' text-white mb-2 text-base md:text-xl opacity-60 group-hover:opacity-100 underline-offset-4 underline'>
                    {title}
                </h3>
                <div className=' relative flex items-center'>
                    <h2 className='text-white text-2xl sm:text-4xl xl:text-5xl font-bold'>
                        {heading}
                    </h2>
                </div>
                <p className='font-light w-full md:w-2/3 mt-3 text-gray-300'>
                    {para}
                </p>
            </div>
        </div>
    </section>
  )
}

export default ProductSubNavBanner
