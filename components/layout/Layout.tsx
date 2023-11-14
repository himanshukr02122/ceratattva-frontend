import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

type DashboardLayoutProps = {
    children: React.ReactNode,
  };

const Layout = ({children}:DashboardLayoutProps) => {
  const [scrollButton, setScrollButton] = useState(false);
  const [quoteButton, setQuoteButton] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const mobileNavExpanded = (expanded:boolean) => {
    setExpanded(expanded);
  }
  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setScrollButton(true);
      } else {
        setScrollButton(false);
      }
      if(window.scrollY) setQuoteButton(false);
      else setQuoteButton(true);
    });
  }, [])
  return (
    <>
      <Header mobileNavExpanded={mobileNavExpanded} />
      <main>{children}</main>
      {scrollButton && <button
        onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
        type="button" 
        className={`group fixed z-[200] animate-pulse hover:animate-none flex justify-center items-center w-14 h-14 bg-orange-600 bottom-12 text-3xl text-white right-10 duration-500 ${scrollButton ? "opacity-1" : "opacity-0"}`}>
        <Image 
          src="/button-icons/up-arrow-icon.svg"
          alt=""
          width={20}
          height={20}
          className="object-center object-contain group-hover:animate-bounce"
        />
      </button>}
      {!expanded && <motion.button 
        style={{
          background: "#000",
          border:"2px solid #e28929"
          }}
          whileHover={{
          background: [
              "linear-gradient(to right, #e28929 -200%, #3b2122 -100%, #e28929 0%, #3b2122 100%)",
              "linear-gradient(to right, #e28929 -100%, #3b2122 0%, #e28929 100%, #3b2122 200%)",
              "linear-gradient(to right, #e28929 0%, #3b2122 100%, #e28929 200%, #3b2122 300%)",
          ],
          border:"2px solid #e28929"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10,  background: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          from: "linear-gradient(to right, #e28929 -200%, #3b2122 -100%, #e28929 0%, #3b2122 100%)",
          }, }}
          className="fixed rounded-l-xl z-10 flex items-center justify-between h-12 top-40 right-0 border-2 py-2 ps-2 backdrop-blur ci-bg__light text-white overflow-hidden"
          onClick={()=>router.push("/request-a-quote")}
          onMouseEnter={()=>setQuoteButton(true)} 
          onMouseLeave={()=>setQuoteButton(false)}
        >
        <span className={`inline-block 3xl:text-lg font-semibold ${quoteButton ? "w-full h-full px-2 xs:px-5" : "h-0 w-0 opacity-0"}`}>Request a quote</span>
        <span className="pr-2">
          <Image 
            src="/icons/caret-circle-left.svg"
            alt=""
            width={32}
            height={32}
            className={`object-center object-contain ${quoteButton ? "rotate-180" : "" } duration-300`}
          />
        </span>
      </motion.button>}
      <Footer />
    </>
  );
};

export default Layout;
