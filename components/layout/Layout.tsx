import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";

type DashboardLayoutProps = {
    children: React.ReactNode,
  };

const Layout = ({children}:DashboardLayoutProps) => {
  const [scrollButton, setScrollButton] = useState(false);
  
  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setScrollButton(true);
      } else {
        setScrollButton(false);
      }
    });
  }, [])
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Layout;
