function About() {
    return (
      <div className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl p-20">
        <h1 className="font-[regular] text-[3.5vw] leading-[4.5vw] tracking-tight">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people. What you can expect: We create tailored presentations to help
        </h1>
        <div className="w-full mt-20 border-t-[2px] border-[#B3CC5E] flex justify-between py-5">
          <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <div className="w-1/3 flex items-center justify-between uppercase text-2xl px-10 py-5 bg-[#000000] text-white rounded-full mt-6">
              <p>read more</p>
              <div className="w-6 h-6 rounded-full bg-white"></div>
          </div>
          </div>
          <div className="w-1/2 h-[70vh] bg-[#CDEA68] overflow-hidden rounded-xl">
          <img className="w-full h-full object-cover " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  