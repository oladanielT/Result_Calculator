import React from 'react';
import logo from "../source/logo.png";
import SideBar from '../data/sidebar';

const Dashboard = () => {
    return ( 
     <div className='w-[256px] h-[1024px] '>

        <div className=' my-[24px] mx-[16px]  flex flex-col items-center justify-between gap-[16px]'>
            <div className='logo w-[224px] h-[26px] '>
                <img src={logo} alt="" />

            </div> 
            <div className='menu w-[224px] h-[814px]'>
                <ul>
                    {SideBar.map(item => (
                    <li className='flex py-[12px] px-[8px] gap-[8px] text-[16px] items-center  border hover:bg-[#110ad4] hover:text-white cursor-pointer' key={item}>
                        {item.icon}
                        {item.title}</li>

                    ))}
                </ul>
            </div>

            <div className='w-[224px] h-[104px] flex flex-col gap-[8px]'>
                <button className='h-[48px] w-full rounded-xl text-[#110ad4] border border-[#110ad4]'>Log In</button>
                <button className='h-[48px] w-full rounded-xl text-white bg-[#110ad4]'>Sign Up Free</button>

            </div>

        </div>

       

     </div>
     );
}
 
export default Dashboard;