import { AnimationOnScroll } from "react-animation-on-scroll"

const persona = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY8sRx-7LnzOySr3w7LSJm1egwEJV1VvPlOgZvQme1wzdUJrwrETcdH_5XaSAJyU9t1Q&usqp=CAU'
const personaTwo = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNzI5MjU4fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
const personaThree = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tbWV8ZW58MHx8MHx8&w=1000&q=80'

const Waves = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"><path fill="#e7008a" 
        className=""
        fill-opacity="1" d="M0,160L24,181.3C48,203,96,245,144,234.7C192,224,240,160,288,133.3C336,107,384,117,432,133.3C480,149,528,171,576,170.7C624,171,672,149,720,122.7C768,96,816,64,864,69.3C912,75,960,117,1008,144C1056,171,1104,181,1152,160C1200,139,1248,85,1296,58.7C1344,32,1392,32,1416,32L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    )

}

function Testimonials() {
    const boxStyles = " md:h-[400px] md:w-[300px] h-[450px] w-[300px] py-5 mx-5 m-6 bg-[#1B1C22] rounded-[30px] border-2 border-red-400 flex items-center justify-center shadow-xl duration-300 ease-in-out hover:scale-[1.02]"
   
     return ( 
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
        <div className="w-full md:h-[600px]  text-[white] cta-card lg:h-[600px] lg:mt-[60px] md:mt-[60px] sm:mt-[60px] flex flex-col justify-around items-center  lg:py-[350px] md:py-[550px] sm:py-[200px] ">
            <div className="">
                <h1 className="text-5xl text-[white] my-[50px]"> <i>Homage</i> </h1>
            </div>
            <div className="w-full flex flex-row justify-around items-center flex-wrap">
                <div className={`flex flex-col justify-center items-center ${boxStyles} `}>
                    <img src={persona} alt="" className="h-[80px] w-[70px] rounded-full bg-[red] mb-4"/>
                    <h1>Jack Zadeolseoff </h1>
                    <b className="text-slate text-[12px] pb-4">Photographer</b>
                    <p className="text-center text-base text-[12px] px-5 md:text-[14px] text-[0.65em]">
                    <i>"I recently discovered this fashion website and it has quickly become my go-to destination for stylish and on-trend pieces. The selection is always curated and the prices are reasonable, making it easy to stay fashionable without breaking the bank."</i> <br />
                        
                    </p>
                </div>
                <div className={`flex flex-col justify-center items-center ${boxStyles} `}>
                    <img src={personaTwo} alt="" className="h-[80px] w-[70px] rounded-full bg-[red] mb-4"/>
                    <h1>Raniel Casetero</h1>
                    <b className="text-slate text-[12px] pb-4">Designer</b>
                    <p className="text-center text-base text-[12px] px-5 md:text-[14px] text-[0.65em]">
                        <i>"I have been shopping at this fashion website for years and have always been impressed by the quality of their clothing and the exceptional customer service. Their attention to detail and commitment to providing a seamless shopping experience keeps me coming back time and time again."</i><br />
                        
                    </p>
                </div>
                <div className={`flex flex-col justify-center items-center ${boxStyles} `}>
                    <img src={personaThree} alt="" className="h-[80px] w-[70px] rounded-full bg-[red] mb-4"/>
                    <h1>Kevin Honrey</h1>
                    <b className="text-slate text-[12px] pb-4">TrendSetter</b>
                    <p className="text-center text-base text-[12px] px-5 md:text-[14px] text-[0.65em]">
                        <i>"I absolutely love shopping at this fashion website! Their selection of trendy and stylish clothes is unmatched, and I always receive compliments when I wear their pieces. The website is easy to navigate and their customer service team is incredibly helpful and responsive."</i> <br />
                        
                    </p>
                </div>
                
            </div>
        </div>
        </AnimationOnScroll>
     );
}

export default Testimonials;