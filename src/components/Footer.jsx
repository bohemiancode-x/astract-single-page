import React from 'react';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/instagram.svg';
import Whatsapp from '../assets/whatsapp.svg';
import Logo from '../assets/Hernalytics.png'

const Footer = () => {
  return (
    <div className='bg-[#353949] grid grid-rows-2 gap-5 grid-flow-col px-2 md:flex w-full justify-around py-12 text-white text-xs md:text-sm'>
        <div className='flex flex-col col-span-2 gap-4'>
            <img src={Logo} className='h-6 w-[40%]' alt="logo" />
            <div className='flex md:hidden items-center gap-3'>
                <img src={Instagram} alt="insta" />
                <img src={Twitter} alt="twitter" />
                <img src={Whatsapp} alt="whatsapp" />
            </div>
            <p>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria.</p>
            <div className='flex flex-col gap-2 md:hidden'>
            <p>hernalytics@gmail.com</p>
            <p>+234 801 234 5678</p>
            </div>
            <p>&#169; 2022 Hernalytics</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='font-bold text-base'>About</p>
            <p>Our Story</p>
            <p>Blog</p>
            <p>About Hernalytics</p>
            <p>Videos</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='font-bold text-base'>Support</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
        <div className='hidden md:flex flex-col gap-3'>
            <p className='font-bold'>Let's Chat!</p>
            <p>hernalytics@gmail.com</p>
            <p>+234 801 234 5678</p>
            <div className='flex items-center gap-2'>
                <img src={Instagram} alt="insta" />
                <img src={Twitter} alt="twitter" />
                <img src={Whatsapp} alt="whatsapp" />
            </div>
        </div>

    </div>
  )
}

export default Footer