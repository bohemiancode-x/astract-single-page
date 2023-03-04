import React from 'react'
import Logo from '../assets/Hernalytics.png';
import {MdArrowDropDown} from 'react-icons/md';
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
const [anchorEl, setAnchorEl] = React.useState(false);

const handleAnchor = () => {
    setAnchorEl(!anchorEl);
}


  return (
    <div className='flex bg-bgColor z-[1000] text-xs text-white justify-between px-5 items-center font-medium sticky top-0 py-4'>
        <img src={Logo} className='w-36' alt="logo" />
        <div className='hidden lg:flex items-center justify-around w-full'>
            <span>ABOUT US</span>
            <button className='flex items-center'>
                OUR COMMUNITIES
                <MdArrowDropDown size={28} />
            </button>
            <button onClick={handleAnchor} className='flex relative items-center'>
                ELECTION DATA
                <MdArrowDropDown size={28} />
                {/* <div className={anchorEl ? 'absolute flex flex-col top-8 w-[14em] h-[20em] z-[99] gap-4 items-center py-3 px-2 bg-white text-black' : 'hidden'}>
                    <span>Election Day Live Updates</span>
                    <span>Post-Election Analysis</span>
                </div> */}
            </button>
            <span>E-BUDDY</span>
            <span>VEO PLATFORM</span>
            <button>LOGIN</button>
            <button className='bg-[#e5b805] text-black rounded py-2 px-5'>SIGN UP</button>
        </div>
        <AiOutlineMenu size={28} className='lg:hidden cursor-pointer' />
    </div>
  )
}

export default Navbar