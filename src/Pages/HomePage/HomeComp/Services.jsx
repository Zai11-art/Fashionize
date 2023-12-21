import { AnimationOnScroll } from "react-animation-on-scroll";

const boxStyles = "h-[250px] w-[250px] m-4 rounded-[30px] border-2 border-[red]"
const Service = (props) => {
    return (
        <div className={boxStyles}>
            
        </div>
    );
}

function Services() {
     const boxStyles = "h-[140px] w-[140px] md:h-[160px] md:w-[160px] lg:h-[200px] lg:w-[200px] m-4 rounded-[30px] border-2 border-red-400 md:my-0 md:px-0 flex items-center justify-center shadow-xl duration-300 ease-in-out hover:scale-[1.02]"
     const boxStylesInside = "h-[120px] w-[120px] md:h-[140px] md:w-[140px] lg:h-[180px] lg:w-[180px] rounded-[30px] border-2 border-red-300 md:my-0 flex items-center justify-center flex-col"


    return (
       <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
       <div className="w-full md:h-[600px] h-[800px] flex md:flex-row flex-col ">
        
            <div className="md:h-[600px] h-[100%] w-[100%] bg-[red] flex justify-center items-center
            cta-card
            ">
                <h1 className="text-6xl text-white md:ml-2 ml-12">
                    EXPERIENCE <br /> 
                    <span className="hover:text-blue-500 duration-200 ease-in-out">fashion</span>  LIKE no <span className="hover:text-red-500 duration-200 ease-in-out">other.</span> </h1>
            </div>
        
        <div className="md:h-[100%] h-[500px]  md:w-[100%]  bg-[white] flex flex-wrap
        flex-row justify-center items-center  px-1
        ">
            <div className={`${boxStyles} service-glass-component `}>
                <div className={`${boxStylesInside}  service-glass-component`}>
                    <span className="text-[white] text-6xl">
                        <ion-icon name="search-circle-outline"></ion-icon>
                    </span>
                    <p className="text-[white] md:text-sm text-[0.7em]">Search Fashion</p>
                </div>
            </div>
            <div className={`${boxStyles} service-glass-component`}>
                <div className={`${boxStylesInside}  service-glass-component`}>
                     <span className="text-[white] text-6xl">
                        <ion-icon name="star-half-outline"></ion-icon>
                    </span>
                    <p className="text-[white] md:text-sm text-[0.7em]">Rate Trends</p>
                    
                </div>
            </div>
            <div className={`${boxStyles} service-glass-component`}>
                <div className={`${boxStylesInside}  service-glass-component`}>
                     <span className="text-[white] text-6xl">
                        <ion-icon name="share-social-outline"></ion-icon>
                    </span>
                    <p className="text-[white] md:text-sm text-[0.7em]">Share Trends</p>
                </div>
            </div>
            <div className={`${boxStyles} service-glass-component`}>
                <div className={`${boxStylesInside}  service-glass-component`}>
                     <span className="text-[white] text-6xl">
                     <ion-icon name="create-outline"></ion-icon>
                    </span>
                    <p className="text-[white] md:text-sm text-[0.7em]">Create.</p>
                </div>
            </div>
        </div>
       </div> 
       </AnimationOnScroll>
    );
}

export default Services;