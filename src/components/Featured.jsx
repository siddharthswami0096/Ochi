import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 bg-[#F1F1F1] text-black">
      <div className="w-full px-20 border-b-[1px] border-[#B2B2B2] pb-20">
        <h1 className="text-7xl font-[regular] font-light">
          Featured Projects
        </h1>
      </div>
      <div className="w-full px-20 py-10">
        <div className="cards relative w-full h-[75vh] flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => {
              handleHover(0);
            }}
            onHoverEnd={()=>{
              handleHoverEnd(0)
            }}
            className="card-containeer w-1/2 rounded-xl overflow-hidden"
          >
            <h1 className="text-[13vw] overflow-hidden leading-none uppercase font-[founders] text-[#CDEA68] absolute  z-[9] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ease:[0.83, 0, 0.17, 1],delay:index*0.05}}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </motion.div>
          <motion.div
          onHoverStart={() => {
            handleHover(1);
          }}
          onHoverEnd={()=>{
            handleHoverEnd(1)
          }}
           className="card-containeer w-1/2 rounded-xl overflow-hidden">  
              <h1 className="text-[13vw] overflow-hidden leading-none uppercase font-[founders] text-[#CDEA68] absolute  z-[9] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {"vise".split("").map((item, index) => (
                  <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ease:[0.83, 0, 0.17, 1],delay:index*0.05}}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
