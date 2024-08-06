function Cards() {
    return (
      <div className="w-full h-screen flex gap-2 bg-[#F1F1F1]  px-20 py-20 mt-10">
        <div className="containeer w-[55%] h-[70%] rounded-xl overflow-hidden">
          <div className="relative card w-full h-full bg-[#004D43] flex items-center justify-center">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute bottom-10 left-10 px-5 py-1  rounded-full border-[2px] border-[#CDEA68] text-[#CDEA68]">
              ©2019-2022
            </button>
          </div>
        </div>
        <div className="relative containeer w-[55%] h-[70%] overflow-hidden flex gap-3 px-2">
          <div className=" relative card w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="absolute bottom-10 left-10 px-5 py-1  rounded-full border-[2px] border-[#CDEA68] text-[#CDEA68]">
              ©2019-2022
            </button>
          </div>
          <div className=" relative card w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button className="absolute bottom-10 left-10 px-5 py-1  rounded-full border-[2px] border-[#CDEA68] text-[#CDEA68]">
              ©2019-2022
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;
  