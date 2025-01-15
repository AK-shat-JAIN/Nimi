import React from 'react'


const Loginform = () => {
  return (
    
    <div className="flex flex-row mx-auto items-center justify-center h-[80vh] bg-white rounded-[30px] shadow-[0_5px_150px_black] position:relative overflow-hidden w-[768px] max-w-[100%] min-h-[480px]">


        <div className="welcome-container position-absolute top-0 left-[50%] w-[50%] h-[100%] overflow-hidden bg-[#512da8] px-6 flex flex-col justify-center gap-3 rounded-tr-[150px] rounded-br-[100px] p-24  sm:w-96 shadow-[0_0_10px_black]">
            <h1 className='text-center text-4xl font-bold text-white'>Welcome To NIMI</h1>
            <p className='text-center text-white'>Seamless Acess For Admins, Managers, And Teams - Manage, Collaborate, Excel.</p>
        </div>


        <div className="position-absolute h-[100%] w-[50%] right-0 bg-[#fff] rounded-tl-[150px] rounded-bl-[100px] p-24 flex flex-col justify-center items-center gap-3">
        <form noValidate className="p-[0 40px] flex flex-col justify-center items-center gap-3 rounded-lg  text- w-[80%] sm:w-96 bg-[#fff]" action="">
            <h1 className="text-center text-2xl font-bold">Login Page</h1>

            <div className="mt-3 flex flex-col gap-1">
                {/* <label htmlFor="email" className="font-semibold"> Email </label> */}
                <input 
                    type="email" 
                    required
                    name="email" 
                    id="email" 
                    placeholder="Enter your email"
                    className="px-[10px] py-[15px] border-none bg-[#eee] m-[8px 0] rounded-[8px] text-[13px] w-[100%] outline-none"
                    // onChange={handleUserInput}
                    // value={loginData.email}
                />
            </div>
            <div className="mt-3 flex flex-col gap-1">
                {/* <label htmlFor="password" className="font-semibold"> Password </label> */}
                <input 
                    type="password" 
                    required
                    name="password" 
                    id="password" 
                    placeholder="Enter your password"
                    className="px-[10px] py-[15px] border-none bg-[#eee] m-[8px 0] rounded-[8px] text-[13px] w-[100%] outline-none"
                    // onChange={handleUserInput}
                    // value={loginData.password}
                />
                <a className='text-[#333] text-[13px] decoration-none m-[10px]' href="#">Forgot Your Password?</a>
            </div>

            <button type="submit" className="mt-[10px] py-[10px] px-[15px] text-[12px] w-[60%] bg-[#512da8] hover:bg-[#512da2] text-white transition-all ease-in-out duration-300 rounded-[8px] text-transform uppercase letterspacing-[0.5px] cursor-pointer">
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
