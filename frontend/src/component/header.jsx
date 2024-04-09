import React from 'react';
import logo from '../source/logo.png';
import { RiMenu4Line } from "react-icons/ri";
import Dashboard from './dashboard';


const Header = () => {
    return ( 
        <div className='w-full relative px-[40px] py-[8px] border-b flex items-center justify-between lg:grid grid-cols-3 gap-[12px]'>
            <div className='logo py-2'>
                <img src={logo} alt="" />
            </div>
            <RiMenu4Line className='block lg:hidden' size={30}/>
            <div className='absolute right-0 top-2 hidden'>
                <Dashboard className=""/>
            </div>
            
            
            <div className='menus cursor-pointer hidden lg:block '>
                <ul className='flex justify-around'>
                    <li className='p-2'>Home</li>
                    <li className='p-2'>Summary</li>
                    <li className='p-2'>Profile</li>
                    <li className='p-2'>Contact Us</li>
                </ul>
            </div>
            <div className="form hidden lg:flex justify-end gap-[8px]">
                <button className='py-1  text-[#110ad4] border border-[#110ad4] w-[103px] rounded-xl'>Log In</button>
                <button className=' bg-[#110ad4] text-white rounded-xl w-[115px] '>Sign Up</button>
            </div>

        </div>
     );
}
 
export default Header;