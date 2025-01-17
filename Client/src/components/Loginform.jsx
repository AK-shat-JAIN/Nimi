import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { logIn } from "../Redux/Slices/AuthSlice";

const Loginform = () => {
    const dispatch = useDispatch();    
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    function handleUserInput(e){
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    }

    async function onLogin(event){
        event.preventDefault();                   //to prevent the default behaviour of the button i.e. to submit the form
        
        if(!loginData.email || !loginData.password){
            toast.error("Please fill all the fields");
            return;
        }

        // const formData = new FormData();
        // formData.append("email", signupData.email);
        // formData.append("password", signupData.password);
        // ****************Its not mandatory to use FormData, we can also use a simple object ****************

        //dispatch login action
        const response = await dispatch(logIn(loginData));
        if(response?.payload?.success){
            navigate('/');
        }

        setLoginData({
            email: "",
            password: "",
        });
    }

  return (
    
    <div className="flex flex-col sm:flex-row m-0 p-0 items-center justify-center bg-white h-[100vh] position:relative overflow-hidden w-[100vw] min-h-[480px]">


        <div className="welcome-container h-[100vh] bg-purple-700 px-6 flex flex-col justify-center gap-3 sm:rounded-tr-[100px] sm:rounded-br-[100px] md:w-[50%] sm:w-full ">
            <h1 className='text-center text-3xl sm:text-4xl font-bold text-white'>Welcome To NIMI</h1>
            <p className='text-center text-white text-sm sm:text-base'>Seamless Acess For Admins, Managers, And Teams - Manage, Collaborate, Excel.</p>
        </div>


        <div className="flex flex-col justify-center items-center gap-2 h-[70vh] sm:w-1/2 w-full sm:h-auto bg-white sm:rounded-tl-[150px] sm:rounded-bl-[100px] p-6 ">
        <form noValidate onSubmit={onLogin} className="w-full max-w-sm bg-white flex flex-col gap-4" action="">
            <h1 className="text-center text-purple-700 text-2xl font-bold">Login</h1>

            <div className="flex flex-col gap-2 mt-3">
                {/* <label htmlFor="email" className="font-semibold"> Email </label> */}
                <input 
                    type="email" 
                    required
                    name="email" 
                    id="email" 
                    placeholder="Enter your email"
                    className="px-4 py-3 border border-gray-400 bg-gray-300 m-[8px 0] rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    onChange={handleUserInput}
                    value={loginData.email}
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                {/* <label htmlFor="password" className="font-semibold"> Password </label> */}
                <input 
                    type="password" 
                    required
                    name="password" 
                    id="password" 
                    placeholder="Enter your password"
                    className="px-4 py-3 border border-gray-400 m-[8px 0] bg-gray-300 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    onChange={handleUserInput}
                    value={loginData.password}
                />
                <a className='text-gray-320 text-sm decoration-none  hover:underline self-end' href="#">Forgot Your Password?</a>
            </div>

            <button type="submit" className="w-full py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300 text-transform uppercase letterspacing-[0.5px] cursor-pointer">
                Login
            </button>

            {/* <p className="text-center">
                Create an account? <Link to="/signup" className="link text-accent cursor-pointer">Signup</Link>
            </p> */}

        </form></div>
    </div>

  )
}

export default Loginform
