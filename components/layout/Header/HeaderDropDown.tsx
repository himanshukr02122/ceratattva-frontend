import { useState,useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Router from "next/router";
const Dop: React.FC<{menuName: String, dropDownMenuData: any [],additionalClass: String, mobile: boolean }> = (props) => {
  const [navbar, setNavbar] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <motion.div
        className="z-10"
        onClick={() => setMenuVisible(!isMenuVisible)}
        onMouseEnter={() => setMenuVisible(true)}
        onMouseLeave={() => setMenuVisible(false)}
      >
        <a className={`flex items-center ${isMenuVisible ? !props.mobile ? navbar ? "text-logo-color" : "text-stone-300" : "text-logo-color" : ""} duration-300`}><span className="me-1">{props.menuName}</span>
          <AnimatePresence>
            <motion.div animate={{ rotate: isMenuVisible ? 180 : 0 }}
             transition={{ duration: 0.8 }}
             >
              {!props.mobile ? <svg xmlns="http://www.w3.org/2000/svg"  width="12" height="12" fill={navbar ? isMenuVisible ? '#db4328' : "#000" : "#fff" } className="bi bi-chevron-down" viewBox="0 0 16 16">
                 <path fillRule="evenodd"  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>:<svg xmlns="http://www.w3.org/2000/svg"  width="12" height="12" fill={isMenuVisible ? '#db4328' : "#fff" } className="bi bi-chevron-down" viewBox="0 0 16 16">
                 <path fillRule="evenodd"  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>}
            </motion.div>
          </AnimatePresence>
          </a>
          {isMenuVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`  ${props.additionalClass}`}
          >
            <ul className="mt-5 bg-white text-black font-medium relative z-10" >
             
              {props.dropDownMenuData.map((subMenuItem, index) => {
                return (
                  <li
                    className="text-nowrap px-6 text-sm border-b border-slate-500 py-3 hover:text-logo-color"
                    key={index}
                  >
                    <Link href={subMenuItem.subMenuLink} >
                        {subMenuItem.subMenuName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </motion.div>
  );
};

export default Dop;
