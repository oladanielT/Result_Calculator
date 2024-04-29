import React from 'react';
import signImg from '../source/Signup.png';
import BackgroundImage from '../component/background';

function Signup() {


    return (
        <BackgroundImage imageUrl={signImg}>
            <div className='w-full h-full sm:flex justify-center items-center '>
                <div className='w-full h-full sm:w-[680px] bg-white px-4 sm:p-[60px] my-10'>
                    <div>
                        <h1 className="font-bold text-[42px] text-[#0F62Fe] text-center ">Sign Up</h1>
                        <p className='text-center'>14 days free access to unlimited resources</p>
                        <div className="my-10">
                            <form action="#">
                                <section className='flex justify-between gap-[8px]'>
                                    <label className="flex flex-col" htmlFor="name">First Name 
                                        <input className='w-full sm:w-[252px] px-[16px] py-[10px] focus:outline-none shadow-md rounded-md mt-1 bg-[#F2F4F8]' type="text" name="" id="name" placeholder='Enter First Name' />
                                    </label>

                                    <label className='flex flex-col' htmlFor="lname">Last Name 
                                        <input className='w-full sm:w-[252px] px-[16px] py-[10px] focus:outline-none shadow-md rounded-md mt-1 bg-[#F2F4F8]' type="text" name="" id="lname" placeholder='Enter Last Name' />
                                    </label>
                                </section>
                                <section className='max-w-full flex flex-col gap-5'>
                                    <label className='flex flex-col my-2' htmlFor="useremail">Email <input className='w-full px-[16px] py-[10px] shadow-md focus:outline-none rounded-md mt-1 bg-[#F2F4F8]' type="email" name="useremail" id="" placeholder='Enter Email' /></label>
                                    <label className='flex flex-col my-2' htmlFor="schoolname">School Name <input className='w-full px-[16px] py-[10px] shadow-md focus:outline-none rounded-md mt-1 bg-[#F2F4F8]' type="text" name="" id="" placeholder='schoolname' /></label>
                                    <label className='flex flex-col my-2' htmlFor="gradesys">Grading System <input className='w-full px-[16px] py-[10px] shadow-md focus:outline-none rounded-md mt-1 bg-[#F2F4F8]' type="text" name="" id="" placeholder='gradesys' /></label>
                                    <label className='flex flex-col my-2' htmlFor="userpassword">Password <input className='w-full px-[16px] py-[10px] shadow-md focus:outline-none rounded-md mt-1 bg-[#F2F4F8]' type="password" name="" id="" placeholder='userpassword' /></label>
                                    <label className='flex flex-col my-2' htmlFor="passretype">Retype Password <input className='w-full px-[16px] py-[10px] shadow-md focus:outline-none rounded-md mt-1 bg-[#F2F4F8]' type="password" name="" id="" placeholder='passretype' /></label>
                                    <label className='flex gap-[5px] text-[#110ad4]' htmlFor="useremail"><input className='' type='checkbox' name="" id="" placeholder='' /> I accept the terms and condition of use</label>
                                </section>
                                <button className='w-full py-[10px] text-center text-white bg-[#0F62Fe] my-[20px] rounded-md text-[16px]'>Sign Up</button>
                            </form>
                        </div>

                        <div>
                            <p className='text-center my-2'>Or sign up with:</p>
                            <div className='w-full sm:w-[320px] mx-auto my-2  flex flex-col sm:flex-row justify-between'>
                                <button className='py-2  sm:w-[100px] my-1 w-full rounded-md   border-2 border-[#0F62Fe] '>Google</button>
                                <button className='py-2  sm:w-[100px] my-1 w-ful rounded-md  text-center border-2 border-[#0F62Fe]'>Twitter</button>
                                <button className='py-2  sm:w-[100px] my-1 w-full rounded-md  text-center border-2 border-[#0F62Fe]'>Instagram</button>
                            </div>
                            
                        </div>

                        <p className='text-[#0F62Fe] mt-10 text-center'><a href="#"> Already have an account?</a></p>

                    </div>
                </div>
            </div>
          
         
        </BackgroundImage>
    );
}

export default Signup;
