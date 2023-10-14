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
    subMenuLink: "/portfolio/preceramic-precursors-and-polymers",
  },
  {
    subMenuName: "Advanced Ceramics",
    subMenuLink: "/portfolio/advanced-ceramics/",
  },
  {
    subMenuName: "Ceramic Processing Technologies",
    subMenuLink: "/portfolio/ceramic-processing-technologies/",
  },
  {
    subMenuName: "Ceraquest",
    subMenuLink: "/portfolio/ceraquest-bridging-the-gap-between-industry-and-academia/",
  }
];

const Header: React.FC = (props) => {
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
        <div className="container mx-auto">
          <div className="flex py-3 text-uppercase justify-between relative">
            <Link href="/">
              <div className={`relative z-2 duration-300 ${navbar ? "h-16 w-64":"h-16 w-72 lg:h-20 lg:w-96"}`}>
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
                href="/"
                className="color-primary flex items-center justify-end me-2 mb-2"
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
                <ul className={`flex gap-x-4 me-2 mb-2 ${navbar ? "":"text-white"}`}>
                  {/* <li>
                  
                  </li> */}
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
              <ul className={`font-semibold text-base flex justify-end items-center gap-x-4 me-2 ${navbar ? "": "text-white" }`}>
              <li className={`${navbar ? "hover:text-logo-color" : "hover:text-stone-300"} duration-300`}>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Dop
                    menuName="About us"
                    dropDownMenuData={AboutUsDropdownList}
                    additionalClass="absolute z-10 hover:text-logo-color"
                    mobile={mobile}
                  />
                </li>
                <li>
                  <Dop
                    menuName="Products"
                    dropDownMenuData={productsDropdownList}
                    additionalClass="absolute z-10 hover:text-logo-color"
                    mobile={mobile}
                  />
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
      </motion.nav> : <HeaderMobile mobile={mobile} />}
      {navbar && <motion.div className={`fixed left-0 origin-left border-b-4 shadow-lg border-black w-full ${mobile ? "top-24": ""}`} style={{ scaleX }}></motion.div>}
    </header>
  );
};
export default Header;
