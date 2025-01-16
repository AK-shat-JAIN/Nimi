import React from 'react'


const Loginform = () => {
  return (
    
    <div className="flex flex-col sm:flex-row mx-auto items-center justify-center bg-white rounded-[30px] h-[70vh] shadow-[0_5px_150px_black] position:relative overflow-hidden w-[100%] min-h-[480px]">


        <div className="welcome-container h-[70vh] bg-purple-700 p-6 flex flex-col justify-center gap-3 sm:rounded-tr-[150px] sm:rounded-br-[100px] md:w-1/2 sm:w-full ">
            <h1 className='text-center text-3xl sm:text-4xl font-bold text-white'>Welcome To NIMI</h1>
            <p className='text-center text-white text-sm sm:text-base'>Seamless Acess For Admins, Managers, And Teams - Manage, Collaborate, Excel.</p>
        </div>


        <div className="flex flex-col justify-center items-center gap-2 h-[70vh] sm:w-1/2 w-full sm:h-auto bg-white sm:rounded-tl-[150px] sm:rounded-bl-[100px] p-6 ">
        <form noValidate className="w-full max-w-sm bg-white flex flex-col gap-4" action="">
            <h1 className="text-center text-2xl font-bold">Login Page</h1>

            <div className="flex flex-col gap-2 mt-3">
                {/* <label htmlFor="email" className="font-semibold"> Email </label> */}
                <input 
                    type="email" 
                    required
                    name="email" 
                    id="email" 
                    placeholder="Enter your email"
                    className="px-4 py-3 border border-gray-300 m-[8px 0] rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    // onChange={handleUserInput}
                    // value={loginData.email}
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
                    className="px-4 py-3 border border-gray-300 m-[8px 0] rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    // onChange={handleUserInput}
                    // value={loginData.password}
                />
                <a className='text-gray-300 text-sm decoration-none  hover:underline self-end' href="#">Forgot Your Password?</a>
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
