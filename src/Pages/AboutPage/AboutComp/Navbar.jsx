import { useState } from "react";

const logo = "https://cdn.cp.adobe.io/content/2/rendition/2e009293-611c-49ae-abaa-fab4e152bb33/artwork/47e419a1-3a08-4b38-b76a-6ae7fdd979d9/version/0/format/jpg/dimension/width/size/400";

function Navbar () {

    let Links = [
        {name:'Home', link: '/Home'},
        {name:'Services', link: '/'},
        {name:'About', link: '/'},
        {name:'News', link: '/'},
    ];

    const [open, setOpen] = useState(false)

    return (  
        <div className="top-0 left-0 shadow-xl w-full sticky z-[5] ">
            <div className="flex md:justify-between flex-col md:flex-row  z-[10]
             p-2 md:items-center bg-[white] ">

                <div className="flex flex-row items-center ml-5 font-semibold">
                    
                    <span className="text-2xl ">Fationize.<span className="span-material  text-[27px]">Io</span></span>
                    
                    
                </div>
                
                <div className="absolute top-3 right-7 text-2xl md:hidden">
                    <ion-icon onClick={()=>setOpen(!open)} name={open ? 'close': 'menu-outline'}></ion-icon>
                </div>
                
                <ul className={`md:flex md:justify-between ml-5 md:static absolute z-[1] pt-2
                 md:pb-0 pb-5 left-[-21px] pl-9 md:bg-[transparent] bg-[white]  md:w-[500px] w-[100%] opacity-95
                items-center ${open ? 'top-[45px]' : 'top-[-360px]'} duration-500 ease-in-out`}>
                    {
                    Links.map((link) => 
                        <a href={link.link} key={link.name}
                        ><li  className="py-2 md:pl-5 duration-200 ease-in-out hover:scale-[1.02] hover:text-[red]">{link.name}</li></a>
                    )
                    }                                                                                                                                                                                                                                                                                                                                                                               
                    <a href="../Login">
            <button className="flex bg-[black] text-center text-white md:justify-center md:items-center
            rounded-md hover:bg-[red] hover:text-black hover:shadow-xl hover:scale-[1.01] md:px-5 md:py-2 md:mx-5 px-5 py-2 md:mt-0 mt-3
            duration-200 ease-in-out
            ">
            Login</button>
        </a> 
                </ul>
                
            </div>
        </div>
    );
}

export default Navbar;