import React from 'react';

const Footer = () => {
    return ( 
        <div className='w-full h-[40px] bg-[#110ab4] text-white flex items-center justify-center fixed bottom-0'>
            <p className='text-center py-2 text-[12px] md:text-[14px]'>&copy; {new Date().getFullYear()} CompanyName. All right reserved.</p>
        </div>
     );
}
 
export default Footer;