import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import LogoLight from "/public/icons/ceratattva-logo-small.png";
import { motion } from "framer-motion";
import Dop from "./Header/HeaderDropDown";
import { useRouter } from "next/router";


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
  // {
  //   subMenuName: "software consultation and training",
  //   subMenuLink: "/portfolio/ceraquest-bridging-the-gap-between-industry-and-academia/",
  // }
];
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, y: 0  },
  hidden: { opacity: 0, y: -100 },
};


// Burger menu
const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};
// navMenu
const navMenu = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
//navItem
const navItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const HeaderMobile: React.FC<{mobile:boolean; mobileNavExpanded:any}> = props => {

  const [url, setUrl] = useState("");
  const router = useRouter()
   // Start:add overflow hidden to body when mobile nav is active (just to stop scrolling)
   const [hidden, setHidden] = useState(false);
   const addOverflowHiddenToBody = () => {
     setHidden(!hidden);
   };
  useEffect(() => {
     document.body.style.overflowY = hidden ? 'hidden' : 'scroll';
   }, [hidden]);
   useEffect(()=> {
    if(show) {
      setAnimation("moving");
      setShow(show => !show);
      setTimeout(() => {
        setAnimation(animation === "closed" ? "open" : "closed");
      }, 200);
      setHidden(!hidden);
    }
   }, [router.asPath])
  //  ends :add overflow hidden to body when mobile nav is active (just to stop scrolling)

  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState("closed");
  const onClick = () => {
    setAnimation("moving");
    setShow(show => !show);
    props.mobileNavExpanded(!show);
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 200);
    addOverflowHiddenToBody();
  };
  // Navbar background color change
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    if (typeof window != undefined) {
      setUrl(window.location.href);
    }
  }, []);


  return (
    <>
      <div className="block md:hidden">
        <motion.div
          style={{position:"fixed",
              width:"100%",
              top:"0"}}
              variants={variants}
              initial={{y:"-150px"}} animate={{y:"0px"}}
              transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
              className={`z-50 ${navbar? "bg-white shadow-lg h-24" : "flex items-center"} duration-300`}
        >
          <div className="container mx-auto px-5">
            <div className="pt-3 pb-2 flex justify-end">
                <ul className={`flex gap-4 ${navbar ? "":"text-white"}`}>
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
              <div className="flex justify-between items-center">
                <Link href="/">
                  <div className={`relative ${navbar ? "w-16" : "w-20"} duration-300`}>
                    <Image
                      src={LogoLight}
                      alt="Maven Silicon - The Best VLSI Training Institute in Bangalore"
                    />
                  </div>
                </Link>
                <motion.button
                  onClick={onClick}
                  className={`${navbar ? "w-9 h-9" : "w-10 h-10"} w-10 h-10 rounded-full flex justify-center items-center ${navbar? "bg-black": "bg-white"}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {navbar ? <svg width="20" height="20" viewBox="0 0 24 24">
                      <motion.path
                        stroke="#fff"
                        animate={animation}
                        variants={path01Variants}
                      />
                      <motion.path
                        stroke="#fff"
                        animate={animation}
                        variants={path02Variants}
                      />
                    </svg>:
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <motion.path
                        stroke="#000"
                        animate={animation}
                        variants={path01Variants}
                      />
                      <motion.path
                        stroke="#000"
                        animate={animation}
                        variants={path02Variants}
                      />
                    </svg>
                  }
                </motion.button>
              </div>
          </div>
        </motion.div>
      </div>
      <motion.nav
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bottom-0 w-full bg-sky-500"
        style={{zIndex:39, background:"linear-gradient(45deg, rgba(0,39,94,1) 0%, rgba(6,112,169,1) 100%)" }}
      >
        <motion.div className="absolute text-white top-0 left-0 w-full px-2">
          <motion.ul variants={navMenu} className="relative container mx-auto top-32 m-0 p-0">
            <motion.li
              variants={navItem}
              className="cursor-pointer border-b-2 leading-10 hover:text-logo-color"
              whileTap={{ color: "#fff" }}
            >
              <Link href="/">                    
                Home
              </Link>
            </motion.li>
            <motion.li
              variants={navItem}
              className="cursor-pointer border-b-2 leading-10"
              whileTap={{ color: "#fff" }}
            >
              <Dop
                menuName="About us"
                mainLink="/about-us"
                dropDownMenuData={AboutUsDropdownList}
                additionalClass="absolute z-10"
                mobile={props.mobile}
              />
            </motion.li>
            <motion.li  
              variants={navItem}
              className="cursor-pointer border-b-2 leading-10"
              whileTap={{ color: "#fff" }}
            >
              <Dop
                menuName="Products"
                mainLink="/product"
                dropDownMenuData={productsDropdownList}
                additionalClass="absolute z-10"
                mobile={props.mobile}
              />
            </motion.li>
            <motion.li
              variants={navItem}
              className="cursor-pointer border-b-2 leading-10 hover:text-logo-color"
              whileTap={{ color: "#fff" }}
            >
              <Link href="/service">                    
                Services
              </Link>
            </motion.li>
            <motion.li
              variants={navItem}
              className="cursor-pointer border-b-2 leading-10 hover:text-logo-color"
              whileTap={{ color: "#fff" }}
            >
              <Link href="/contact">                    
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.nav>
    </>
  );
};
export default HeaderMobile;