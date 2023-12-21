
function Footer() {
    const textAnimation = "duration-200 ease-in-out hover:scale-[1.02] hover:text-[red]"
    return ( 
        <div className="mt-[0px] ">
            <div className="w-full h-[10px] cta-card"></div>
            <div className="w-full md:h-[120px] h-[150px] bg-[#1B1C22] mt-[0px] flex md:flex-row flex-col justify-between items-center px-5">
                <div className="w-[20%] h-[120px]  flex items-center justify-center">
                <span className="text-2xl text-[white]">Fationize.<span className="span-material text-                           text-[27px]">Io</span></span>
                </div>
                <div className="w-[60%] h-[100px] bg-[] flex justify-center items-center">
                    <ul className="flex flex-row">
                        <a href=""><li className={`md:px-4 px-3 md:text-[1em] text-[13px] text-white ${textAnimation}`}>Home</li></a>
                        <a href=""><li className={`md:px-4 px-3 md:text-[1em] text-[13px] text-white ${textAnimation}`}>Services</li></a>
                        <a href=""><li className={`md:px-4 px-3 md:text-[1em] text-[13px] text-white ${textAnimation}`}>Contact</li></a>
                        <a href=""><li className={`md:px-4 px-3 md:text-[1em] text-[13px] text-white ${textAnimation}`}>News</li></a>
                    </ul>
                </div>
                <div className="w-[20%] h-[120px]  flex items-center justify-center">
                    <ul className="flex flex-row">
                            <a href=""><li className={`text-white text-xl px-3 md:px-3 px-1 md:text-[1.2em] text-[1.1em] ${textAnimation}`}><ion-icon name="logo-github"></ion-icon></li></a>
                            <a href=""><li className={`text-white text-xl px-3 md:px-3 px-1 md:text-[1.2em] text-[1.1em] ${textAnimation}`}><ion-icon name="logo-instagram"></ion-icon></li></a>
                            <a href=""><li className={`text-white text-xl px-3 md:px-3 px-1 md:text-[1.2em] text-[1.1em] ${textAnimation}`}><ion-icon name="logo-discord"></ion-icon></li></a>
                            <a href=""><li className={`text-white text-xl px-3 md:px-3 px-1 md:text-[1.2em] text-[1.1em] ${textAnimation}`}><ion-icon name="logo-twitter"></ion-icon></li></a>
                        </ul>
                </div>
            </div>
            
        </div>
     );
}

export default Footer;