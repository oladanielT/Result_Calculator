import React from 'react';
import BackgroundImage from '../component/background';
import bgimg from '../source/Signup.png'

const Login = () => {
    return ( 
        <BackgroundImage imageUrl={bgimg}>
            <div className='w-full h-screen flex justify-center items-center '>
                <div className='w-full h-[778px] sm:w-[680px] sm:px-[80px] py-[80px] bg-[#ffff] border '>
                    <div className='flex flex-col '>
                        <h1 className='text-[42px] text-[#110ab4] text-center font-bold '>Welcome</h1>
                        <span className='text-center text-[16px]'>Please log in to continue</span>

                        <form className='my-[24px]' action="#">
                             <label className='flex flex-col gap-1 my-4' htmlFor="useremail">Email
                                <input className='py-2 px-4 focus:outline-none bg-[#F2F4F8] rounded-md ' type="email" name="" id="" placeholder='Enter your email' />
                            </label>

                            <label className='flex flex-col gap-1 my-4' htmlFor="#">Password
                                <input className='py-2 px-4 focus:outline-none bg-[#F2F4F8] rounded-md ' type="password" name="" id="" placeholder='Enter your password' />
                            </label>

                            <div className='flex justify-between items-center my-4'>
                                <label className='flex items-center gap-2' htmlFor="">
                                    <input className='w-[15px] h-[15px]' type="checkbox" /> Remember me
                                </label>
                                <span className='text-[#110ab4] '>Forgot Password?</span>
                            </div>
                            <button className='w-full py-2 bg-[#110ab4] text-white rounded-lg '>Log In</button>
                        </form>

                        <div className='w-full my-5'>
                            <p className='text-center'>Or log in with:</p>
                            <div className='w-full flex justify-between gap-2 my-4'>
                                <button className='w-full py-2 border-2 rounded-lg border-[#110ab4] '>Google</button>
                                <button className='w-full py-2 border-2 rounded-lg border-[#110ab4] '>Apple</button>
                                <button className='w-full py-2 border-2 rounded-lg border-[#110ab4] '>Twitter</button>
                            </div>
                          
                        </div>


                    </div>
                </div>
            </div>
        </BackgroundImage>
     );
}
 
export default Login;