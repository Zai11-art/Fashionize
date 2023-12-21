import { AnimationOnScroll } from "react-animation-on-scroll";

function Aboutsection() {
  return (
    <div className="glass-component">
      <div className="glass-hero w-full h-full absolute z-[1] flex flex-row  items-center justify-center flex-wrap ">
        <div
          className="z-[2] md:w-[900px] h-[460px] bg-[white] z-[5] p-5 w-[400px]
                flex flex-col text-center rounded-md items-center opacity-95
                "
        >
          <h1 className="text-5xl">
            <ion-icon name="person-circle-outline"></ion-icon>
          </h1>
          <h1 className="text-3xl mb-2">
            About <span className="span-material">Us</span>
          </h1>
          <p className="px-[7rem] py-[0.4rem] italic">
            Welcome to our fashion website! We are a team of passionate
            individuals who are dedicated to providing you with the latest
            fashion trends and styles. Our mission is to help you look and feel
            your best, no matter what the occasion.
          </p>

          <p className="px-[7rem] py-[0.4rem] italic">
            At our website, you will find a wide range of fashion items,
            including clothing, accessories, shoes, and more. We carefully
            curate our selection to ensure that we offer only the best quality
            products from the most reputable brands. From classic designs to the
            latest fashion trends, we have something for everyone.
          </p>
          <p className="px-[7rem] py-[0.4rem] italic">
            Thank you for visiting our website. We hope that you enjoy browsing
            our selection of fashion items, and we look forward to serving you
            in the future. If you have any feedback or suggestions, please do
            not hesitate to contact us.
          </p>
        </div>
      </div>

      <div className="bg-cover bg-center hero-image h-screen"></div>
    </div>
  );
}

export default Aboutsection;
