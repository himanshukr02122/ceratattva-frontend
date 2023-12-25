import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useScroll, useSpring } from "framer-motion";
import Dop from "./Header/HeaderDropDown";
import HeaderMobile from "./HeaderMobile";


const AboutUsDropdownList = [
  {
    subMenuName: "Our Vision and Mission",
    subMenuLink: "/about-us/#visionAndMission",
  },
  {
    subMenuName: "Our Core Values",
    subMenuLink: "/about-us/#coreValues",
  },
  {
    subMenuName: "The Team",
    subMenuLink: "/about-us/teams",
  }
];
const productsDropdownList = [
  {
    subMenuName: "Preceramic Precursors and Polymers",
    subMenuLink: "/product/preceramic-precursors-and-polymers",
  },
  {
    subMenuName: "Advanced Ceramics",
    subMenuLink: "/product/advanced-ceramics/",
  },
  {
    subMenuName: "Ceramic Processing Technologies",
    subMenuLink: "/product/ceramic-processing-technologies/",
  }
];

const Header: React.FC<{mobileNavExpanded:any}> = (props) => {
  const { scrollYProgress } = useScroll();
  const [mobile, setMobile] = useState<boolean>(false)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [url, setUrl] = useState("");
  const [navbar, setNavbar] = useState(false);
  const [hidden, setHidden] = useState<boolean>(false);
  
   
  
  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 768 ? true : false)
    }
    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -100 },
  };
  // nav dissappear end
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(()=> {
    window.addEventListener("scroll", changeBackground);
  }, [])
  return (
    <header className="fixed z-10 w-full">
      {!mobile ? <motion.nav
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 2 }}
        initial={{ y: "-150px" }}
        className={` ${navbar? "bg-white shadow-lg h-full" : "h-0 "} duration-300`}
      >
        <div className="container 2xl:max-w-screen-xl 4xl:max-w-screen-2xl px-5 mx-auto">
          <div className="flex py-3 text-uppercase justify-between relative">
            <Link href="/">
              <div className={`relative z-2 duration-300 ${navbar ? "h-16 w-64":"h-12 w-60 lg:h-16 lg:w-72"}`}>
                <Image
                  alt="logo"
                  src={`${navbar ? "/icons/ceratattva-logo-01.png":"/icons/ceratattva-light-logo-removebg-preview.png"}`}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="flex flex-col justify-between">
              
              <Link
                href="https://www.google.com/maps/place/Northern+Arc+Capital+Limited/@12.990903,80.242719,17z/data=!4m6!3m5!1s0x3a526785e2095743:0x998fa8671584eaf6!8m2!3d12.9908578!4d80.2423382!16s%2Fg%2F11fnw11r8c?hl=en&entry=ttu"
                className="color-primary flex items-center justify-end mb-2"
                target="_blank"
              >
                <Image
                  alt="mail"
                  src="/icons/head-office-icon.svg"
                  height={14}
                  width={14}
                />
                <span className={`ms-1 text-sm ${navbar ? "":"text-white"}`}><strong className="me-2">Head Office</strong> IITM Research Park Taramani, Chennai 600113.</span>
              </Link>
              <div className="flex justify-end">
                <ul className={`flex gap-x-4 mb-2 ${navbar ? "":"text-white"}`}>
                  <li>
                    <a
                      href={`mailto:info@ceratattva.com`}
                      className="color-primary flex items-center"
                    >
                      <Image
                        alt="mail"
                        src="/icons/email.svg"
                        height={14}
                        width={14}
                      />
                      <span className="ms-1 text-sm">info@ceratattva.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:+918892737343`}
                      className="color-primary flex items-center"
                    >
                      <Image
                        alt="mail"
                        src="/icons/phone.svg"
                        height={14}
                        width={14}
                      />
                      <span className="ms-1 text-sm">+918892737343</span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className={`font-semibold text-base flex justify-end items-center gap-x-4 ${navbar ? "": "text-white" }`}>
              <li className={`${navbar ? "hover:text-logo-color" : "hover:text-stone-300"} duration-300`}>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Dop
                    menuName="About us"
                    mainLink="/about-us"
                    dropDownMenuData={AboutUsDropdownList}
                    additionalClass="absolute z-10 hover:text-logo-color"
                    mobile={mobile}
                  />
                </li>
                <li>
                  <Dop
                    menuName="Products"
                    mainLink="/product"
                    dropDownMenuData={productsDropdownList}
                    additionalClass="absolute z-10 hover:text-logo-color"
                    mobile={mobile}
                  />
                </li>
                <li className={`${navbar ? "hover:text-logo-color" : "hover:text-stone-300"} duration-300`}>
                  <Link href="/service">
                    Services
                  </Link>
                </li>
                <li className={`${navbar ? "hover:text-logo-color" : "hover:text-stone-300"} duration-300`}>
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav> : <HeaderMobile mobile={mobile} mobileNavExpanded={props.mobileNavExpanded} />}
      {navbar && <motion.div className={`fixed left-0 origin-left border-b-4 shadow-lg border-black w-full ${mobile ? "top-24": ""}`} style={{ scaleX }}></motion.div>}
    </header>
  );
};
export default Header;
