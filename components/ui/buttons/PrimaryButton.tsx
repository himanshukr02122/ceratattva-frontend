import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";

const PrimaryButton: React.FC<{buttonName:String, onClickHandle:any}> = (props) => {
  return (
    
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
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10,  background: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
        from: "linear-gradient(to right, #e28929 -200%, #3b2122 -100%, #e28929 0%, #3b2122 100%)",
        }, }}
        className="flex items-center justify-between border-2 pe-4 py-2 ps-2 rounded-full backdrop-blur ci-bg__light hover:text-white"
        onClick={props.onClickHandle}
    >
      <span className="relative flex items-center justify-center h-8 w-8">
          <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-white opacity-75"></span>
          <span className="relative flex items-center justify-center h-8 w-8 bg-white rounded-full ">
              <Image
                  alt="logo"
                  src="/icons/icon-play-20.png"
                  height={20}
                  width={20}
              />
          </span>
      </span>
      <span className='ps-5 me-4 font-semibold inline-block'>{props.buttonName}</span>

  </motion.button>
  )
}

export default PrimaryButton
