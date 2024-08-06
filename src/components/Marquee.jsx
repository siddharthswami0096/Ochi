import { motion } from "framer-motion";

function Marquee() {
 
 return( 
   <div data-scroll data-scroll-section data-scroll-speed=".3" className="w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
    <div className="text border-t-2 border-b-2 border-[#4D837C] flex gap-10 overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} className="text-[17vw] leading-none font-[regular] text-white font-semibold tracking-tighter whitespace-nowrap uppercase pt-10 mb-5">we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} className="text-[17vw] leading-none font-[regular] text-white font-semibold tracking-tighter whitespace-nowrap uppercase pt-10 mb-5">we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} className="text-[17vw] leading-none font-[regular] text-white font-semibold tracking-tighter whitespace-nowrap uppercase pt-10 mb-5">we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} className="text-[17vw] leading-none font-[regular] text-white font-semibold tracking-tighter whitespace-nowrap uppercase pt-10 mb-5">we are ochi</motion.h1>
    </div>
  </div>
  ) 
}

export default Marquee;
