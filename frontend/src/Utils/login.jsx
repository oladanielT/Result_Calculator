import React, {useState} from 'react';
import BackgroundImage from '../component/background';
import { AiOutlineGoogle } from "react-icons/ai";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import bgimg from '../source/Signup.png'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return ( 
        <BackgroundImage className='w-full h-full' imageUrl={bgimg}>
            <div className='w-full flex justify-center items-center '>
                <div className='w-full px-2 mx-3 py-[30px] rounded-md sm:h-[700px] justify-center items-center my-10 sm:w-[680px] sm:px-[80px] sm:py-[70px] bg-[#ffff] border '>
                    <div className='flex flex-col '>
                        <h1 className='text-[42px] text-black text-center font-bold '>Welcome</h1>
                        <span className='text-center text-[16px]'>Please log in to continue</span>

                        <form className='my-[24px]' action="#">
                             <label className='flex flex-col gap-1 my-4 ' htmlFor="useremail">Email
                                <input className='py-2 px-4 shadow-sm focus:outline-none bg-[#F2F4F8] rounded-md ' type="email" name="" id="" placeholder='Enter your email' />
                            </label>

                            <label className='flex flex-col gap-1 my-4 ' htmlFor="#">Password
                                <div className='flex justify-between items-center border-2 bg-[#F2F4F8]'>
                                    <input className='py-2 px-4 shadow-sm focus:outline-none w-[90%] bg-[#F2F4F8] rounded-md ' type="password" name="" id="" placeholder='Enter your password' />
                                    
                                    {
                                    showPassword === false?
                                    <IoEyeOutline onClick={()=>!setShowPassword(true)} className='mr-4 cursor-pointer ' color='grey' size={20}/>
                                    :
                                    <IoEyeOffOutline onClick={()=>!setShowPassword(false)} className='mr-4 cursor-pointer' size={20} color='grey'/>
                                    }
                                    
                                </div>
                               

                            </label>

                            <div className='flex justify-between items-center my-4'>
                                <label className='flex items-center gap-2' htmlFor="">
                                    <input className='w-[15px] h-[15px]' type="checkbox" /> Remember me
                                </label>
                                <span className='text-[#110ab4] '>Forgot Password?</span>
                            </div>
                            <button className='w-full py-2 bg-[#0f62fe] text-white rounded-lg'>Log In</button>
                        </form>

                        <div className='w-full my-5'>
                            <p className='text-center'>Or log in with:</p>
                            <div className='w-full flex flex-col sm:flex-row justify-between gap-2 my-4 '>
                                <button className='w-full py-2 border-2 rounded-lg border-[#0f62fe] flex items-center text-[#0f62fe] justify-center gap-3'><AiOutlineGoogle size={25} />Google</button>
                                <button className='w-full py-2 border-2 rounded-lg border-[#0f62fe] flex items-center text-[#0f62fe] justify-center gap-2'><FaApple size={25}/> Apple</button>
                                <button className='w-full py-2 border-2 rounded-lg border-[#0f62fe] flex items-center text-[#0f62fe] justify-center gap-2'><FaTwitter size={25}/> Twitter</button>
                            </div>
                          
                        </div>


                    </div>
                </div>
            </div>
        </BackgroundImage>
     );
}
 
export default Login;