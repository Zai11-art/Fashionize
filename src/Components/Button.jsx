import Login from "../Pages/LoginPage/Login";

function LoginButton() {
    return ( 
        <a href="../Login">
            <button className="flex bg-[black] text-center text-white md:justify-center md:items-center
            rounded-md hover:bg-[red] hover:text-black hover:shadow-xl hover:scale-[1.01] md:px-5 md:py-2 md:mx-5 px-5 py-2 md:mt-0 mt-3
            duration-200 ease-in-out
            ">
            Login</button>
        </a> 
     );
}                                                          

export default LoginButton;