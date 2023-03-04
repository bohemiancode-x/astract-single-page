import React from 'react'
import MapNigeria from '../assets/Nigeria.png';
import {HiPlus, HiMinus} from 'react-icons/hi';


const Map = () => {
  return (
    <div className='relative mt-1 bg-[#1b1f30] border-[1px] border-[#393c4a] rounded'>
        <div className='w-[80%]'>
            <img src={MapNigeria} alt="map" />
        </div>
        <div className='absolute top-10 right-5 lg:right-10 gap-2 flex flex-col'>
            <HiPlus className='bg-white text-[#777] text-lg lg:text-3xl rounded px-1'  />
            <HiMinus className='bg-white text-[#777] text-lg lg:text-3xl rounded px-1'  />
        </div>
        <div className='text-[#57656b] text-xs lg:text-base flex flex-col gap-2 absolute bottom-5 md:bottom-10 right-5 md:right-20'>
            <div className='flex gap-2'>
                <span className='bg-[#64ccff] h-3 w-3 md:h-6 md:w-6'></span>
                <p>APC</p>
            </div>
            <div className='flex gap-2'>
                <span className='bg-[#0aa83f] h-3 w-3 md:h-6 md:w-6'></span>
                <p>LP</p>
            </div>
            <div className='flex gap-2'>
                <span className='bg-[#d62b3c] h-3 w-3 md:h-6 md:w-6'></span>
                <p>PDP</p>
            </div>
        </div>
    </div>
  )
}

export default Map