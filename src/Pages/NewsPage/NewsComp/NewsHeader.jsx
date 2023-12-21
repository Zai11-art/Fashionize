import { AnimationOnScroll } from "react-animation-on-scroll";

function NewsHeader() {
  return (
    <div className=" glass-component shadow-lg h-full w-full">
      <div className="news-image flex flex-row items-center justify-center py-[100px] flex-wrap ">
        <div
          className="md:w-[400px] h-full bg-[white] z-[5] p-5 w-[400px]
                lg:ml-[20px] md:ml-[30px] ml-[0] flex flex-col justify-center text-center rounded-xl items-center opacity-95
                "
        >
          <h1 className="text-black text-3xl pb-5">
            Experience <span className="text-[red]"> Fashion</span>.
          </h1>
          <div className="h-12 w-[80%] cta-card rounded-xl"></div>
          <p className="text-black text-base px-6 pt-3">
            Discover sophisticated and stylish fashion for the modern adult at
            our website. Our collection features a carefully curated selection
            of clothing and accessories to elevate your everyday wardrobe.
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className="
                         w-[50%] h-[6.5%] p-2 mt-10 border-full text-center caret-red-500
                         "
          />
          <button
            className="px-5 py-2 bg-[red] rounded-lg mt-[10px] hover:bg-[white] 
                         duration-100 hover:text-[red] text-white text-base mt-[20px] 
                         ease-in-out
                         "
          >
            Join now
          </button>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
}

export default NewsHeader;
