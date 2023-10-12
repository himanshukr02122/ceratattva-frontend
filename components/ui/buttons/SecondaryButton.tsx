import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const SecondaryButton: React.FC<{buttonLink:string, target:string, buttonName:string}> = (props) => {
  return (
    <>
     <Link  href={`${props.buttonLink}`} passHref legacyBehavior>
      <a target={props.target} rel="noopener noreferrer">
        <motion.button
          style={{
            background: "transparent",
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
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10,  background: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            from: "linear-gradient(to right, #e28929 -200%, #3b2122 -100%, #e28929 0%, #3b2122 100%)",
          }, }}
          className="flex items-center justify-center border-2 pl-8 py-1 pe-1 rounded-full backdrop-blur"
        >
          <div className={` me-3 text-white text-capitalize font-bold font-xs pe-5`}>
            {props.buttonName}
          </div>
          <div className={`flex items-center justify-center bg-orange-900 rounded-full`} style={{height: "40px", width: "40px"}}>
            <Image src="/button-icons/white-arrow.svg" alt="Maven silicon" width={20} height={20} />
          </div>
        </motion.button>
      </a>
     </Link>
    </>
  );
};

export default SecondaryButton;