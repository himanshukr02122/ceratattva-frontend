import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const socialMediaHandlers = [
  {
    icon: "/icons/facebook-icon.svg",
    link: "https://www.facebook.com",
    altText: "Social Media handle-facebook"
  },
  {
    icon: "/icons/twitter-icon.svg",
    link: "https://www.twitter.com",
    altText: "Social Media handle-twitter"
  },
  {
    icon: "/icons/insta-icon.svg",
    link: "https://www.insta.com",
    altText: "Social Media handle-insta"
  },
  {
    icon: "/icons/linkedin-icon.svg",
    link: "https://www.linkedin.com",
    altText: "Social Media handle-linkedin"
  },
  // {
  //   icon: "/icons/behance-icon.svg",
  //   link: "https://www.behance.com",
  //   altText: "Social Media handle-behance"
  // },
]

const Footer = () => {
  return (
    <footer className='py-10' style={{background:"linear-gradient(45deg, rgba(0,39,94,1) 0%, rgba(6,112,169,1) 100%)"}}>
      <div className='relative w-full'>
        {/* <Image 
          src="/footer-wave.svg"
          alt='footer wave'
          fill
          className='object-cover object-center'
        /> */}
      </div>
      <div className='container mx-auto p-5 text-white'>
        <div className='grid grid-cols-1 xl:grid-cols-4 xl:gap-6'>
          <div className="relative col-span-3 grid xs:grid-cols-2 md:grid-cols-3 gap-6">
            <div className='w-11/12 sm:w-full'>
              <h4 className='font-medium text-xl px-1'>Our Services</h4>
              <ul className='ci-footer__list pt-5'>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="" className='flex gap-2 items-center px-1'>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                    </span>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>Preceramic Precursors and Polymers</span>
                  </Link>
                </li>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="" className='flex gap-2 items-center px-1'>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                    </span>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>Advanced Ceramics</span>
                  </Link>
                </li>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="" className='flex gap-2 items-center px-1'>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                    </span>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>Ceramic Processing Technologies</span>
                  </Link>
                </li>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="" className='flex gap-2 items-center px-1'>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                    </span>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>Ceraquest</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='w-11/12 sm:w-full'>
              <h4 className='font-medium text-xl px-1'>About</h4>
              <ul className='ci-footer__list pt-5'>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="" className='flex gap-2 items-center px-1'>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                    </span>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>Ceratattva InnoTech</span>
                  </Link>
                </li>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="" className='flex gap-2 items-center px-1'>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                    </span>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>The Team</span>
                  </Link>
                </li>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="" className='flex gap-2 items-center px-1'>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                    </span>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>Client testimonials</span>
                  </Link>
                </li>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="" className='flex gap-2 items-center px-1'>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                    </span>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>The way ahead</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='w-11/12 sm:w-full'>            
              <h4 className='font-medium text-xl px-1'>Contact us</h4>        
              <ul className='ci-footer__list pt-5'>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="https://www.google.com/maps/place/Northern+Arc+Capital+Limited/@12.990903,80.242719,17z/data=!4m6!3m5!1s0x3a526785e2095743:0x998fa8671584eaf6!8m2!3d12.9908578!4d80.2423382!16s%2Fg%2F11fnw11r8c?hl=en&entry=ttu" className='flex gap-1 items-center px-1'>
                    <div className='relative w-5 h-5 shrink-0'>
                      <Image 
                        src="/icons/location-svg.svg"
                        alt='location icon' 
                        fill
                        className='object-center object-cover'
                      />
                    </div>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>IITM Research Park Taramani, Chennai 600113.</span>
                  </Link>
                </li>
                <li className='ci-footer__list-item pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <Link href="" className='flex gap-1 items-center px-1'>
                    <div className='relative w-5 h-5 shrink-0'>
                      <Image 
                        src="/icons/location-svg.svg"
                        alt='location 2'
                        fill
                        className='object-center object-cover'
                      />
                    </div>
                    <span className='truncate hover:overflow-visible hover:whitespace-normal'>IIT Madras</span>
                  </Link>
                </li>
                <li className='ci-footer__list-item flex gap-2 items-center px-1 pb-3 text-sm lg:text-base font-light'>
                  <div className='flex gap-1 items-start px-1'>
                    <div className='relative w-5 h-5 shrink-0'>
                      <Image 
                        src="/icons/phone-svg2.svg"
                        alt='phone icon' 
                        fill
                        className='object-center object-cover'
                      />
                    </div>
                    <span className='flex gap-2 flex-col items-center'>
                      <a href="tel:+91-8921299283" className='hover:opacity-80'>+91-8921299283</a>
                      <a href="tel:+91-9912426849" className='hover:opacity-80'>+91-9912426849</a>
                    </span>
                  </div>
                </li>
                <li className='ci-footer__list-item flex gap-2 items-center px-1 pb-3 text-sm lg:text-base font-light hover:opacity-80'>
                  <div className='relative w-5 h-5 shrink-0'>
                    <Image 
                      src="/icons/contact-svg.svg"
                      alt='contact 2'
                      fill
                      className='object-center object-cover'
                    />
                  </div>
                  <a href="mailto:info@ceratattva.com" className='truncate hover:overflow-visible hover:whitespace-normal'>info@ceratattva.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='group mt-8 xl:mt-0 px-8 pb-8 pt-5 bg-[rgba(0,0,0,0.2)] hover:bg-white hover:text-black duration-300'>
            <p className='mb-8'>CeraTattva InnoTech (CTIT) Pvt. Ltd., provides specialized and proprietary preceramic precursors, polymers, ceramic products and solutions for diverse array of applications covering key strategic sector of energy, automobile, aerospace and defence.</p>
            <Link href="" target='_blank'
              className='border py-2 px-3 xs:px-5 group-hover:border-black group-hover:bg-black group-hover:text-white font-medium'
            >
              Need more information ?
            </Link>
          </div>
        </div>
        <div className="ci-footer__bottom mt-5 box-border">
          <div
            className="py-3 flex justify-between gap-3 xl:gap-5 px-0 align-items-baseline flex-wrap md:flex-nowrap"
          >
            <ul className="ci-footer__lists flex flex-wrap gap-1 mx-[-12px]">
              <li className="ci-footer__list border-r border-stone-400 flex items-center px-3 text-sm xl:text-base font-light">
                <a className="ci-footer__link hover:opacity-80" href="./web-policy.html"
                  >Website Usage Policy</a>
              </li>
              <li className="ci-footer__list border-r border-stone-400 flex items-center px-3 text-sm xl:text-base font-light">
                <a
                  className="ci-footer__link hover:opacity-80"
                  href="/pdf/privacy-policy.pdf"
                  target='_blank'
                  >Privacy Policy</a>
              </li>
              <li className="ci-footer__list flex items-center px-3 text-sm xl:text-base font-light">
                <a 
                  className="ci-footer__link hover:opacity-80" 
                  href="/pdf/terms-of-service.pdf"
                  target='_blank' 
                >
                  Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div className="to-footer__down flex flex-wrap gap-4 justify-between items-center text-sm xl:text-base font-light py-3 border-t-2 border-orange-600">
              <div>
                Copyright 2023 Ceratattva Innotech Pvt. Ltd. Powered by <Link className='font-medium text-orange-600 hover:opacity-80' href="https://algoristan.com/wordpress/" title='https://algoristan.com/wordpress/' target='_blank'>Algoristan Research Web Services</Link>. All rights reserved. Designed & Developed by <Link className='font-medium text-orange-600 hover:opacity-80' title='https://resume-alpha-two.vercel.app/' href="https://resume-alpha-two.vercel.app/" target='_blank'>Himanshu Kumar</Link>
              </div>
              <ul className='flex items-baseline gap-4'>
                  {socialMediaHandlers.map(item=> {
                      return(
                        <li key={item.link} title={item.altText} className='group'>
                          <Link href={item.link} target='_blank' className='relative inline-block w-5 h-5'>
                            <Image 
                              src={item.icon}
                              alt={item.altText}
                              fill
                              className='object-center object-cover animate-pulse group-hover:animate-bounce'
                            />
                          </Link>
                        </li>
                      )
                  })}
              </ul>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
