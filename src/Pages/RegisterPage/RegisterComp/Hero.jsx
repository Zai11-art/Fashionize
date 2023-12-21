function Hero() {
  return (
    <div className=" glass-component h-screen">
      <div className="cta-card h-full flex items-center justify-center ">
        <div
          className=" md:w-[400px] w-[320px] h-[500px] bg-[white] z-[5] p-3  border-[3px] drop-shadow-2xl 
                flex flex-col text-center  rounded-xl items-center opacity-95">
          <h1 className="mt-7 mb-4">
            <span className="text-4xl">
              Regist<span className="span-material">er</span>
            </span>
          </h1>

          <div className="my-3">
            <h2 className="text-xl py-2">Email</h2>
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" rounded-sm
                        w-[210px] h-[1.5rem] border-[1px] border-red-300 text-center caret-red-500
                        "
            />
          </div>

          <div className="my-3">
            <h2 className="text-xl py-2">Password</h2>
            <input
              type="text"
              placeholder="Enter Your Password"
              className=" rounded-sm
                        w-[210px] h-[1.5rem] border-[1px] border-red-300 text-center border-full text-center caret-red-500
                        "
            />
          </div>

          <button
            className="px-[30px] py-1 bg-[red] rounded-lg mt-[25px] hover:bg-[white] 
                    duration-100 hover:text-[red] text-white text-base mt-[20px] 
                    ease-in-out
                    "
          >
            Sign up
          </button>

          <div className="mt-4">
            <a href="/Login" className="underline text-[0.75em] text-red-500">
              Login Instead
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
