import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
function LandingPage() {
  const texts = ["we create", "eye opening", "presentations"];

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className="w-full h-screen bg-[#F1F1F1] pt-4">
      <div className="textstructure mt-40 px-16">
        {texts.map((item, index) => (
          <div className="masker font-[founders]" key={index}>
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "12vw" }}
                  transition={{ ease: [0.87, 0, 0.13, 1], delay: 0.5 }}
                  className="w-[12vw] h-[7vw] relative overflow-hidden rounded-lg top-[1.2vw] bg-green-500"
                >
                  <img
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </motion.div>
              )}
              <h1 className="flex items-center h-full uppercase text-[11vw] text-[#212121] leading-[8vw] tracking-wide font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-t-[1px] border-[#D2D2D2] mt-20 flex items-center justify-between py-5 px-14">
        {[
          "for public and private companies",
          "from the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-xl capitalize font-light" key={index}>
            {item}
          </p>
        ))}
        <div className="start flex gap-3">
          <div className="px-9 py-2 border-[2px] border-solid border-[#6F6F6F] rounded-full uppercase text-md">
            start the project
          </div>
          <div className="w-10 h-10 border-[2px] border-solid border-[#6F6F6F] rounded-full flex items-center justify-center">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 1, // Increased duration to make the animation slower
          delay: 4,
          repeatDelay: 3,
        }}
        className="absolute bottom-3 left-[50%] transform -translate-x-1/2"
      >
        <h5 className="text-[#D2D2D2] text-xl">Scroll down</h5>
      </motion.div>
    </div>
  );
}

export default LandingPage;
