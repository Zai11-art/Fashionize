import { AnimationOnScroll } from "react-animation-on-scroll";

const persona =
  "data:image/jpeg;base64,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";
const personaTwo =
  "data:image/jpeg;base64,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";

function Stats() {
  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
      <div className="w-full md:h-[600px] h-[800px] flex md:flex-row flex-col-reverse md:mt-[0] mt-[150px] ">
        <div className="md:h-[100%] h-[500px]  md:w-[100%]   bg-[white] flex 
                    flex-row justify-center items-center md:mx-0 mx-5 my-5 ">
          <div className="md:w-[400px] md:h-[500px] w-[100%] h-[500px] px-5
                      border-2 border-red-400 rounded-lg bg-[white] flex flex-col
                      justify-center  items-center cta-card">
            <div className="md:w-[310px] md:h-[150px] w-[310px] h-[150px] border-2 border-red-400 rounded-lg bg-[#1B1C22] flex flex-col 
                        justify-center items-center text-white py-[50px] py-12 ">
              <img
                src={persona}
                alt=""
                className="w-[60px] h-[60px] rounded-full mb-2"
              />
              <p className="text-[15px] mb-2">Harry Davidoff</p>
              <div className="flex flex-row">
                <section className="px-3 text-[0.7em] flex flex-col justify-center items-center">
                  <span>5000</span>
                  <span>Followers</span>
                </section>
                <section className="px-3 text-[0.7em] flex flex-col justify-center items-center">
                  <span>50</span>
                  <span>Following</span>
                </section>
                <section className="px-3 text-[0.7em] flex flex-col justify-center items-center">
                  <span>7k</span>
                  <span>Stars</span>
                </section>
              </div>
            </div>

            <div
              className="md:w-[310px] md:h-[320px] w-[310px] h-[310px] border-2 border-red-400 rounded-lg bg-[#1B1C22]  flex flex-col
                        justify-center items-center p-2 "
            >
              <div className="cta-card md:w-[270px] md:h-[300px] w-[270px] h-[300px] rounded-sm mt-2 mb-1 flex justify-center items-center">
                <img
                  className="md:w-[260px] md:h-[200px] w-[260px] h-[200px] rounded-sm "
                  src="https://i.pinimg.com/originals/cb/0c/28/cb0c286174547c07bb8668aaf126a4e4.jpg"
                  alt=""
                />
              </div>

              {/* comments */}
              <section
                className="bg-[white] md:w-[270px] md:h-[100px] w-[270px] h-[100px] rounded-md mt-0 mb-2 flex md:flex-row
                            justify-around items-center
                            "
              >
                <div className="ml-2">
                  <img
                    src={personaTwo}
                    alt=""
                    className="w-[40px] h-[40px] rounded-full mb-2"
                  />
                </div>
                <div className="w-[60%]">
                  <p className="text-[11px]">
                    Yooo! this looks sick! Can I know more about the brand?
                  </p>
                  <span className="text-[12px]">
                    <ion-icon name="star-outline" className=""></ion-icon>
                    <ion-icon name="star-outline" className=""></ion-icon>
                    <ion-icon name="star-outline" className=""></ion-icon>
                    <ion-icon name="star-outline" className=""></ion-icon>
                    <ion-icon name="star-outline" className=""></ion-icon>
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          className="md:h-[600px] h-[100%] w-[100%] bg-[red] flex justify-center items-center
          cta-card"
        >
          <h1 className="text-6xl text-white md:mr-2 mr-12 text-right px-5 py-[100px]">
            CHANGE <br />{" "}
            <span className="hover:text-blue-500 duration-200 ease-in-out">
              fashion
            </span>{" "}
            your way{" "}
            <span className="hover:text-red-500 duration-200 ease-in-out">
              other.
            </span>{" "}
          </h1>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default Stats;
